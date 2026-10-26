/**
 * OhMySkills - Public Registries & Cross-Platform Skills Aggregator
 * Indexes skills and prompts from skills.sh, cursor.directory, awesome-cursorrules, and smithery.ai.
 */

const PUBLIC_REGISTRIES = [
  { id: "all", name: "All Registries", icon: "🌐", desc: "Cross-platform universal search" },
  { id: "cursor_directory", name: "cursor.directory", icon: "🎯", url: "https://cursor.directory", desc: "Top community Cursor rules" },
  { id: "skills_sh", name: "skills.sh", icon: "⚡", url: "https://skills.sh", desc: "Open Agent Skills ecosystem" },
  { id: "awesome_cursorrules", name: "Awesome Cursorrules", icon: "⭐", url: "https://github.com/PatrickJS/awesome-cursorrules", desc: "30k+ stars GitHub curated library" },
  { id: "smithery", name: "Smithery.ai", icon: "🔌", url: "https://smithery.ai", desc: "Model Context Protocol servers" }
];

const CURATED_REGISTRY_SKILLS = [
  {
    id: "ext-office-ppt-outline",
    name: "office-ppt-outline",
    title: "1-Click PPT & Presentation Outline Generator",
    source: "skills_sh",
    domain: "Office",
    editor: "universal",
    stars: 1860,
    author: "slidecraft",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
    description: "Instantly crafts clear, logical PowerPoint and Keynote slide-by-slide outlines, speaker notes, and key takeaways from rough drafts.",
    tags: ["Office", "PPT", "Slides", "Presentation", "Beginner"],
    content: `---
description: 1-Click PPT and presentation outline builder
globs: **/*.md, **/*.txt, slides/**
alwaysApply: false
---
# PPT Presentation Outline Standard

1. Break topics into standard 10-slide decks: Title, Executive Problem, Solution Overview, 3 Key Pillars, Implementation Timeline, and Conclusion.
2. For each slide, provide: **Slide Title**, **3 Key Bullet Points**, and **Suggested Speaker Script (30 seconds)**.
3. Recommend clean visual layout ideas (e.g., 3-column metric cards, timeline charts) instead of dense text blocks.`
  },
  {
    id: "ext-bilingual-email-assistant",
    name: "bilingual-email-assistant",
    title: "High-EQ Bilingual Executive Email Crafter",
    source: "cursor_directory",
    domain: "Office",
    editor: "claude",
    stars: 1420,
    author: "polite_bot",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    description: "Drafts polite, concise, and persuasive business emails in both English and Chinese. Great for follow-ups, negotiations, and status updates.",
    tags: ["Office", "Email", "English", "Communication"],
    content: `---
description: High-EQ professional bilingual business email writer
globs: **/*.txt, **/*.md, emails/**
alwaysApply: false
---
# Professional Email Standards

1. Provide two tone variations: **Friendly & Collaborative** and **Formal & Executive**.
2. Keep the opening line cordial and direct. Put the core call-to-action (CTA) in the first 2 sentences.
3. Include clean bullet points for dates, attachments, or action items.
4. If drafting in English for international teams, ensure natural, modern phrasing without overly robotic clichés.`
  },
  {
    id: "ext-nextjs-15-app-router",
    name: "nextjs-15-app-router",
    title: "Next.js 15 App Router & React 19 Standards",
    source: "cursor_directory",
    domain: "Frontend",
    editor: "cursor",
    stars: 1240,
    author: "pontus",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    description: "Official community guidelines for Next.js 15, asynchronous request APIs (cookies, headers, params), Server Actions, and Turbopack.",
    tags: ["Next.js", "React 19", "TypeScript", "App Router"],
    content: `---
description: Next.js 15 asynchronous request APIs and Server Actions
globs: app/**/*.{ts,tsx}, components/**/*.{ts,tsx}
alwaysApply: false
---
# Next.js 15 & React 19 Engineering Standard

1. **Async Request APIs**: In Next.js 15, \`cookies()\`, \`headers()\`, and page/route \`params\` are asynchronous. Always \`await\` them before reading properties.
2. **React 19 Hooks**: Prefer \`useActionState\` over manual boolean states for form actions. Use \`useOptimistic\` for instant state rollbacks.
3. **Data Fetching**: Use \`fetch\` with explicit \`cache: 'force-cache'\` or \`next: { revalidate: X }\` tags. Never perform raw database calls inside client components.
4. **Hydration Discipline**: Do not use \`window\` or \`localStorage\` before mounting. Wrap client-only code in \`useEffect\` or \`next/dynamic\` with \`ssr: false\`.`
  },
  {
    id: "ext-supabase-ssr-auth",
    name: "supabase-ssr-auth",
    title: "Supabase SSR Authentication & Row Level Security",
    source: "skills_sh",
    domain: "Backend",
    editor: "claude",
    stars: 890,
    author: "supabase-community",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    description: "Production patterns for @supabase/ssr in Next.js/Remix middleware, cookie handling, and Row Level Security (RLS) policies.",
    tags: ["Supabase", "Auth", "PostgreSQL", "RLS"],
    content: `---
name: supabase-ssr-auth
description: Supabase SSR cookie authentication and secure RLS enforcement
---
# Supabase SSR Auth Standards

- Always create Supabase clients via \`@supabase/ssr\` helpers (\`createServerClient\` with cookie getters and setters).
- Refresh user tokens inside Next.js \`middleware.ts\` before routing to protected layout trees.
- Never use the \`service_role\` secret key in any client bundle or browser-accessible API route.
- All database tables must have \`ALTER TABLE ... ENABLE ROW LEVEL SECURITY;\` active with explicit read/write policies.`
  },
  {
    id: "ext-fastapi-clean-architecture",
    name: "fastapi-clean-architecture",
    title: "FastAPI 0.115+ Clean Architecture & Dependency Injection",
    source: "cursor_directory",
    domain: "Backend",
    editor: "cursor",
    stars: 1530,
    author: "tiangolo-fans",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    description: "Modern FastAPI conventions, Pydantic v2 schemas, async SQLAlchemy 2.0 sessions, and lifespan context handlers.",
    tags: ["FastAPI", "Python", "Pydantic", "SQLAlchemy"],
    content: `---
description: FastAPI modern clean architecture and async SQLAlchemy patterns
globs: **/*.py
alwaysApply: false
---
# FastAPI Clean Architecture Standards

1. Use \`@asynccontextmanager\` with \`lifespan(app: FastAPI)\` for application startup and shutdown instead of deprecated \`on_event\`.
2. Encapsulate business logic into service layers; keep routers minimal and focused on parameter parsing and response status codes.
3. Inject database sessions using \`Annotated[AsyncSession, Depends(get_db)]\`.
4. Enforce strict Pydantic v2 \`ConfigDict(from_attributes=True)\` on response schemas.`
  },
  {
    id: "ext-cloudflare-workers-durable-objects",
    name: "cloudflare-workers-do",
    title: "Cloudflare Workers & Modern Durable Objects (RPC)",
    source: "awesome_cursorrules",
    domain: "DevOps",
    editor: "cursor",
    stars: 760,
    author: "cloudflare-devs",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
    description: "Cloudflare Workers TypeScript idioms, new DO RPC syntax, D1 SQLite querying, and Hyperdrive database pooling.",
    tags: ["Cloudflare", "Serverless", "Edge", "DurableObjects"],
    content: `---
description: Cloudflare Workers RPC syntax and Durable Objects standards
globs: src/**/*.{ts,js}, wrangler.jsonc
alwaysApply: false
---
# Cloudflare Workers Modern Standards

- Use the new Workers RPC syntax: export class methods directly from Durable Objects without manual JSON-RPC boilerplate.
- Prefer \`wrangler.jsonc\` with comments enabled over legacy \`wrangler.toml\`.
- Keep cold start times minimal by avoiding heavy third-party cryptography or bloated lodash imports.
- Utilize Workers KV with explicit TTLs for edge caching and D1 for relational query persistence.`
  },
  {
    id: "ext-smithery-postgres-mcp",
    name: "postgres-mcp-inspector",
    title: "PostgreSQL Database Inspector MCP Server",
    source: "smithery",
    domain: "DevOps",
    editor: "mcp",
    stars: 2150,
    author: "modelcontextprotocol",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    description: "Official MCP Server integration allowing Claude and Cursor to inspect schemas, execute read-only queries, and explain EXPLAIN ANALYZE plans.",
    tags: ["MCP", "Database", "PostgreSQL", "Tooling"],
    content: `{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://user:pass@localhost:5432/mydb"],
      "tools": [
        "query_read_only",
        "describe_table",
        "list_tables",
        "explain_query"
      ]
    }
  }
}`
  },
  {
    id: "ext-playwright-e2e-resilience",
    name: "playwright-e2e-resilience",
    title: "Playwright Flake-Free End-to-End Testing",
    source: "skills_sh",
    domain: "Testing",
    editor: "windsurf",
    stars: 980,
    author: "qa-craft",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
    description: "Flake-free automated testing with Playwright, web-first locators (getByRole), network fixtures, and isolated test contexts.",
    tags: ["Playwright", "E2E", "Testing", "TypeScript"],
    content: `---
name: playwright-e2e-resilience
description: Flake-free end-to-end testing with Playwright web-first locators
---
# Playwright Resilient Testing Guide

1. Never use arbitrary \`page.waitForTimeout(5000)\`. Rely on auto-waiting locators (\`page.getByRole\`, \`page.getByText\`).
2. Prioritize accessible user-facing locators: \`page.getByRole('button', { name: 'Submit' })\` over brittle CSS class selectors (\`.btn-primary\`).
3. Use \`test.describe.configure({ mode: 'parallel' })\` with fresh test fixtures to prevent test order pollution.
4. Intercept flaky external analytics/third-party widgets using \`page.route('**/*', route => ...)\`.`
  }
];

const RegistryScanner = {
  /**
   * Search across all public registries
   */
  search(query = "", source = "all", domain = "all") {
    const q = query.toLowerCase().trim();

    return CURATED_REGISTRY_SKILLS.filter(skill => {
      const matchSource = (source === "all" || skill.source === source);
      const matchDomain = (domain === "all" || skill.domain.toLowerCase() === domain.toLowerCase());
      
      const matchText = !q || 
        skill.name.toLowerCase().includes(q) ||
        skill.title.toLowerCase().includes(q) ||
        skill.description.toLowerCase().includes(q) ||
        skill.tags.some(t => t.toLowerCase().includes(q));

      return matchSource && matchDomain && matchText;
    });
  },

  /**
   * Fetch any public rule/skill from GitHub via raw.githubusercontent.com
   */
  async fetchFromGitHub(repo, filePath) {
    const cleanRepo = repo.replace(/^https?:\/\/github\.com\//, '').replace(/\/$/, '');
    const cleanPath = filePath.replace(/^\//, '');
    const rawUrl = `https://raw.githubusercontent.com/${cleanRepo}/main/${cleanPath}`;

    try {
      const res = await fetch(rawUrl);
      if (!res.ok) {
        // Retry with master branch
        const fallbackUrl = `https://raw.githubusercontent.com/${cleanRepo}/master/${cleanPath}`;
        const fallbackRes = await fetch(fallbackUrl);
        if (!fallbackRes.ok) throw new Error(`HTTP ${fallbackRes.status}`);
        return await fallbackRes.text();
      }
      return await res.text();
    } catch (err) {
      console.error("Failed to fetch from GitHub:", err);
      throw err;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PUBLIC_REGISTRIES, CURATED_REGISTRY_SKILLS, RegistryScanner };
}
