/**
 * OhMySkills - International AI Editor & Client Fingerprints
 * Provides signature configuration paths, built-in tool metadata, and crisp inline SVGs.
 */

const EDITORS_REGISTRY = {
  cursor: {
    id: "cursor",
    name: "Cursor",
    badge: "Cursor IDE",
    color: "#818cf8",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#818cf8"/><path d="M2 17L12 22L22 17" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    configPaths: [".cursor/rules/*.mdc", ".cursorrules", ".cursor/mcp.json", ".cursor/commands/"],
    builtinTools: ["Cursor Rules (.mdc)", "Slash Commands (.cursor/commands)", "MCP Integration", "Agent Terminal"],
    format: "mdc",
    description: "The AI-first Code Editor built on VS Code fork with deep codebase indexing."
  },
  claude: {
    id: "claude",
    name: "Claude Code / Desktop",
    badge: "Anthropic Claude",
    color: "#d97706",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M12 3V21M3 12H21M5.636 5.636L18.364 18.364M5.636 18.364L18.364 5.636" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    configPaths: ["CLAUDE.md", ".claude/skills/", "~/.claude/skills/", "claude_desktop_config.json"],
    builtinTools: ["Agent Skills (SKILL.md)", "Subagent Workflows", "Claude MCP", "Memory Loop"],
    format: "skill_md",
    description: "Anthropic's frontier coding agent with native tool execution and skill discovery."
  },
  vscode: {
    id: "vscode",
    name: "VS Code / Copilot",
    badge: "VS Code",
    color: "#38bdf8",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 2L6.5 11L2 7.5L0.5 8.5L5.5 13.5L0.5 18.5L2 19.5L6.5 16L17.5 25L23.5 22V5L17.5 2Z" fill="#38bdf8"/></svg>`,
    configPaths: [".github/copilot-instructions.md", ".vscode/settings.json", ".vscode/tasks.json"],
    builtinTools: ["Copilot Instructions", "Custom Prompt Templates", "Workspace Agents", "Tasks API"],
    format: "markdown",
    description: "Microsoft's flagship editor with GitHub Copilot Workspace and instruction files."
  },
  windsurf: {
    id: "windsurf",
    name: "Windsurf",
    badge: "Codeium Windsurf",
    color: "#2dd4bf",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21" stroke="#2dd4bf" stroke-width="2.5" stroke-linecap="round"/><path d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12" stroke="#2dd4bf" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    configPaths: [".windsurf/rules/", ".codeium/windsurf/", ".windsurfrules"],
    builtinTools: ["Cascade Flows", "Windsurf Rules", "Codebase Memories", "Context Indexer"],
    format: "markdown",
    description: "Codeium's agentic IDE featuring Cascade multi-file workflows and real-time flows."
  },
  antigravity: {
    id: "antigravity",
    name: "Antigravity / AGY",
    badge: "Google Antigravity",
    color: "#a855f7",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#a855f7" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="#a855f7"/><path d="M12 3C7.02944 3 3 7.02944 3 12" stroke="#e879f9" stroke-width="2"/></svg>`,
    configPaths: ["AGENTS.md", ".gemini/config/skills/", ".gemini/antigravity/skills/"],
    builtinTools: ["Agent Skills (SKILL.md)", "Custom MCP Servers", "Subagent Workflows", "Sidecars"],
    format: "skill_md",
    description: "Google DeepMind's agentic coding platform with multi-agent orchestration and skills."
  },
  cline: {
    id: "cline",
    name: "Cline / Roo Code",
    badge: "Cline / Roo",
    color: "#f97316",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#f97316" stroke-width="2"/><circle cx="8" cy="10" r="1.5" fill="#f97316"/><circle cx="16" cy="10" r="1.5" fill="#f97316"/><path d="M8 15H16" stroke="#f97316" stroke-width="2" stroke-linecap="round"/></svg>`,
    configPaths: [".clinerules", ".roomodes", "cline_mcp_settings.json"],
    builtinTools: ["Cline Rules", "Custom Modes", "STDIO MCP Servers", "Browser Sandbox"],
    format: "markdown",
    description: "Autonomous open-source coding agents running in VS Code with terminal execution."
  },
  mcp: {
    id: "mcp",
    name: "Model Context Protocol",
    badge: "MCP Tooling",
    color: "#10b981",
    logoSvg: `<svg viewBox="0 0 24 24" fill="none" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3V15" stroke="#10b981" stroke-width="2" stroke-linecap="round"/><rect x="4" y="17" width="16" height="4" rx="2" fill="#10b981" opacity="0.3"/></svg>`,
    configPaths: ["mcp.json", ".cursor/mcp.json", "claude_desktop_config.json"],
    builtinTools: ["STDIO Servers", "SSE Transports", "Tool Calling AST", "Prompt Resources"],
    format: "json",
    description: "The universal open standard connecting AI models to external tools and data sources."
  }
};

/**
 * Detect which editor or tooling ecosystem a given file or path belongs to
 */
function detectEditorForPath(filePath, filename = "") {
  const p = (filePath || filename || "").toLowerCase();

  if (p.includes(".cursor") || p.endsWith(".mdc") || p.includes(".cursorrules")) return EDITORS_REGISTRY.cursor;
  if (p.includes("claude") || p === "claude.md") return EDITORS_REGISTRY.claude;
  if (p.includes(".github/copilot") || p.includes(".vscode")) return EDITORS_REGISTRY.vscode;
  if (p.includes("windsurf")) return EDITORS_REGISTRY.windsurf;
  if (p.includes("antigravity") || p.includes(".gemini") || p === "agents.md") return EDITORS_REGISTRY.antigravity;
  if (p.includes("cline") || p.includes("roomodes")) return EDITORS_REGISTRY.cline;
  if (p.includes("mcp.json") || p.includes("mcp_settings")) return EDITORS_REGISTRY.mcp;

  return null;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EDITORS_REGISTRY, detectEditorForPath };
}
