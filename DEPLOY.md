# OhMySkills 部署运维指南 (Cloudflare Pages)

本项目为纯静态零后端架构，无任何动态 API 或后端服务器依赖，推荐通过 **Cloudflare Pages** 进行全球 CDN 分发。

---

## 1. Cloudflare Pages 部署流程

### 方式 A：通过 GitHub 仓库自动持续集成 (推荐)
1. 在 GitHub 上创建仓库 `aquarkgn/ohmyskills`；
2. 登录 Cloudflare Dashboard -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**；
3. 选择 `ohmyskills` 仓库与 `master` 分支；
4. 构建配置：
   - **Framework preset**: `None`
   - **Build command**: (留空)
   - **Build output directory**: `/` (根目录)
5. 点击 **Save and Deploy** 即可完成全球发布。

### 方式 B：使用 Wrangler CLI 极速部署
```bash
# 登录 Cloudflare
npx wrangler login

# 直接部署当前目录为 Pages 项目
npx wrangler pages deploy . --project-name=ohmyskills
```

---

## 2. 自定义域名绑定 (Custom Domains)
- 在 Cloudflare Pages 项目后台进入 **Custom domains**；
- 绑定 `ohmyskills.dev` (或 `ohmyskills.com` / `ohmyskills.org`)；
- 自动生成免费 SSL/TLS 证书并开启全球 HTTP/3 与 Brotli 极速压缩。
