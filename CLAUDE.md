# 项目概述

这是一个 Next.js 个人博客，fork 自 SCLS-AI-Camp/MP1（原作者 Corey Chiu，MIT 协议）。 主题：个人知识管理（PKM）与教育。内容以中英文长文为主。 部署在 Vercel，push 到 main 分支自动部署。

## 技术栈

- 框架：Next.js (App Router)
- 样式：Tailwind CSS + @tailwindcss/typography
- 排版主题：blueTopaz（亮色）/ darkBlueTopaz（暗色）
- 内容：MDX 文件，位于 src/content/blog/
- 包管理器：pnpm
- 部署：Vercel

## 目录结构

- src/app/page.tsx — 首页（已改造为 Layout B content-first）
- src/app/about/page.tsx — About 页
- src/app/blogs/page.tsx — 博客列表页
- src/app/blogs/[slug]/page.tsx — 单篇文章页
- src/components/layout/Header.tsx — 全局导航栏（已简化，移除首页大头像+打字动画）
- src/components/layout/Footer.tsx — 全局页脚
- src/components/layout/Layout.tsx — 全局布局容器
- src/components/layout/Container.tsx — 内容容器
- src/components/home/BlogCard.tsx — 博客卡片组件
- src/config/infoConfig.ts — 个人信息、博客标题等文案配置
- src/config/siteConfig.ts — 导航菜单配置
- src/styles/tailwind.css — 主样式文件
- src/styles/prism.css — 代码高亮样式
- tailwind.config.ts — Tailwind 配置 + typography 主题
- typography.ts — 扩展 typography 样式

## 已完成的改造

### Phase 1 — 精简首页与导航

- `infoConfig.ts` / `IconCloud`：删除 techIcons 数组及 IconCloud 组件，修正 blogHeadLine 语法
- `src/app/page.tsx`：首页改为 Layout B（content-first）——极简 header + featured card + 紧凑列表 + About 链接
- `src/components/layout/Header.tsx`：移除首页专属大头像、TypingAnimation、滚动缩放逻辑；所有页面统一小头像 + 名字 + 导航

### Phase 2 — 紧凑排版 + 目录（TOC）

- `src/lib/utils.ts`：新增 `slugify()`，供标题锚点 ID 生成共用
- `src/lib/blogs.ts`：`BlogType` 新增 `readingTime` / `headings` 字段；`importBlog()` 加入 `computeReadingTime()`（中文 400字/分、英文 200词/分）和 `extractHeadings()`（`matchAll` + `/^(#{2,3}) (.+)/gm`）
- `tailwind.config.ts`：更新 blueTopaz / darkBlueTopaz 排版参数——h2(1.5em/700/border-bottom)、h3(1.2em/600)、h4(1em/600)；正文 1rem/1.65；代码块与引用块 margin 收紧；blockquote 去掉 italic
- `src/components/shared/MdxComponents.tsx`：h2/h3/h4 自动生成锚点 id；新增 `li` 组件
- `src/components/shared/Prose.tsx`：去掉 `prose-blockquote:italic`；加 `prose-li:my-1`
- `src/components/shared/TableOfContents.tsx`（新建）：客户端组件；IntersectionObserver 追踪激活标题，点击平滑滚动
- `src/components/layout/BlogLayout.tsx`：lg:flex 布局，右侧 w-52 sticky TOC（断点 lg=1024px）；时间行显示"约 X 分钟阅读"

### Phase 3 — 移动端横向溢出修复（375px）

- `src/components/layout/Layout.tsx`：`div.flex-col` 加 `min-w-0`，打断 flex min-width 传播链，让 `pre` 的 `overflow-x-auto` 能真正生效
- `src/components/shared/MdxComponents.tsx`：新增 `table` 组件，用 `overflow-x-auto` 的 div 包裹（`<table>` 自身无法截断溢出，需外层容器）
- `src/styles/tailwind.css`：`html { overflow-x: clip }` 兜底（`clip` 不创建新 scroll context，不影响 sticky 定位）

### Phase 4 — Header 头像 + 代码色块修复

- `src/components/layout/Header.tsx`：Avatar Link 加 `block h-9 w-9`，wrapper 加 `flex-shrink-0`，Image 加 `object-cover`；防止窄视口下 flex 压扁头像
- `tailwind.config.ts`：两套主题各加 `'blockquote code'` / `'pre code'` 覆盖规则（透明背景、继承颜色与字号）；根因：默认 `'code'` 规则对所有 `.prose code` 生效，在 blockquote/pre 内叠出可见色块
- `src/components/shared/MdxComponents.tsx`：移除 `td` 组件中的红色背景逻辑，简化为直通 `<td>`

## 设计原则

- 极简 content-first：访客进来先看到内容，弱化个人展示
- zinc 灰色系为主色调，不引入额外色彩
- 亮色/暗色模式都必须正常
- 移动端优先考虑（375px / 390px 断点）
- 长文阅读体验是核心：字重、行高、间距、代码块样式都要为阅读服务
- 改动时保持与现有 Tailwind 主题体系兼容，不硬编码颜色值

## 约束

- 不要改变首页 Layout B 结构
- 不要改变 Header.tsx 导航栏结构
- 不要引入新的 npm 依赖
- 不要改变 blueTopaz/darkBlueTopaz 主题名称
- 不要动 src/content/blog/ 下的 MDX 内容文件
- 页脚必须保留原作者 Corey Chiu 的 copyright 署名（MIT 协议要求）
- 修改代码时用中文交流
- 不要改正文字体家族（保持 Inter）
- 不要改标题字体家族（保持 IBM Plex Sans）
- 不要改内容宽度（保持 max-w-2xl）

## 工作方式

- 用 --chrome 模式，改完代码后打开 localhost:3000 验证效果
- 每组改动完成后先描述效果，等确认再继续
- 遇到不确定的设计决策时先问，不要自行决定