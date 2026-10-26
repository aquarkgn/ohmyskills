/**
 * OhMySkills - Client-Side Rule & Skill Parser
 * 100% in-browser parsing for .cursor/rules/*.mdc, SKILL.md, and legacy prompts.
 */

const Parser = {
  /**
   * Fast, zero-dependency YAML Frontmatter parser for Markdown/MDC
   */
  parseFrontmatter(rawText) {
    if (!rawText || typeof rawText !== 'string') {
      return { frontmatter: {}, body: '' };
    }

    const trimmed = rawText.trim();
    if (!trimmed.startsWith('---')) {
      return { frontmatter: {}, body: rawText };
    }

    // Match leading frontmatter block: --- ... ---
    const match = rawText.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) {
      return { frontmatter: {}, body: rawText };
    }

    const yamlBlock = match[1];
    const body = match[2];
    const frontmatter = {};

    // Parse simple key-value YAML pairs without external heavy library
    const lines = yamlBlock.split(/\r?\n/);
    let currentKey = null;

    for (let line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine || trimmedLine.startsWith('#')) continue;

      // Handle array items: - item
      if (trimmedLine.startsWith('- ') && currentKey) {
        if (!Array.isArray(frontmatter[currentKey])) {
          frontmatter[currentKey] = [];
        }
        const val = trimmedLine.slice(2).trim().replace(/^['"]|['"]$/g, '');
        frontmatter[currentKey].push(val);
        continue;
      }

      // Handle key: value
      const colonIdx = line.indexOf(':');
      if (colonIdx !== -1) {
        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();

        // Convert types
        if (value === 'true') value = true;
        else if (value === 'false') value = false;
        else if (/^\d+$/.test(value)) value = parseInt(value, 10);
        else if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
        else if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
        else if (value === '') {
          // Multiline or array starts next
          currentKey = key;
          frontmatter[key] = [];
          continue;
        }

        frontmatter[key] = value;
        currentKey = key;
      }
    }

    return { frontmatter, body };
  },

  /**
   * Accurate heuristic Token estimation (calibrated against cl100k_base / Claude / Gemini)
   */
  estimateTokens(text) {
    if (!text) return 0;
    // CJK characters count ~1.5 tokens each; English words/code average ~3.8 chars per token
    const cjkMatches = text.match(/[\u4e00-\u9fa5\u3040-\u30ff\uff00-\uffef]/g);
    const cjkCount = cjkMatches ? cjkMatches.length : 0;
    const nonCjkText = text.replace(/[\u4e00-\u9fa5\u3040-\u30ff\uff00-\uffef]/g, '');

    const words = nonCjkText.trim().split(/\s+/).filter(Boolean).length;
    const chars = nonCjkText.length;
    
    // Weighted formula
    const nonCjkTokens = Math.max(words, Math.ceil(chars / 3.8));
    const cjkTokens = Math.ceil(cjkCount * 1.5);

    return nonCjkTokens + cjkTokens;
  },

  /**
   * Automatically detect domain / category based on filename, tags, and content
   */
  inferDomain(filename, content, tags = []) {
    const text = (filename + ' ' + content + ' ' + tags.join(' ')).toLowerCase();

    if (text.includes('react') || text.includes('vue') || text.includes('frontend') || text.includes('css') || text.includes('html') || text.includes('tailwind') || text.includes('ui')) {
      return 'Frontend';
    }
    if (text.includes('postgres') || text.includes('sql') || text.includes('database') || text.includes('golang') || text.includes('go ') || text.includes('python') || text.includes('api') || text.includes('backend')) {
      return 'Backend';
    }
    if (text.includes('docker') || text.includes('k8s') || text.includes('kubernetes') || text.includes('helm') || text.includes('deploy') || text.includes('devops') || text.includes('ci/cd')) {
      return 'DevOps';
    }
    if (text.includes('test') || text.includes('vitest') || text.includes('jest') || text.includes('mock') || text.includes('qa')) {
      return 'Testing';
    }
    if (text.includes('security') || text.includes('injection') || text.includes('auth') || text.includes('vulnerability')) {
      return 'Security';
    }
    if (text.includes('git') || text.includes('commit') || text.includes('release') || text.includes('workflow')) {
      return 'Workflow';
    }
    return 'General';
  },

  /**
   * Parse a file into a standardized Skill Object
   */
  parseFile(filename, content, path = '') {
    const { frontmatter, body } = this.parseFrontmatter(content);

    // Platform detection
    let platform = 'agent';
    if (filename.endsWith('.mdc')) {
      platform = 'cursor';
    } else if (filename === '.cursorrules') {
      platform = 'legacy';
    } else if (filename.includes('claude') || path.includes('.claude')) {
      platform = 'claude';
    } else if (filename === 'AGENTS.md' || filename === 'CLAUDE.md') {
      platform = 'universal';
    }

    // Name extraction
    let name = frontmatter.name;
    if (!name) {
      // Derive from filename: react-19.mdc -> react-19
      name = filename.replace(/\.(mdc|md|txt)$/, '');
      if (name === '.cursorrules') name = 'cursorrules-legacy';
    }

    // Description extraction
    let description = frontmatter.description || '';
    if (!description) {
      // Fallback: look for first paragraph in markdown body
      const firstPara = body.split(/\n\s*\n/)[0]?.replace(/^[#\-*\s]+/, '').trim();
      if (firstPara && firstPara.length > 10 && firstPara.length < 250) {
        description = firstPara;
      }
    }

    // Globs extraction
    let globs = frontmatter.globs || [];
    if (typeof globs === 'string') {
      globs = globs.split(',').map(s => s.trim()).filter(Boolean);
    }

    // Always Apply flag
    const alwaysApply = frontmatter.alwaysApply === true || frontmatter.alwaysApply === 'true' || platform === 'legacy';

    // Tags extraction
    let tags = frontmatter.tags || [];
    if (typeof tags === 'string') {
      tags = tags.split(',').map(s => s.trim()).filter(Boolean);
    }

    // Triggers extraction
    let triggers = frontmatter.triggers || [];
    if (typeof triggers === 'string') {
      triggers = [triggers];
    }

    const domain = this.inferDomain(filename, content, tags);
    const tokenCount = this.estimateTokens(content);

    return {
      id: name.toLowerCase().replace(/[^a-z0-9_-]/g, '-'),
      name,
      filename,
      path: path || filename,
      platform,
      domain,
      description,
      globs,
      alwaysApply,
      triggers,
      tags,
      frontmatter,
      body,
      rawContent: content,
      tokenCount
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Parser;
}
