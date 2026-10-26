/**
 * OhMySkills - Static SEO Landing Page & Sitemap Generator
 * Compiles rich, crawlable HTML pages for each core tech stack rule into /rules/<id>/
 */

const fs = require('fs');
const path = require('path');
const { DEMO_SKILLS } = require('./samples.js');
const { CHANGELOG_DATA } = require('./changelog.js');

const BASE_URL = 'https://ohmyskills.dev';

const SEO_SKILLS_MAP = [
  {
    slug: 'nextjs-15',
    title: 'Next.js 15 & React 19 Best Practice Cursor Rules (.mdc)',
    h1: 'Next.js 15 & React 19 Cursor Rules (.mdc)',
    sampleId: 'react-19-server-actions',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    metaDesc: 'Official community Cursor rules (.mdc) and Claude Skills for Next.js 15 App Router, React 19 Server Actions, and async cookies/headers.',
    keywords: 'nextjs 15 cursor rules, react 19 mdc, server actions cursorrules, app router ai prompts',
    antiPatterns: [
      'Synchronous cookies() or headers() access in server components',
      'Using forwardRef in React 19 instead of standard ref prop',
      'Calling sensitive database or ORM functions from client boundary files'
    ]
  },
  {
    slug: 'tailwind-v4',
    title: 'Tailwind CSS v4 Modern Cursor Rules (.mdc)',
    h1: 'Tailwind CSS v4 Engineering Rules (.mdc)',
    sampleId: 'tailwind-v4-modern',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    metaDesc: 'Production-ready Cursor .mdc rules for Tailwind CSS v4 CSS-first configuration, @theme variables, and container queries.',
    keywords: 'tailwind v4 cursor rules, tailwind mdc, tailwindcss v4 ai prompt, modern css rules',
    antiPatterns: [
      'Configuring theme tokens in legacy tailwind.config.js',
      'Arbitrary utility chaining without reusable UI wrappers',
      'Using outdated opacity modifiers instead of native oklch color-mix'
    ]
  },
  {
    slug: 'postgres-migration',
    title: 'Zero-Downtime PostgreSQL Schema Migration Rules',
    h1: 'Zero-Downtime PostgreSQL Migration Rules',
    sampleId: 'postgres-migration-safety',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    metaDesc: 'Safe database migration prompts for AI agents. Non-blocking index creation, lock timeouts, and zero-downtime schema evolution.',
    keywords: 'postgres migration cursor rules, safe sql ai prompt, postgresql zero downtime agent skill',
    antiPatterns: [
      'Running CREATE INDEX without CONCURRENTLY on live production tables',
      'Adding NOT NULL column without default backfill phase',
      'Executing migrations without an explicit lock_timeout safeguard'
    ]
  },
  {
    slug: 'docker-hardening',
    title: 'Production Dockerfile Hardening & Security Rules',
    h1: 'Production Docker Container Hardening Rules',
    sampleId: 'docker-container-hardening',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    metaDesc: 'Comprehensive AI prompt rules for multi-stage minimal Docker builds, non-root user execution, and secure secret mounting.',
    keywords: 'docker cursor rules, dockerfile ai prompt, container security agent skill, docker mdc',
    antiPatterns: [
      'Running containers under default root privileges',
      'Baking build credentials into intermediate Docker layers',
      'Using latest tag instead of pinned semver or sha256 digests'
    ]
  },
  {
    slug: 'go-error-handling',
    title: 'Idiomatic Go 1.22+ Error Handling Cursor Rules',
    h1: 'Idiomatic Go 1.22+ Error Handling Rules',
    sampleId: 'go-error-handling-idioms',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
    metaDesc: 'Structured Go error wrapping rules with errors.Is and errors.As. Clean code guidelines for AI coding assistants.',
    keywords: 'golang cursor rules, go error handling ai prompt, go 1.22 clean code rules',
    antiPatterns: [
      'Inspecting raw error string contents instead of errors.Is/As',
      'Arbitrary panic calls at library boundaries',
      'Over-wrapping errors without adding contextual value'
    ]
  },
  {
    slug: 'python-pydantic-v2',
    title: 'Python 3.12+ & Pydantic v2 Strict Typing Rules',
    h1: 'Python 3.12+ & Pydantic v2 Strict Typing Rules',
    sampleId: 'python-pydantic-typing',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    metaDesc: 'Strict Python type hinting and Pydantic v2 model validation rules for Cursor, Claude, and Copilot.',
    keywords: 'python cursor rules, pydantic v2 ai prompt, fastapi typing rules, python mdc',
    antiPatterns: [
      'Importing legacy typing.List or typing.Dict instead of built-in collections',
      'Suppressing Pyright/Mypy errors with loose Any without comments',
      'Mutating domain value objects without frozen ConfigDict'
    ]
  },
  {
    slug: 'vitest-testing',
    title: 'Vitest Unit & Integration Testing Discipline Rules',
    h1: 'Vitest High-Confidence Testing Rules',
    sampleId: 'vitest-mocking-discipline',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
    metaDesc: 'Clean unit testing standards with Vitest, Mock Service Worker (MSW), and Arrange-Act-Assert discipline.',
    keywords: 'vitest cursor rules, typescript testing ai prompt, msw mocking rules, vitest mdc',
    antiPatterns: [
      'Testing internal private component state rather than user-visible behavior',
      'Overusing brittle implementation spies instead of MSW network mocks',
      'Mutating shared global states across concurrent test suites'
    ]
  },
  {
    slug: 'security-prompt-injection',
    title: 'AI Agent Prompt Injection Defense Standards',
    h1: 'Prompt Injection Defense & Security Standards',
    sampleId: 'security-prompt-injection-guard',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    metaDesc: 'System prompt defense guidelines against indirect prompt injection, untrusted data delimiter isolation, and tool output schema checks.',
    keywords: 'prompt injection defense rules, ai agent security guidelines, cursor security rules',
    antiPatterns: [
      'Concatenating untrusted user input directly into system prompt instructions',
      'Allowing tools to execute unvalidated shell strings from LLM output',
      'Lacking clear XML/markdown delimiters for user payload isolation'
    ]
  }
];

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function escapeHtml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderPage(item, skill) {
  const codeContent = skill ? (skill.rawContent || skill.content) : '';
  const escapedCode = escapeHtml(codeContent);

  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(item.title)} | OhMySkills</title>
  <meta name="description" content="${escapeHtml(item.metaDesc)}">
  <meta name="keywords" content="${escapeHtml(item.keywords)}">
  <link rel="canonical" href="${BASE_URL}/rules/${item.slug}/">

  <!-- Remote Favicons & Icons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- OpenGraph -->
  <meta property="og:title" content="${escapeHtml(item.title)}">
  <meta property="og:description" content="${escapeHtml(item.metaDesc)}">
  <meta property="og:url" content="${BASE_URL}/rules/${item.slug}/">
  <meta property="og:image" content="${BASE_URL}/logo.svg">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OhMySkills">

  <!-- Tailwind CSS & Lucide Icons CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: { 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca' },
            dark: { 950: '#06080e', 900: '#0c101a', 850: '#111726', 800: '#192237', 700: '#263352' }
          }
        }
      }
    }
  </script>
</head>

<body class="bg-dark-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">

  <!-- Header -->
  <header class="border-b border-dark-800 bg-dark-950/80 backdrop-blur-md sticky top-0 z-30">
    <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center space-x-2.5">
        <img src="/favicon.svg" alt="OhMySkills Logo" class="w-8 h-8 rounded-lg shadow">
        <span class="font-bold text-white text-base">OhMySkills</span>
      </a>

      <div class="flex items-center space-x-3 text-xs">
        <a href="/changelog/" class="text-slate-400 hover:text-white transition">Changelog</a>
        <a href="/?import=${item.sampleId}" class="px-3.5 py-1.5 font-semibold rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition shadow flex items-center space-x-1.5">
          <i data-lucide="play" class="w-3.5 h-3.5"></i>
          <span>Open in Workbench</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Main Article -->
  <main class="max-w-4xl mx-auto px-4 py-8 flex-grow space-y-8">
    
    <!-- Breadcrumb -->
    <nav class="flex items-center space-x-2 text-xs text-slate-500 font-mono">
      <a href="/" class="hover:text-slate-300">Home</a>
      <span>/</span>
      <span class="text-slate-400">Rules</span>
      <span>/</span>
      <span class="text-brand-400 font-semibold">${item.slug}</span>
    </nav>

    <!-- Heading with Remote Tech Stack Icon -->
    <header class="space-y-4">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center p-2.5 shadow-md">
          <img src="${item.iconUrl}" alt="${escapeHtml(item.slug)} logo" class="w-full h-full object-contain">
        </div>
        <div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 uppercase font-semibold">Verified Cursor .mdc &amp; Agent Skill</span>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">${escapeHtml(item.h1)}</h1>
        </div>
      </div>
      <p class="text-sm text-slate-400 leading-relaxed">${escapeHtml(item.metaDesc)}</p>
    </header>

    <!-- Native Sponsor / Ad Slot -->
    <div class="p-4 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-between text-xs">
      <div class="flex items-center space-x-3">
        <span class="px-2 py-0.5 rounded bg-brand-500/20 text-brand-400 font-mono text-[10px]">SPONSORED</span>
        <span class="text-slate-300">Deploy high-performance AI coding sandboxes on Vultr with \$100 free credit.</span>
      </div>
      <a href="https://www.vultr.com/?ref=9825633" target="_blank" rel="sponsored noopener" class="text-brand-400 hover:underline font-semibold ml-2 whitespace-nowrap">
        Claim \$100 Credit &rarr;
      </a>
    </div>

    <!-- Rule Code Block with One-Click Copy -->
    <section class="space-y-3">
      <div class="flex items-center justify-between">
        <span class="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">Rule Specification (.cursor/rules/${skill ? skill.filename : item.slug + '.mdc'})</span>
        <button id="btn-copy" onclick="copyRule()" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition flex items-center space-x-1.5 shadow">
          <i data-lucide="copy" class="w-3.5 h-3.5"></i>
          <span id="copy-label">Copy Rule to Clipboard</span>
        </button>
      </div>

      <div class="relative bg-dark-900 border border-dark-800 rounded-xl overflow-hidden shadow-xl">
        <pre class="p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-[500px] leading-relaxed selection:bg-brand-600">${escapedCode}</pre>
      </div>
    </section>

    <!-- Key Anti-Patterns to Avoid -->
    <section class="space-y-3 pt-2">
      <h2 class="text-lg font-bold text-white flex items-center space-x-2">
        <i data-lucide="shield-alert" class="w-5 h-5 text-rose-400"></i>
        <span>Common Anti-Patterns Avoided</span>
      </h2>
      <ul class="space-y-2">
        ${item.antiPatterns.map(ap => `
          <li class="flex items-start space-x-2 text-xs text-slate-400">
            <span class="text-rose-400 font-bold">✕</span>
            <span>${escapeHtml(ap)}</span>
          </li>
        `).join('')}
      </ul>
    </section>

    <!-- Related Rules with Remote Logos -->
    <section class="border-t border-dark-800 pt-6 space-y-4">
      <h3 class="text-sm font-bold text-slate-200">Explore Related Tech Stack Rules</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${SEO_SKILLS_MAP.filter(s => s.slug !== item.slug).slice(0, 4).map(s => `
          <a href="/rules/${s.slug}/" class="p-3 rounded-lg bg-dark-900 border border-dark-800 hover:border-dark-700 transition flex items-center space-x-3 group">
            <div class="w-8 h-8 rounded-lg bg-dark-950 border border-dark-700 flex items-center justify-center p-1.5 flex-shrink-0">
              <img src="${s.iconUrl}" alt="${s.slug}" class="w-full h-full object-contain">
            </div>
            <div class="truncate">
              <h4 class="text-xs font-bold text-white group-hover:text-brand-300 truncate transition">${escapeHtml(s.title)}</h4>
              <p class="text-[11px] text-slate-400 line-clamp-1">${escapeHtml(s.metaDesc)}</p>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- Workbench CTA -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-brand-900/30 to-dark-900 border border-brand-500/30 text-center space-y-3">
      <h3 class="font-bold text-white text-base">Want to audit and compile all your rules in one place?</h3>
      <p class="text-xs text-slate-400 max-w-lg mx-auto">Use OhMySkills Workbench to drag-and-drop your .cursor/rules folder, check token bloat, and generate a dynamic on-demand router.</p>
      <a href="/?import=${item.sampleId}" class="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-bold rounded-lg bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20 transition">
        <i data-lucide="sparkles" class="w-4 h-4"></i>
        <span>Launch Free Workbench &rarr;</span>
      </a>
    </div>

  </main>

  <!-- Footer -->
  <footer class="border-t border-dark-800 py-6 text-center text-xs text-slate-400 bg-dark-950">
    <p>OhMySkills • Open-Source Developer Workbench • Zero-Backend Client Side</p>
  </footer>

  <script>
    lucide.createIcons();
    async function copyRule() {
      const code = ${JSON.stringify(codeContent)};
      await navigator.clipboard.writeText(code);
      const label = document.getElementById('copy-label');
      label.textContent = 'Copied to Clipboard!';
      setTimeout(() => label.textContent = 'Copy Rule to Clipboard', 2000);
    }
  </script>
</body>
</html>`;
}

function renderChangelogPage() {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Coding Rules & Framework Changelog | OhMySkills</title>
  <meta name="description" content="Track breaking syntax changes, deprecations, and required AI rules across Next.js 15, React 19, Tailwind CSS v4, Python 3.12, and Docker.">
  <link rel="canonical" href="${BASE_URL}/changelog/">

  <!-- Remote Favicons & Icons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: { 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5' },
            dark: { 950: '#06080e', 900: '#0c101a', 800: '#192237', 700: '#263352' }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-dark-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
  <header class="border-b border-dark-800 bg-dark-950/80 backdrop-blur-md sticky top-0 z-30">
    <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center space-x-2.5">
        <img src="/favicon.svg" alt="OhMySkills Logo" class="w-8 h-8 rounded-lg shadow">
        <span class="font-bold text-white text-base">OhMySkills</span>
      </a>
      <a href="/" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-brand-600 hover:bg-brand-500 text-white flex items-center space-x-1.5 shadow">
        <i data-lucide="play" class="w-3.5 h-3.5"></i>
        <span>Open Workbench</span>
      </a>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-4 py-8 flex-grow space-y-8">
    <header class="space-y-2">
      <div class="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-medium">
        <i data-lucide="history" class="w-3.5 h-3.5"></i>
        <span>AI Framework Evolution</span>
      </div>
      <h1 class="text-3xl font-extrabold text-white">AI Rules &amp; Framework Changelog</h1>
      <p class="text-xs text-slate-400">Keep your AI coding assistant prompts updated with the latest breaking framework conventions.</p>
    </header>

    <div class="space-y-6">
      ${CHANGELOG_DATA.map(item => `
        <article class="bg-dark-900 border border-dark-800 rounded-xl p-5 space-y-4">
          <div class="flex items-center justify-between border-b border-dark-800 pb-3">
            <div>
              <h2 class="text-base font-bold text-white">${escapeHtml(item.framework)}</h2>
              <p class="text-xs text-slate-400 mt-0.5">${escapeHtml(item.summary)}</p>
            </div>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-${item.badgeColor}-500/20 text-${item.badgeColor}-400 border border-${item.badgeColor}-500/30 font-semibold">${escapeHtml(item.badge)}</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="space-y-2">
              <p class="text-rose-400 font-semibold flex items-center space-x-1">
                <i data-lucide="x-circle" class="w-3.5 h-3.5 text-rose-400"></i>
                <span>Outdated / Deprecated Rules</span>
              </p>
              <ul class="space-y-1.5 text-slate-400">
                ${item.deprecatedRules.map(r => `<li class="flex items-start space-x-1.5"><span class="text-rose-500">•</span><span>${escapeHtml(r)}</span></li>`).join('')}
              </ul>
            </div>
            <div class="space-y-2">
              <p class="text-emerald-400 font-semibold flex items-center space-x-1">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>Required Modern Instructions</span>
              </p>
              <ul class="space-y-1.5 text-slate-400">
                ${item.newRequiredRules.map(r => `<li class="flex items-start space-x-1.5"><span class="text-emerald-500">•</span><span>${escapeHtml(r)}</span></li>`).join('')}
              </ul>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  </main>

  <footer class="border-t border-dark-800 py-6 text-center text-xs text-slate-400 bg-dark-950">
    <p>OhMySkills • Open-Source Developer Workbench</p>
  </footer>
  <script>lucide.createIcons();</script>
</body>
</html>`;
}

function generateSitemap(pages) {
  const dateStr = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/changelog/</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;

  pages.forEach(p => {
    xml += `  <url>
    <loc>${BASE_URL}/rules/${p.slug}/</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
}

// Main Execution
function build() {
  console.log("Generating OhMySkills Static SEO Pages...");

  const baseDir = __dirname;

  // 1. Generate /rules/<slug>/index.html
  SEO_SKILLS_MAP.forEach(item => {
    const targetDir = path.join(baseDir, 'rules', item.slug);
    ensureDir(targetDir);

    const skill = DEMO_SKILLS.find(s => s.id === item.sampleId) || null;
    const html = renderPage(item, skill);

    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
    console.log(`-> Generated /rules/${item.slug}/index.html`);
  });

  // 2. Generate /changelog/index.html
  const changelogDir = path.join(baseDir, 'changelog');
  ensureDir(changelogDir);
  fs.writeFileSync(path.join(changelogDir, 'index.html'), renderChangelogPage(), 'utf8');
  console.log("-> Generated /changelog/index.html");

  // 3. Generate sitemap.xml
  const sitemapXml = generateSitemap(SEO_SKILLS_MAP);
  fs.writeFileSync(path.join(baseDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log("-> Generated sitemap.xml");

  // 4. Generate robots.txt
  fs.writeFileSync(path.join(baseDir, 'robots.txt'), generateRobotsTxt(), 'utf8');
  console.log("-> Generated robots.txt");

  console.log("Static SEO build completed successfully!");
}

build();
