# OhMySkills ⚡

> **The Oh-My-Zsh for your AI Agent Skills & Cursor Rules.**  
> Zero-backend, 100% private. Audit, organize, and compile your `.cursor/rules/`, Claude Skills, and agent prompts into a lean on-demand router in seconds.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Backend](https://img.shields.io/badge/Zero--Backend-100%25%20Client--Side-green.svg)](https://ohmyskills.dev)
[![Privacy First](https://img.shields.io/badge/Privacy-100%25%20Local-indigo.svg)](https://ohmyskills.dev)

---

## 🌟 Why OhMySkills?

As AI coding workflows evolve from simple prompts to dozens of `.cursor/rules/*.mdc`, `SKILL.md`, and custom instructions, developers hit a critical bottleneck:

1. **Context Window Pollution**: Loading 30+ static rules on every turn wastes 3,000 ~ 6,000 tokens per message, slows down model responses, and increases hallucinations.
2. **Rules Collision & Drift**: Outdated or conflicting directives confuse the LLM (e.g. one rule dictates Next.js Pages router, while another dictates App router).
3. **Forgotten Capabilities**: Developers collect dozens of great skills but forget they exist or don't know the exact trigger phrases to activate them.

**OhMySkills** is the browser-based, client-side workbench that transforms chaotic rules into an organized, high-performance modular ecosystem.

---

## 🚀 Key Features

- **🛡️ 100% Client-Side Privacy**: Built with browser-native File System Access API. Your proprietary code standards and sensitive prompts never leave your machine.
- **🩺 Skill Doctor & Token Linter**: Scans your rule directory in milliseconds. Identifies syntax flaws, broken links, duplicate identifiers, and quantifies your per-turn token waste with an actionable health grade (A~F).
- **🗂️ Interactive Catalog & Prompt Matrix**: Visualizes all your skills into a searchable bento-grid showcase with automatic domain categorization (Frontend, Backend, DevOps, Testing, Security).
- **🔀 Meta-Router Compiler**: Compiles 50+ monolithic rules into 1 lightweight dynamic router prompt. Only load instructions on-demand when user intent matches.
- **📦 Universal ZIP & HTML Export**: Download standardized `.skills/` bundles or export a self-contained portable HTML dashboard to share with your engineering team.

---

## 🛠️ Quick Start

### Online Web Version
Visit [https://ohmyskills.dev](https://ohmyskills.dev) and drag your `.cursor/rules` or skills directory into the workbench.

### Local Development
No Node.js or `npm install` needed! Pure static assets:

```bash
cd ~/Project/OhMySkill
python3 -m http.server 39090
open http://localhost:39090
```

---

## 📄 License
MIT © 2026 OhMySkills Contributors
