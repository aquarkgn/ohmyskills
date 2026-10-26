# OhMySkills (ohmyskills) 项目全景开发计划

> **项目代号**：OhMySkills (`ohmyskills`)  
> **核心定位**：对标 `oh-my-zsh` 开发者心智的 0 后端极简纯前端 AI 技能与规则治理工作台，专注解决 Cursor Rules、Claude Skills 与 Agent Tools 的 Context 膨胀、规则冲突、体检诊断与可视化目录管理。

---

## 一、 域名与品牌战略评估 (Domain & Brand Strategy)

### 1. 品牌心智分析
* **开发者文化共鸣**：`oh-my-zsh`、`oh-my-posh` 奠定了开源界“将混乱、松散的原生配置整理为模块化、高美观度、即用即爽的生态体系”的统领级心智。`OhMySkills` 完美承接了这层天然信任感。
* **传播 Hook 极强**：推广文案天然具备高点击率：
  > *"I built OhMySkills: The Oh-My-Zsh for your Cursor Rules and AI Agent Skills."*
* **延展空间广阔**：未来不仅限于 Web 静态站，可无缝衍生为开源 CLI（`npm install -g ohmyskills`）、社区规则广场（`ohmyskills/registry`）及 VSCode/Cursor 官方插件。

### 2. TLD 后缀选型矩阵

| 后缀建议 | 优先级 | 适用场景与优势 | 建议策略 |
| :--- | :--- | :--- | :--- |
| **`ohmyskills.dev`** | **首选推荐** | Google 专为开发者工具打造，自带 HSTS 强制 HTTPS，极客辨识度极高，价格通常合理（约 \$12/年）。 | 推荐作为正式主域名使用。 |
| **`ohmyskills.com`** | **商业首选** | 泛商业通用性最高，利于防御性注册及后续商业化扩张。 | 若原价（未被高价溢价抢注）建议同步购入保护。 |
| **`ohmyskills.org`** | **备选方案** | 开源/社区/工具站公信力强，与现有 `dockshift.org` 形成矩阵风格呼应。 | 作为备用或镜像域名。 |
| **`ohmyskills.sh`** | **极客备选** | 呼应 Shell/脚本自动化属性，但续费成本较高（约 \$35+/年）。 | 预算充裕时可考虑。 |

---

## 二、 核心功能与架构设计 (Core Architecture)

### 1. 纯前端零隐私泄露（0-Backend Privacy Architecture）
* **运行机制**：100% 浏览器内存运行。利用 HTML5 拖拽与现代浏览器的 `File System Access API` 直接在用户本地读取规则文件夹。
* **隐私保证**：用户代码规范、内部 Prompt 绝不经过任何外部服务器或第三方云函数，彻底杜绝敏感配置泄露风险。
* **基础设施**：Cloudflare Pages 静态边缘托管 + GitHub 分支自动联动构建，运维与服务器成本为零。

### 2. 核心四大功能模块

```
┌────────────────────────────────────────────────────────────────────────┐
│                        OhMySkills Web 工作台                           │
├────────────────────────────────────────────────────────────────────────┤
│ 1. 拖拽导入 (Folder Drop)                                               │
│    - 支持 .cursor/rules、.claude/、skills/、AGENTS.md、CLAUDE.md       │
├───────────────────┬────────────────────┬───────────────────────────────┤
│ 2. 智能体检诊断   │ 3. 动态可视看板   │ 4. 路由与导出套件             │
│    (Doctor/Linter)│    (Catalog/Show)  │    (Router & ZIP Export)      │
│    - YAML 规范校验│    - 技能卡片瀑布流│    - 提取单点 Intent 路由Prompt│
│    - Token 膨胀量化│   - 意图关键词高亮│   - 一键打包标准技能目录ZIP   │
│    - 规则冲突检测 │    - 场景提示词复制│    - 导出单文件离线 HTML 看板  │
└───────────────────┴────────────────────┴───────────────────────────────┘
```

---

## 三、 四阶段里程碑开发计划 (Milestones & Roadmap)

### Phase 1: 核心解析与体检算法库 (Days 1 - 2)
* **目标**：实现纯客户端的规则解析、Frontmatter 校验与 Token 计算。
* **核心任务**：
  1. 引入轻量级 `js-yaml` 与 `tiktoken` 客户端打包版本；
  2. 实现 `parser.js`：解析 Markdown 头部 YAML Frontmatter（`name`, `description`, `globs`, `alwaysApply` 等）；
  3. 实现 `doctor.js` 诊断引擎：
     - 检测缺少 `description` 或意图描述模糊的规则；
     - 检测同名/重复命名的规则；
     - 检测失效的关联文件链接；
     - 准确计算静态注入将占用的 Context Tokens 数量，并给出优化评级（A/B/C/F）。

### Phase 2: 沉浸式工作台与可视化看板 (Days 3 - 4)
* **目标**：对标 DockShift 的极简全屏工作台风格，实现拖拽即呈现的技能广场。
* **核心任务**：
  1. 基于 Tailwind CSS 打造高质感暗黑主题工作台；
  2. 实现主拖拽区：支持直接拖拽整个项目目录或多个 `.md` / `.mdc` 文件；
  3. 渲染交互式技能卡片广场：
     - 领域分类筛选（前端/后端/测试/DevOps/协同）；
     - 实时模糊搜索（名称、描述、关键词）；
     - 场景提示词（Scenario Prompts）一键复制。

### Phase 3: 智能路由生成与打包导出 (Days 5 - 6)
* **目标**：帮助用户将“50 个分散规则”收敛为“1 个动态调度路由”。
* **核心任务**：
  1. 实现 `router-generator.js`：
     - 提取全部技能的核心触发词与描述；
     - 自动合成一条遵循最新规范的 Meta Router Skill（如 `router.mdc` 或 `AGENTS.md` 动态调度规范）；
  2. 实现 `exporter.js`（基于 `jszip`）：
     - 一键下载重构规范后的标准 Skills 压缩包；
     - 一键导出单文件离线便携看板（单 HTML 文件即可双击独立在本地离线查看）。

### Phase 4: SEO 垂直矩阵、商业化埋点与冷启动 (Days 7 - 8)
* **目标**：SEO 闭环、变现接入与海外开发者社区首发。
* **核心任务**：
  1. 规划垂直 SEO 承接页集群：
     - `/cursor-rules-linter/`（主打 Cursor 规则体检与诊断）；
     - `/cursorrules-to-skills/`（主打遗留配置迁移）；
     - `/agent-skills-directory/`（主打在线技能目录展示）；
  2. 商业化闭环：
     - 接入 Google Analytics 4 与 Google AdSense（开发者专属高 CPM 广告位）；
     - 页面底部挂载 Vultr/DigitalOcean/Cursor 返佣横幅；
  3. 编制海外冷启动推广物料（Reddit `r/Cursor`、Hacker News、Awesome 列表收录 PR）。

---

## 四、 商业化变现与收益测算

| 渠道 / 模式 | 运行机制 | 预估单价 / 转化率 | 稳定期月收益预期 |
| :--- | :--- | :--- | :--- |
| **Google AdSense 自动广告** | 网页顶部轻量横幅与侧边原生广告，聚焦技术与开发类定向。 | 开发者流量 CPM 约 \$15 ~ \$35。 | \$150 ~ \$450 / 月 |
| **云服务与开发工具返佣** | 页面推荐部署基础设施（Vultr / DigitalOcean / Supabase）及 AI API。 | 单个有效注册返佣 \$25 ~ \$100。 | \$200 ~ \$600 / 月 |
| **赞助与企业定制规则 (Sponsorship)** | 顶部设置 Sponsor 专区，展示企业级 AI 开发套件、优质 MCP 工具或个人赞助。 | 固定展示位赞助或 GitHub Sponsors。 | \$100 ~ \$300 / 月 |
| **合计** | - | - | **\$450 ~ \$1,350+ / 月** |

---

## 五、 风险控制与应急对策

1. **大文件/超大仓库拖拽卡顿**：
   - *对策*：纯客户端采用 Web Worker 进行异步后台扫描，解析过程展示非阻塞进度条，只读取文本类 `.md` / `.mdc`，自动忽略 `node_modules` 与 `.git`。
2. **规则规范标准分化（Cursor vs Claude vs Antigravity）**：
   - *对策*：设计通用中间 AST（包含 name, triggers, body, globs, metadata），导出时支持目标平台一键切换（一键切换为 Cursor 格式、Claude 格式或通用 Markdown）。
3. **域名抢注风险**：
   - *对策*：方案确定后优先注册 `ohmyskills.dev` 或 `ohmyskills.com`。
