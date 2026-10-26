/**
 * OhMySkills - Diagnostic Doctor & Token Linter Engine
 * Audits AI rules, detects conflicts, quantifies context token bloat, and provides health scores.
 */

const Doctor = {
  /**
   * Run full diagnostics on a collection of parsed skills
   */
  diagnose(skills) {
    const issues = [];
    let totalTokens = 0;
    let alwaysApplyTokens = 0;
    const nameMap = new Map();
    const globMap = new Map();

    const VAGUE_PHRASES = [
      'write clean code',
      'be concise',
      'follow best practices',
      'be helpful',
      'no bugs',
      'write good code',
      'clean architecture'
    ];

    skills.forEach((skill, index) => {
      totalTokens += skill.tokenCount || 0;
      if (skill.alwaysApply) {
        alwaysApplyTokens += skill.tokenCount || 0;
      }

      // Check 1: Duplicate Names
      const lowerName = (skill.name || '').toLowerCase();
      if (nameMap.has(lowerName)) {
        issues.push({
          level: 'error',
          code: 'DUPLICATE_NAME',
          skillId: skill.id,
          skillName: skill.name,
          message: `Duplicate rule name "${skill.name}" detected (also defined in ${nameMap.get(lowerName)}). AI agent will encounter routing ambiguity.`,
          messageZh: `检测到重复规则名称 "${skill.name}" (在 ${nameMap.get(lowerName)} 中已存在)。AI Agent 将产生路由歧义。`,
          fix: 'Rename one of the rules to make intent distinct.',
          fixZh: '重命名其中一条规则，使意图明确区分。'
        });
      } else {
        nameMap.set(lowerName, skill.path || skill.filename);
      }

      // Check 2: Missing Description
      if (!skill.description || skill.description.trim().length < 8) {
        issues.push({
          level: 'error',
          code: 'MISSING_DESCRIPTION',
          skillId: skill.id,
          skillName: skill.name,
          message: `Rule "${skill.name}" is missing a clear 'description' frontmatter. Agents cannot discover or route to this skill dynamically.`,
          messageZh: `规则 "${skill.name}" 缺少清晰的 description 描述。AI Agent 无法在运行时动态检索或路由到该技能。`,
          fix: 'Add a concise 1-2 sentence description explaining WHEN and WHY this rule applies.',
          fixZh: '添加 1-2 句简洁描述，解释何时及为何应调用此规则。'
        });
      }

      // Check 3: Legacy Monolithic .cursorrules
      if (skill.platform === 'legacy' || skill.filename === '.cursorrules') {
        issues.push({
          level: 'warning',
          code: 'LEGACY_FORMAT',
          skillId: skill.id,
          skillName: skill.name,
          message: `Legacy .cursorrules detected. Modern Cursor agent modes ignore or misinterpret global monolithic files.`,
          messageZh: `检测到旧版单体 .cursorrules。现代 Cursor Agent 模式在处理长单体文件时容易产生幻觉或忽略部分约束。`,
          fix: 'Migrate to modular .cursor/rules/*.mdc or on-demand SKILL.md with path globs.',
          fixZh: '拆分迁移为模块化 .cursor/rules/*.mdc 或按需调用的 SKILL.md。'
        });
      }

      // Check 4: AlwaysApply Token Bloat
      if (skill.alwaysApply && skill.platform !== 'universal') {
        issues.push({
          level: 'warning',
          code: 'ALWAYS_APPLY_BLOAT',
          skillId: skill.id,
          skillName: skill.name,
          message: `Rule "${skill.name}" has alwaysApply: true, permanently consuming ~${skill.tokenCount} tokens on EVERY single turn.`,
          messageZh: `规则 "${skill.name}" 开启了 alwaysApply: true，在每一轮对话中永久消耗 ~${skill.tokenCount} tokens。`,
          fix: 'Scope with specific file "globs" (e.g. **/*.tsx) or switch to on-demand intent routing.',
          fixZh: '配置精准的 globs 范围匹配 (如 **/*.tsx)，或改为按需意图路由。'
        });
      }

      // Check 5: Vague fluff directives
      const contentLower = (skill.rawContent || '').toLowerCase();
      for (let phrase of VAGUE_PHRASES) {
        if (contentLower.includes(phrase)) {
          issues.push({
            level: 'info',
            code: 'VAGUE_INSTRUCTION',
            skillId: skill.id,
            skillName: skill.name,
            message: `Found vague non-actionable phrase "${phrase}" in "${skill.name}". Models ignore vague directives.`,
            messageZh: `在 "${skill.name}" 中发现模糊指令 "${phrase}"。模型通常会忽略这类无法定量验证的要求。`,
            fix: 'Replace with verifiable constraints (e.g., "Use Zod schema validation for all request inputs").',
            fixZh: '替换为可验证的硬性约束 (例如 "所有请求输入必须使用 Zod 进行 schema 校验")。'
          });
          break;
        }
      }

      // Check 6: Large Rule Token Warning
      if (skill.tokenCount > 1200) {
        issues.push({
          level: 'warning',
          code: 'OVERSIZED_RULE',
          skillId: skill.id,
          skillName: skill.name,
          message: `Rule "${skill.name}" exceeds 1,200 tokens (~${skill.tokenCount} tokens). Large prompt rules cause context dilution.`,
          messageZh: `规则 "${skill.name}" 超过 1,200 tokens (实测 ~${skill.tokenCount} tokens)。过大的规则会导致上下文稀释。`,
          fix: 'Break into smaller sub-rules or extract long code examples into reference documentation.',
          fixZh: '拆解为细粒度子规则，或将冗长示例代码抽取到外部参考文档中。'
        });
      }

      // Track glob overlap
      if (Array.isArray(skill.globs) && skill.globs.length > 0) {
        skill.globs.forEach(g => {
          if (!globMap.has(g)) globMap.set(g, []);
          globMap.get(g).push(skill.name);
        });
      }
    });

    // Check 7: Overlapping Globs (> 3 rules sharing identical broad glob like **/*.ts)
    globMap.forEach((matchedSkills, globPattern) => {
      if (matchedSkills.length >= 3 && (globPattern === '**/*' || globPattern === '**/*.ts' || globPattern === '**/*.js')) {
        issues.push({
          level: 'info',
          code: 'OVERLAPPING_GLOBS',
          skillId: 'multiple',
          skillName: matchedSkills.join(', '),
          message: `${matchedSkills.length} rules share broad glob "${globPattern}". These all inject simultaneously when opening matching files.`,
          messageZh: `${matchedSkills.length} 条规则共享了宽泛的文件匹配模式 "${globPattern}"。打开对应文件时将全部同时注入。`,
          fix: 'Narrow down directory patterns or combine complementary rules.',
          fixZh: '收窄目录匹配模式，或合并相互补充的规则。'
        });
      }
    });

    // Calculate Health Score (0 - 100)
    let score = 100;
    const errorsCount = issues.filter(i => i.level === 'error').length;
    const warningsCount = issues.filter(i => i.level === 'warning').length;
    const infoCount = issues.filter(i => i.level === 'info').length;

    score -= (errorsCount * 15);
    score -= (warningsCount * 6);
    score -= (infoCount * 2);

    if (score < 10) score = 10;
    if (score > 100) score = 100;

    // Grade Assignment
    let grade = 'A';
    let gradeColor = 'emerald';
    if (score >= 90) { grade = 'A+'; gradeColor = 'emerald'; }
    else if (score >= 80) { grade = 'A'; gradeColor = 'emerald'; }
    else if (score >= 70) { grade = 'B'; gradeColor = 'cyan'; }
    else if (score >= 60) { grade = 'C'; gradeColor = 'amber'; }
    else { grade = 'F'; gradeColor = 'rose'; }

    // Optimization Savings estimate:
    // If user migrates alwaysApply rules to dynamic routing, savings = ~alwaysApplyTokens
    const potentialTokenSavings = alwaysApplyTokens;
    const savingsPercent = totalTokens > 0 ? Math.round((potentialTokenSavings / totalTokens) * 100) : 0;

    return {
      score,
      grade,
      gradeColor,
      totalSkills: skills.length,
      totalTokens,
      alwaysApplyTokens,
      potentialTokenSavings,
      savingsPercent,
      errorsCount,
      warningsCount,
      infoCount,
      issues
    };
  },

  /**
   * One-Click Auto-Fix Engine: "Everything Done For You"
   * Resolves alwaysApply bloat, generates missing descriptions, and renames duplicates automatically.
   */
  autoFix(skills) {
    let fixedCount = 0;
    const nameSet = new Set();

    const updated = skills.map((skill, idx) => {
      const copy = { ...skill };
      let changed = false;

      // Fix 1: Stop alwaysApply token bloat
      if (copy.alwaysApply && copy.platform !== 'universal') {
        copy.alwaysApply = false;
        if (!copy.globs || copy.globs.length === 0) {
          if (copy.domain === 'Frontend') copy.globs = ['**/*.tsx', '**/*.jsx', '**/*.css'];
          else if (copy.domain === 'Backend') copy.globs = ['**/*.ts', '**/*.py', '**/*.go'];
          else if (copy.domain === 'DevOps') copy.globs = ['Dockerfile*', 'docker-compose*.yml', 'helm/**'];
          else copy.globs = ['**/*.md'];
        }
        changed = true;
      }

      // Fix 2: Auto-generate missing description
      if (!copy.description || copy.description.trim().length < 8) {
        copy.description = `Standard engineering rules for ${copy.name || 'this module'}, automatically loaded on demand.`;
        changed = true;
      }

      // Fix 3: Resolve duplicate names
      const lower = (copy.name || '').toLowerCase();
      if (nameSet.has(lower)) {
        copy.name = `${copy.name}-mod-${idx + 1}`;
        copy.id = copy.name.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
        changed = true;
      } else {
        nameSet.add(lower);
      }

      if (changed) fixedCount++;
      return copy;
    });

    return {
      fixedCount,
      skills: updated
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Doctor;
}
