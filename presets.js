/**
 * OhMySkills - Local Workspace Presets Manager
 * Persists curated collections of rules in browser localStorage for quick project switching.
 */

const STORAGE_KEY = 'ohmyskills_presets_v1';

const DEFAULT_PRESETS = [
  {
    id: "preset-modern-fullstack",
    name: "Modern Fullstack Web",
    desc: "Next.js 15 App Router, React 19, Tailwind CSS v4, Postgres, Vitest",
    skillsCount: 5,
    skillIds: [
      "react-19-server-actions",
      "tailwind-v4-modern",
      "postgres-migration-safety",
      "vitest-mocking-discipline",
      "git-conventional-commits"
    ],
    updatedAt: "2026-10-25"
  },
  {
    id: "preset-python-ai-backend",
    name: "Python & AI Agent Backend",
    desc: "Strict Pydantic v2 typing, Docker container hardening, Prompt injection defense",
    skillsCount: 4,
    skillIds: [
      "python-pydantic-typing",
      "docker-container-hardening",
      "security-prompt-injection-guard",
      "git-conventional-commits"
    ],
    updatedAt: "2026-10-25"
  },
  {
    id: "preset-devops-cloudnative",
    name: "DevOps & Infrastructure",
    desc: "Docker container hardening, Kubernetes Helm charts, Postgres safe migrations",
    skillsCount: 4,
    skillIds: [
      "docker-container-hardening",
      "k8s-helm-best-practices",
      "postgres-migration-safety",
      "git-conventional-commits"
    ],
    updatedAt: "2026-10-25"
  }
];

const PresetsManager = {
  getAllPresets() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PRESETS));
        return DEFAULT_PRESETS;
      }
      return JSON.parse(stored);
    } catch (e) {
      return DEFAULT_PRESETS;
    }
  },

  getPreset(id) {
    const list = this.getAllPresets();
    return list.find(p => p.id === id) || null;
  },

  savePreset(name, skills, desc = "") {
    const list = this.getAllPresets();
    const newId = 'preset-' + Date.now();
    const newPreset = {
      id: newId,
      name: name || `Workspace ${list.length + 1}`,
      desc: desc || `Custom preset with ${skills.length} rules`,
      skillsCount: skills.length,
      skillIds: skills.map(s => s.id),
      savedSkills: skills, // embed full snapshots
      updatedAt: new Date().toISOString().split('T')[0]
    };

    list.unshift(newPreset);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error("Failed to save preset to localStorage:", e);
    }
    return newPreset;
  },

  deletePreset(id) {
    let list = this.getAllPresets();
    list = list.filter(p => p.id !== id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error("Failed to delete preset:", e);
    }
    return list;
  },

  exportJson() {
    return JSON.stringify(this.getAllPresets(), null, 2);
  },

  importJson(jsonStr) {
    try {
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        return true;
      }
    } catch (e) {
      console.error("Invalid JSON for presets import:", e);
    }
    return false;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PresetsManager, DEFAULT_PRESETS };
}
