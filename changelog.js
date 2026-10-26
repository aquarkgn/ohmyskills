/**
 * OhMySkills - Framework & AI Rules Changelog Tracker
 * Tracks major breaking changes and AI prompt evolution across software generations.
 */

const CHANGELOG_DATA = [
  {
    framework: "Next.js 15 & React 19",
    date: "2026-10",
    badge: "Breaking Rules",
    badgeColor: "rose",
    summary: "Async Request APIs, elimination of synchronous cookies()/headers(), and React 19 Server Actions.",
    deprecatedRules: [
      "Synchronous `const cookieStore = cookies()` (Now throws runtime promise error in Next 15)",
      "Synchronous `params.id` in page/route handlers (Now requires `await params`)",
      "Manual `isPending` state flags with custom useState for mutations"
    ],
    newRequiredRules: [
      "Always `await cookies()` and `await headers()` before accessing properties",
      "Always `await params` in Server Components: `const { id } = await params;`",
      "Use `useActionState` and `useOptimistic` for native form transitions",
      "Omit `forwardRef` in React 19 — `ref` is passed directly as a standard prop"
    ]
  },
  {
    framework: "Tailwind CSS v4",
    date: "2026-09",
    badge: "CSS-First Shift",
    badgeColor: "teal",
    summary: "Full migration to CSS-first configuration, deprecating tailwind.config.js in favor of @theme directives.",
    deprecatedRules: [
      "Defining colors and breakpoints in `tailwind.config.js` (No longer parsed by default)",
      "Using `@apply` inside arbitrary complex selector chains",
      "Legacy opacity modifier syntaxes (`bg-opacity-50` replaced with `bg-black/50`)"
    ],
    newRequiredRules: [
      "Define design tokens using `@theme { --color-primary: oklch(...); }` in CSS",
      "Use native CSS `@container` queries for modular responsive card layouts",
      "Leverage native cascade layers and `@utility` for custom utility creation"
    ]
  },
  {
    framework: "Python 3.12+ & Pydantic v2",
    date: "2026-08",
    badge: "Type Safety",
    badgeColor: "amber",
    summary: "Transition to native generic syntax, PEP 695 type parameter syntax, and Pydantic v2 Rust core.",
    deprecatedRules: [
      "Importing `typing.List`, `typing.Dict`, `typing.Union` (Deprecated in favor of `list`, `dict`, `|`)",
      "Pydantic v1 `class Config: orm_mode = True` (Replaced with `model_config = ConfigDict(...)`)",
      "`@validator` decorators (Replaced with `@field_validator` and `@model_validator`)"
    ],
    newRequiredRules: [
      "Use pipe syntax for unions: `def query(id: int | str) -> list[str]:`",
      "Enforce immutable domain models using `ConfigDict(frozen=True, strict=True)`",
      "Wrap validated parameters in `Annotated[..., Field(...)]` for rich metadata"
    ]
  },
  {
    framework: "Docker Compose Specification",
    date: "2026-06",
    badge: "Syntax Deprecation",
    badgeColor: "indigo",
    summary: "Formal deprecation of the top-level 'version:' attribute across modern Docker CLI / Compose v2.",
    deprecatedRules: [
      "Including `version: '3.8'` or `version: '3'` at the top of docker-compose.yml",
      "Using legacy `docker-compose` dash command (replaced by `docker compose` plugin)"
    ],
    newRequiredRules: [
      "Start docker-compose.yml directly with `services:`",
      "Use Compose Specification features: `develop.watch`, `include:`, and `secrets:`",
      "Always specify explicit restart policies: `restart: unless-stopped`"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CHANGELOG_DATA };
}
