/**
 * OhMySkills - Dynamic Meta-Router Prompt Compiler
 * Compiles dozens of static rules into 1 lean on-demand router prompt.
 */

const Router = {
  /**
   * Compile skills into a single Meta-Router system prompt
   */
  compileRouterPrompt(skills) {
    if (!skills || skills.length === 0) {
      return '';
    }

    const validSkills = skills.filter(s => s.name && s.description);

    let prompt = `You are an expert AI software engineer equipped with an on-demand skill library.
To keep the context window lean and avoid instruction hallucination, you must dynamically read and apply rules ONLY when relevant.

# Available On-Demand Skills Registry

| Skill Identifier | Domain | When to Activate / Triggers | Target Rule Path |
| :--- | :--- | :--- | :--- |
`;

    validSkills.forEach(skill => {
      const triggersText = (skill.triggers && skill.triggers.length > 0)
        ? skill.triggers.slice(0, 2).join('; ')
        : (skill.description || 'General task assistance');

      const safeTriggers = triggersText.replace(/\|/g, '\\|');
      const safeDesc = (skill.description || '').replace(/\|/g, '\\|');
      const summary = safeTriggers.length > 80 ? safeTriggers.slice(0, 77) + '...' : safeTriggers;

      prompt += `| \`${skill.name}\` | ${skill.domain} | ${summary} | \`${skill.path || skill.filename}\` |\n`;
    });

    prompt += `
# Execution Contract & Routing Protocol
1. **Zero Eager Loading**: Do not assume rules are active unless the user's current request, code context, or target file matches a skill's triggers or globs.
2. **On-Demand Loading**: When a match occurs, read the target rule file into context and follow its constraints strictly.
3. **Priority & Precedence**: If multiple skills match, prioritize domain-specific rules over general standards.
4. **Clean Exit**: Do not retain unrelated skill instructions across unrelated conversational steps.
`;

    return prompt;
  },

  /**
   * Generate a standalone single-file portable HTML dashboard containing all skills
   */
  generateStandaloneHtml(skills, doctorResult) {
    const serializedData = JSON.stringify(skills).replace(/<\/script>/gi, '<\\/script>');
    const serializedDoctor = JSON.stringify(doctorResult).replace(/<\/script>/gi, '<\\/script>');

    return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OhMySkills - Portable Standalone Catalog</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: { 500: '#6366f1', 600: '#4f46e5' }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen p-6 font-sans">
  <div class="max-w-6xl mx-auto space-y-6">
    <header class="flex items-center justify-between border-b border-slate-800 pb-4">
      <div>
        <h1 class="text-xl font-bold flex items-center gap-2">
          <span>⚡ OhMySkills Portable Catalog</span>
          <span class="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">Offline Ready</span>
        </h1>
        <p class="text-xs text-slate-400 mt-1">Exported on ${new Date().toISOString().split('T')[0]} • ${skills.length} Skills • Health Grade: ${doctorResult.grade} (${doctorResult.score}/100)</p>
      </div>
      <a href="https://ohmyskills.dev" target="_blank" class="text-xs text-indigo-400 hover:text-indigo-300">Visit OhMySkills.dev &rarr;</a>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="cards-container"></div>
  </div>

  <script>
    const skills = ${serializedData};
    const container = document.getElementById('cards-container');

    skills.forEach(s => {
      const card = document.createElement('div');
      card.className = "bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 flex flex-col justify-between";
      card.innerHTML = \`
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">\${s.domain}</span>
            <span class="text-xs font-mono text-slate-500">~\${s.tokenCount || 0} tokens</span>
          </div>
          <h3 class="font-bold text-white text-sm mb-1">\${s.name}</h3>
          <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed">\${s.description || 'No description provided.'}</p>
        </div>
        <div class="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>\${s.platform}</span>
          <button onclick="navigator.clipboard.writeText(\\\`\${(s.rawContent || '').replace(/\\\`/g, '\\\\\\\\\`')}\\\`); alert('Copied skill prompt!');" class="text-indigo-400 hover:underline">Copy Prompt</button>
        </div>
      \`;
      container.appendChild(card);
    });
  </script>
</body>
</html>`;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Router;
}
