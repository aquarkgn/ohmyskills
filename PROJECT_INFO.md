# OhMySkills 项目全景与运维发布手册

> [!IMPORTANT]
> **开源与轻量工具属性**：本项目为 0 后端纯前端客户端工具（Client-side Web Workbench），代码支持开源与极简自托管，面向全球 AI 编程开发者、DevOps 工程师与开源社区。

---

## 1. 项目说明 (Project Overview)

OhMySkills 是专为现代 AI 编程助手（Cursor、Claude Code、Antigravity、Windsurf、Copilot）打造的**首个纯前端 0 后端 AI 技能与规则全流程治理工作台**。

对标 `oh-my-zsh` 统一终端配置的开源心智，OhMySkills 解决开发者在规则库爆发期面临的**上下文窗口膨胀（Context Window Bloat）、规则相互冲突（Rules Collision）、配置碎片化（Configuration Drift）及缺乏可视化索引（Lack of Catalog）**三大致命痛点。

### 核心特性
- **100% 浏览器客户端零隐私泄露**：
  采用现代浏览器 File System Access API 与 HTML5 拖拽，纯本地内存流式解析，绝不将用户的私有业务代码、内部系统 Prompt 与配置规则上传至任何服务器。
- **智能体检与 Token 膨胀量化 (Doctor & Linter)**：
  毫秒级诊断 YAML frontmatter 语法、死链、重复命名、模糊指令，并量化每轮对话的 Token 开销与健康评分（A~F）。
- **交互式技能卡片广场 (Interactive Catalog)**：
  自动提取技能领域标签（Frontend/Backend/DevOps/Testing/AI）、意图关键词与场景提示词，支持全文秒级模糊检索与一键复制。
- **单点动态路由编译器 (Meta-Router Compiler)**：
  一键将 50+ 个分散平铺的长尾规则合成 1 条极轻量级“按需加载”路由 Prompt，消除 80% 以上的无效上下文占用。
- **全格式双向导出 (Universal Exporter)**：
  支持一键打包下载规范化的 `.cursor/rules` / `.skills` ZIP 归档，或导出独立便携的单文件离线 HTML 看板。

---

## 2. 目录架构说明 (Directory Structure)

```
~/Project/OhMySkill/
├── index.html          # 主应用工作台（Tailwind CSS + 响应式暗黑极简 UI）
├── parser.js           # 纯前端 Markdown 与 YAML Frontmatter 语法解析器
├── doctor.js           # 技能健康度审计引擎（冲突、死链、Token 估算）
├── router.js           # 单点动态调度 Meta-Router Prompt 编译器
├── samples.js          # 内置 10 款现代化全栈高频技能预设示例
├── PROJECT_INFO.md     # 本项目全景手册与架构定义
├── PROJECT_PLAN.md     # 详细迭代计划与实施路线图
├── README.md           # 中英文开源文档
└── DEPLOY.md           # Cloudflare Pages 静态边缘部署指引
```

---

## 3. 部署与环境拓扑 (Deployment & Topology)

本项目无后端服务器与数据库，可直接托管于 Cloudflare Pages 全球 Edge CDN。

| 环境类型 | 访问端点 (URL) | 部署载体 | 状态 |
| :--- | :--- | :--- | :--- |
| **正式生产环境** | [https://ohmyskills.dev](https://ohmyskills.dev) (或 `.com` / `.org`) | Cloudflare Pages | 规划接入 |
| **本地预览服务** | [http://localhost:39090](http://localhost:39090) | Python 3 静态服务 | 准备启动 |

---

## 4. 本地启动与调试命令

```bash
# 进入项目目录
cd ~/Project/OhMySkill

# 启动本地开发与预览服务器
python3 -m http.server 39090

# 浏览器访问
open http://localhost:39090/
```
