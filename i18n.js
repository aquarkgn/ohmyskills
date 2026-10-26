/**
 * OhMySkills - Internationalization (i18n) Engine
 * Default Language: English ('en'). Supported: 'en', 'zh'.
 * Voice: Friendly, warm, novice-first, accessible to anyone (even a 10-year-old child).
 */

const I18N_TRANSLATIONS = {
  en: {
    // Brand & Header
    "brand.badge": "100% Free & Open-Source",
    "brand.tagline": "Private AI Skill Hub • LEGO-Simple for Everyone",
    "nav.features": "Features",
    "nav.workbench": "Workbench",
    "nav.registries": "Skill Supermarket",
    "nav.download": "Local CLI",
    "nav.story": "How It Works",
    "nav.faq": "How It Works",
    "nav.changelog": "Changelog",
    "nav.btn_demo": "Try 1-Click Magic Demo",
    "nav.btn_download": "Download CLI",

    // Hero Section
    "hero.badge_private": "100% Local & Private",
    "hero.badge_free": "Forever Free",
    "hero.badge_zero_config": "Zero Code • Novice Friendly",
    "hero.title_part1": "Turn Your Computer into an AI Magic Box.",
    "hero.title_gradient": "Leave Everything To Me.",
    "hero.subtitle": "From Excel wizards and weekly reports to study notes and code writing—zero tech jargon required! Automatically scans all AI skills on your machine, auto-declutters, remembers your favorites, and fixes outdated rules. As easy as playing with LEGO blocks.",
    "hero.cta_demo": "Try 1-Click Magic Demo (Instant Health Check)",
    "hero.cta_drag": "Drop Local Folder to Scan",
    "hero.terminal_title": "Install in local terminal with 1 command",
    "hero.copy": "Copy",
    "hero.copied": "Copied!",
    "hero.editors_bar_title": "INSTANT RETRIEVAL FOR ALL POPULAR AI EDITORS & CLIENTS",

    // Features Bento
    "features.kicker": "Zero-Friction Magic",
    "features.title": "How Even a 10-Year-Old Boy Masters AI Skills",
    "features.subtitle": "No scary black terminals, no confusing setups. Just drop your files in and let your silent magic butler take care of everything.",
    "features.card1_title": "100% Local & Safe: Your Secret Treehouse",
    "features.card1_desc": "Runs entirely inside your browser memory and local machine. Even if you unplug the Wi-Fi cable, everything works smoothly. Your private work, notes, and sensitive prompts never leave your computer.",
    "features.card1_badge": "No Sign-up • Zero Network Upload • Forever Free",
    "features.card2_title": "Magic Butler: Auto-Scan & 1-Click Auto-Fix",
    "features.card2_desc": "Scattered rules across Cursor, Claude, or VSCode? The engine automatically scans, untangles duplicate toys, and updates broken framework rules (Next.js 15, Tailwind v4, React 19) in 1 click.",
    "features.card2_badge": "Health score skyrockets from F to A+ in 1s",
    "features.card3_title": "Free Toy Store: Search & Install in 1 Click",
    "features.card3_desc": "Need an Excel wizard, weekly report polisher, or study summarizer? Search through thousands of curated open-source skills from skills.sh, cursor.directory, and awesome-cursorrules with 1-click install.",
    "features.card3_badge": "Instant search • Official community verified",

    // Workbench
    "workbench.kicker": "Auto-Pilot Workbench",
    "workbench.title": "Zero-Touch Skill Workbench",
    "workbench.subtitle": "Drop your local rule directory or click load demo to experience automated diagnosis, recent tracking, and optimization.",
    "workbench.recent_label": "⚡ Recently Used & Favorites:",
    "workbench.recent_empty": "No recent skills yet. Click any skill card below to use or copy!",
    "workbench.drop_title": "Drag & drop your local project or .cursor/rules/ folder here",
    "workbench.drop_sub_prefix": "or",
    "workbench.drop_choose_folder": "Select Local Folder",
    "workbench.drop_sub_mid": "or",
    "workbench.drop_pick_files": "Pick Rule Files",
    "workbench.drop_btn_demo": "Load 10 Production-Grade Demo Skills (Office, Study & Tech)",
    "workbench.autopilot_banner": "Auto-Pilot Self-Healing Active: When rule conflicts or token bloat are detected, click the button on the right for one-click automatic resolution.",
    "workbench.btn_autofix": "Auto-Fix All (One-Click)",
    "workbench.hud_health": "Health Score",
    "workbench.hud_rules_loaded": "skills loaded",
    "workbench.hud_tokens": "Context Token Load",
    "workbench.hud_always_tokens": "always-on baseline",
    "workbench.hud_savings": "Routing Savings",
    "workbench.hud_savings_tag": "Token Savings",
    "workbench.hud_savings_sub": "Saves ~{tokens} tokens/turn",
    "workbench.hud_issues": "Diagnostic Alerts",
    "workbench.hud_view_details": "View diagnosis report →",
    "workbench.golden_kicker": "Auto-Pilot Crown Jewel",
    "workbench.golden_title": "Single Meta-Router System Prompt Compiled & Ready",
    "workbench.golden_desc": "Zero friction: Instead of juggling dozens of fragmented rule files, copy this single compiled router prompt into Cursor or Claude to unlock on-demand intelligent activation!",
    "workbench.btn_view_router": "View & Copy Master Router",
    "workbench.search_placeholder": "Search skills (Excel, weekly report, Next.js, triggers)...",
    "workbench.btn_preset": "Save Preset",
    "workbench.btn_export_html": "Export HTML",
    "workbench.btn_export_zip": "Bundle ZIP",
    "workbench.empty_filter": "No skills match the current filter criteria.",
    "workbench.trigger_prefix": "Trigger:",
    "workbench.copy_prompt": "Copy Prompt",
    "workbench.copied_prompt": "Prompt copied!",
    "workbench.delete_confirm": "Delete this skill?",

    // Registries
    "registries.kicker": "Community Supermarket",
    "registries.title": "Instant Global Open-Source Skills Explorer",
    "registries.subtitle": "Curated rules from skills.sh, cursor.directory, and awesome-cursorrules. Office, writing, study, and coding skills ready to import.",
    "registries.search_placeholder": "Search global skills (e.g. excel, email, nextjs, docker)...",
    "registries.btn_import": "Import to Workspace",
    "registries.imported": "Imported to workspace!",
    "registries.empty": "No community rules found matching",

    // Downloads
    "download.kicker": "Local Daemon & CLI",
    "download.title": "Download OhMySkills Local Client",
    "download.subtitle": "Deeply integrated with your local file system. Automatically watches rule directories and syncs across editors in milliseconds.",
    "download.mac_title": "macOS",
    "download.mac_desc": "Optimized for Apple Silicon (M1-M4) and Intel x86. Automatically takes over ~/.cursor/rules and ~/.claude directories.",
    "download.mac_btn": "Download Universal Script",
    "download.linux_title": "Linux",
    "download.linux_desc": "Self-contained, dependency-free static binary. Supports Ubuntu, Debian, Arch, Fedora production servers.",
    "download.linux_btn": "Copy Linux Install Command",
    "download.win_title": "Windows & NPM",
    "download.win_desc": "Supports Windows PowerShell / WSL2, or install globally via Node.js npm package manager.",
    "download.win_btn": "Copy NPM Command",

    // Kid-Friendly Story Guide (Replaces stiff QA)
    "story.kicker": "CHILD'S PLAY",
    "story.title": "As Easy as LEGO! How a 10-Year-Old Boy Uses OhMySkills",
    "story.subtitle": "No scary black terminals, no confusing technical settings. Just toss cards into the chest and let your silent magic butler do all the work!",
    "story.card1_tag": "STEP 1: AUTO-SCAN",
    "story.card1_title": "Toss Cards into the Chest (Auto-Scan All Skills)",
    "story.card1_desc": "Don't know where AI rules are hiding on your computer? Just drag any project folder in. Like magic, every single skill across Cursor, Claude, and VSCode lines up instantly!",
    "story.card2_tag": "STEP 2: AUTO-HEALTH & FIX",
    "story.card2_title": "Magic Butler Cleans Up Toys (1-Click Auto-Fix)",
    "story.card2_desc": "Rules duplicated or broken by software updates? Hit the big green [Auto-Fix All] button. The butler sweeps away conflicts and bumps your health score straight to A+!",
    "story.card3_tag": "STEP 3: SUPERMARKET",
    "story.card3_title": "Explore the Free Skill Store (Search & 1-Click Install)",
    "story.card3_desc": "Need an Excel formula builder, weekly report polisher, or reading summarizer? Search the community catalog and install world-class skills in one click for free!",
    "story.card4_tag": "STEP 4: PRIVATE CASTLE",
    "story.card4_title": "Locked in Your Castle (100% Local & Zero Maintenance)",
    "story.card4_desc": "Everything stays 100% inside your own machine. Runs flawlessly even with the Wi-Fi unplugged. Never uploaded to external servers—safer than a bank vault!",

    // Backward-compat aliases
    "faq.kicker": "CHILD'S PLAY",
    "faq.title": "As Easy as LEGO! How a 10-Year-Old Boy Uses OhMySkills",
    "faq.subtitle": "No scary black terminals, no confusing technical settings. Just toss cards into the chest and let your silent magic butler do all the work!",

    // Modals
    "modal.router_title": "Master Meta-Router System Prompt",
    "modal.router_sub": "Zero-friction guide: Copy this single system prompt and paste it into your project's .cursorrules, AGENTS.md, or Claude System Prompt. Your AI model will intelligently load the right skills on-demand!",
    "modal.btn_copy_router": "Copy Master Router Prompt",
    "modal.btn_copied_router": "Copied Successfully!",
    "modal.btn_close": "Close",
    "modal.doctor_title": "Skill Health & Conflict Diagnosis Report",
    "modal.doctor_empty": "Perfect! Zero conflicts or syntax errors detected.",
    "modal.doctor_fix_label": "Solution:",

    // Sponsor
    "sponsor.tag": "SPONSORED",
    "sponsor.text": "Deploy high-performance AI coding test sandboxes on Vultr with $100 free developer credits.",
    "sponsor.link": "Claim $100 Credits →",

    // Footer
    "footer.rights": "• Private AI Skill Hub • 100% Local Execution",
    "footer.cli": "Local CLI",
    "footer.changelog": "Changelog",
    "footer.sitemap": "Sitemap",
    "footer.github": "GitHub Open Source",

    // Alerts
    "alert.autofix_success": "Auto-Fix Complete! Successfully resolved {count} rule conflicts and token bloat. Health score upgraded to {grade} ({score}/100)!",
    "alert.saved_preset": "Preset '{name}' saved to local storage!",
    "alert.prompt_copied": "Copied skill prompt '{name}'!",
    "alert.enter_preset_name": "Enter a name for this workspace preset:"
  },

  zh: {
    // Brand & Header
    "brand.badge": "100% 免费开源",
    "brand.tagline": "私有化 AI 技能全托管百宝箱 • 连小朋友都能轻松玩转",
    "nav.features": "核心优势",
    "nav.workbench": "托管工作台",
    "nav.registries": "技能大超市",
    "nav.download": "本地客户端",
    "nav.story": "魔法说明书",
    "nav.faq": "魔法说明书",
    "nav.changelog": "版本演进",
    "nav.btn_demo": "一键召唤演示",
    "nav.btn_download": "下载 CLI",

    // Hero Section
    "hero.badge_private": "100% 本地私有化",
    "hero.badge_free": "永久免费",
    "hero.badge_zero_config": "零代码门槛 • 小白免懂变更",
    "hero.title_part1": "把电脑变成 AI 魔法百宝箱，",
    "hero.title_gradient": "一切交给我。",
    "hero.subtitle": "不管是办公做表格、写周报总结、学生学习做笔记、还是写程序，全都不用懂一行技术代码！一键自动扫描全电脑 AI 技能、自动整理体检、自动记录常用。像搭积木一样简单，小白也能一秒上手。",
    "hero.cta_demo": "一键召唤演示（秒看自动整理与体检）",
    "hero.cta_drag": "拖入电脑文件夹（马上自动体检）",
    "hero.terminal_title": "电脑终端一条命令全自动安装",
    "hero.copy": "复制",
    "hero.copied": "已复制",
    "hero.editors_bar_title": "支持全生态国际主流 AI 工具与编辑器一键检索识别",

    // Features Bento
    "features.kicker": "小白专属四重守护",
    "features.title": "连 10 岁小男孩都能轻松玩转的四重魔法",
    "features.subtitle": "没有天书般的黑框框与复杂配置，把一切繁琐的事情都交给后台的安静小管家。",
    "features.card1_title": "100% 本地私有：藏在树洞里的小秘密",
    "features.card1_desc": "纯本地运行，不上传任何服务器。哪怕彻底拔掉网线，所有功能照样飞速运转。你的办公私密文件、企业规范和日常笔记，就像锁在自己的日记本里，安全零泄露。",
    "features.card1_badge": "无需注册 • 零网络上传 • 永久免费",
    "features.card2_title": "魔法小管家：自动整理与一键体检",
    "features.card2_desc": "电脑里规则散落一地？小管家自动扫描全盘技能，揪出重复的，标出过期的旧规则。点击【一键全自动修复】，瞬间把乱糟糟的抽屉收拾得整整齐齐，健康分直接拉满！",
    "features.card2_badge": "自愈评分由 F 瞬间拉升至 A+",
    "features.card3_title": "技能大超市：全网好技能搜到即装",
    "features.card3_desc": "想让 AI 帮你秒写 Excel 复杂公式、写高情商周报、或者提取长文笔记？去全网技能广场搜一搜，成千上万款全世界朋友做好的精选技能，点击【装进我的电脑】免费带回家！",
    "features.card3_badge": "免翻墙秒查 • 官方精选认证",

    // Workbench
    "workbench.kicker": "Auto-Pilot Workbench",
    "workbench.title": "小白全托管工作台",
    "workbench.subtitle": "拖入您的规则文件夹，或者直接点击加载演示，自动完成扫描、体检、常用跟踪与智能路由。",
    "workbench.recent_label": "⚡ 最近使用与常用技能:",
    "workbench.recent_empty": "暂无使用记录，点击下方技能卡片即可一键使用！",
    "workbench.drop_title": "拖拽电脑里的项目文件夹、.cursor/rules/ 或 skills/ 目录到这里",
    "workbench.drop_sub_prefix": "或",
    "workbench.drop_choose_folder": "选择本地文件夹",
    "workbench.drop_sub_mid": "，也可以",
    "workbench.drop_pick_files": "选取单个规则文件",
    "workbench.drop_btn_demo": "装配 10 款精选演示（办公表格、周报、学习与编程）",
    "workbench.autopilot_banner": "已激活全托管自愈模式：发现规则冲突或 Token 膨胀时，点击右侧按钮即可全自动一键修复。",
    "workbench.btn_autofix": "一键全自动修复 (Auto-Fix All)",
    "workbench.hud_health": "健康评级",
    "workbench.hud_rules_loaded": "个技能规则已载入",
    "workbench.hud_tokens": "上下文 Token 负荷",
    "workbench.hud_always_tokens": "常驻全局消耗",
    "workbench.hud_savings": "路由节省率",
    "workbench.hud_savings_tag": "Token 节省",
    "workbench.hud_savings_sub": "每轮节省 ~{tokens} Tokens",
    "workbench.hud_issues": "体检告警项",
    "workbench.hud_view_details": "点击查看体检详情 →",
    "workbench.golden_kicker": "全托管终极产物",
    "workbench.golden_title": "单条全托管 Meta-Router 系统提示词已编译就绪",
    "workbench.golden_desc": "小白最爱：您完全无需管理这数十个分散的规则文件，只需点击右侧按钮复制这 1 条系统路由，直接塞进 Cursor 或 Claude，即可拥有全套按需智能调度！",
    "workbench.btn_view_router": "查看并复制全托管路由",
    "workbench.search_placeholder": "搜索技能（Excel、周报、Next.js、触发词）...",
    "workbench.btn_preset": "存为预设",
    "workbench.btn_export_html": "导出 HTML",
    "workbench.btn_export_zip": "打包 ZIP",
    "workbench.empty_filter": "未找到匹配当前筛选条件的技能规则。",
    "workbench.trigger_prefix": "触发词:",
    "workbench.copy_prompt": "复制正文",
    "workbench.copied_prompt": "已复制正文并记录为常用！",
    "workbench.delete_confirm": "确定删除该技能？",

    // Registries
    "registries.kicker": "Community Supermarket",
    "registries.title": "全网流行开源技能即搜即装",
    "registries.subtitle": "收录 skills.sh、cursor.directory、awesome-cursorrules 精选优质规则。办公、周报、学习和开发技能随心装。",
    "registries.search_placeholder": "搜索全网技能 (例如 excel, 周报, email, nextjs, docker)...",
    "registries.btn_import": "装进工作区",
    "registries.imported": "已装进工作区！",
    "registries.empty": "未找到匹配开源技能规则",

    // Downloads
    "download.kicker": "Local Daemon & CLI",
    "download.title": "下载 OhMySkills 本地客户端",
    "download.subtitle": "深度绑定本地文件系统。自动监听规则目录变动，跨 IDE 毫秒级自动同步。",
    "download.mac_title": "macOS",
    "download.mac_desc": "支持 Apple Silicon (M1~M4) 与 Intel x86。自动接管 ~/.cursor/rules 与 ~/.claude 目录。",
    "download.mac_btn": "下载 Universal 极速脚本",
    "download.linux_title": "Linux",
    "download.linux_desc": "独立无依赖静态二进制，支持 Ubuntu、Debian、Arch、Fedora 生产服务器部署。",
    "download.linux_btn": "复制 Linux 安装命令",
    "download.win_title": "Windows & NPM",
    "download.win_desc": "支持 Windows PowerShell / WSL2，或通过 Node.js 全局安装跨平台命令行包。",
    "download.win_btn": "复制 NPM 命令",

    // Kid-Friendly Story Guide (Replaces stiff QA)
    "story.kicker": "像搭积木一样好玩",
    "story.title": "像搭积木一样简单！连 10 岁小男孩都能秒懂的魔法说明书",
    "story.subtitle": "没有可怕的黑色终端，没有天书般的火星文代码。把卡片扔进百宝箱，让魔法小管家替你打理一切！",
    "story.card1_tag": "第 1 步：全盘自动扫描",
    "story.card1_title": "把卡片扔进百宝箱（自动扫描电脑全部技能）",
    "story.card1_desc": "根本不用去翻电脑深处的隐藏文件夹！把项目文件夹往网页上一拖，全电脑各个编辑器里的提示词与技能瞬间自动排队，一个都不会少！",
    "story.card2_tag": "第 2 步：小管家体检与整理",
    "story.card2_title": "魔法小管家打扫房间（一键体检与自动修好）",
    "story.card2_desc": "规则写重了或者框架更新导致旧提示词失效？别慌！点一下绿色的【一键全自动修复】，小管家嗖的一下把冲突和过期的旧规则全修好，还会自动记下你最近最爱用哪几个！",
    "story.card3_tag": "第 3 步：免费技能大超市",
    "story.card3_title": "逛逛免费技能大超市（搜到直接装进电脑）",
    "story.card3_desc": "想让 AI 帮你写办公周报、搞定 Excel 复杂公式、还是做读书笔记？去技能大超市搜一搜，成千上万款全世界朋友做好的精选技能，点击【装进我的电脑】免费带回家！",
    "story.card4_tag": "第 4 步：锁在专属小城堡",
    "story.card4_title": "把小秘密锁进小城堡（绝对安全，拔网线也能用）",
    "story.card4_desc": "最棒的是：所有东西都乖乖呆在你自己的电脑里，哪怕拔掉网线也能飞速运转！就像锁在日记本里的小秘密，绝不上传到任何人的服务器，大人们的敏感数据比银行还安全！",

    // Backward-compat aliases
    "faq.kicker": "像搭积木一样好玩",
    "faq.title": "像搭积木一样简单！连 10 岁小男孩都能秒懂的魔法说明书",
    "faq.subtitle": "没有可怕的黑色终端，没有天书般的火星文代码。把卡片扔进百宝箱，让魔法小管家替你打理一切！",

    // Modals
    "modal.router_title": "全托管 Meta-Router 系统提示词",
    "modal.router_sub": "小白快捷用法：复制下方这 1 条系统提示词，粘贴进项目的 .cursorrules、AGENTS.md 或 Claude 系统提示词中，AI 即可自动按需激活目标技能！",
    "modal.btn_copy_router": "一键复制全托管提示词",
    "modal.btn_copied_router": "已复制成功！",
    "modal.btn_close": "关闭",
    "modal.doctor_title": "技能健康度与语法体检报告",
    "modal.doctor_empty": "🎉 完美！未检测到任何冲突或语法错误。",
    "modal.doctor_fix_label": "💡 解决方案:",

    // Sponsor
    "sponsor.tag": "SPONSORED",
    "sponsor.text": "使用 Vultr 部署高性能 AI 编程测试容器与沙盒集群，立享 $100 美元开发者免费额度。",
    "sponsor.link": "领取 $100 额度 →",

    // Footer
    "footer.rights": "• 私有化 AI 技能全托管百宝箱 • 纯本地运行",
    "footer.cli": "本地客户端",
    "footer.changelog": "版本演进",
    "footer.sitemap": "站点地图",
    "footer.github": "GitHub 开源",

    // Alerts
    "alert.autofix_success": "🎉 全托管自动修复完成！已自动修正 {count} 项规则冲突与 Token 膨胀，健康评级已提升至 {grade} ({score}/100)！",
    "alert.saved_preset": "已将 \"{name}\" 保存至本地持久存储！",
    "alert.prompt_copied": "已复制 \"{name}\" 规则正文并记录到最近使用！",
    "alert.enter_preset_name": "请输入此工程预设名称："
  }
};

const I18n = {
  // Default to English as requested
  currentLang: 'en',

  init() {
    try {
      const saved = localStorage.getItem('ohmyskills_lang');
      if (saved && (saved === 'en' || saved === 'zh')) {
        this.currentLang = saved;
      } else {
        this.currentLang = 'en'; // Strict Default: English
      }
    } catch (e) {
      this.currentLang = 'en';
    }
    this.applyLanguage(this.currentLang);
  },

  getLang() {
    return this.currentLang || 'en';
  },

  t(key, replacements = {}) {
    const dict = I18N_TRANSLATIONS[this.currentLang] || I18N_TRANSLATIONS.en;
    let text = dict[key] || I18N_TRANSLATIONS.en[key] || key;

    for (const [k, v] of Object.entries(replacements)) {
      text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return text;
  },

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'zh') return;
    this.currentLang = lang;
    try {
      localStorage.setItem('ohmyskills_lang', lang);
    } catch (e) {}
    this.applyLanguage(lang);
  },

  applyLanguage(lang) {
    document.documentElement.lang = lang;

    // Update text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        el.textContent = this.t(key);
      }
    });

    // Update html elements with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (key) {
        el.innerHTML = this.t(key);
      }
    });

    // Update placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) {
        el.setAttribute('placeholder', this.t(key));
      }
    });

    // Update Language Toggle switcher UI
    const toggleEn = document.getElementById('lang-toggle-en');
    const toggleZh = document.getElementById('lang-toggle-zh');
    if (toggleEn && toggleZh) {
      if (lang === 'en') {
        toggleEn.className = "px-2 py-0.5 rounded text-white bg-brand-600 font-bold shadow-sm transition";
        toggleZh.className = "px-2 py-0.5 rounded text-slate-400 hover:text-slate-200 transition";
      } else {
        toggleEn.className = "px-2 py-0.5 rounded text-slate-400 hover:text-slate-200 transition";
        toggleZh.className = "px-2 py-0.5 rounded text-white bg-brand-600 font-bold shadow-sm transition";
      }
    }

    // Trigger re-render of dynamic components if they exist
    if (typeof renderDomainFilters === 'function') renderDomainFilters();
    if (typeof renderSkillsGrid === 'function') renderSkillsGrid();
    if (typeof renderPublicRegistries === 'function') renderPublicRegistries();
    if (typeof renderRecentSkillsBar === 'function') renderRecentSkillsBar();
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { I18n, I18N_TRANSLATIONS };
}
