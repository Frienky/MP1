# 项目概述

Next.js 个人博客，fork 自 SCLS-AI-Camp/MP1（原作者 Corey Chiu，MIT 协议）。主题：PKM 与教育，中英文长文为主，部署在 Vercel（push main 自动部署）。

## 技术栈

- Next.js (App Router) + Tailwind CSS + @tailwindcss/typography
- 排版主题：blueTopaz（亮色）/ darkBlueTopaz（暗色）
- 内容：MDX，位于 `src/content/blog/`；包管理器：pnpm

## 关键文件

| 文件 | 说明 |
|------|------|
| `src/app/page.tsx` | 首页（Layout B content-first） |
| `src/app/blogs/[slug]/page.tsx` | 单篇文章页 |
| `src/components/layout/Header.tsx` | 全局导航栏 |
| `src/components/layout/BlogLayout.tsx` | 文章布局（含 TOC） |
| `src/components/shared/MdxComponents.tsx` | MDX 组件覆盖 |
| `src/config/infoConfig.ts` | 个人信息 / 文案配置 |
| `tailwind.config.ts` | Tailwind + typography 主题 |
| `src/styles/tailwind.css` | CSS 变量 + 全局样式 |

## 已完成改造

**Phase 1 — 精简首页与导航**：删除 IconCloud/TypingAnimation；首页改为 featured card + 紧凑列表；Header 统一小头像。

**Phase 2 — 紧凑排版 + TOC**：新增阅读时间 & 标题提取；typography 主题收紧间距（h2 border-bottom、正文 1rem/1.65）；TableOfContents 组件（IntersectionObserver + 平滑滚动）；BlogLayout 右侧 sticky TOC。

**Phase 3 — 移动端溢出修复**：`Layout.tsx` 加 `min-w-0` 打断 flex 传播链；table 用 `overflow-x-auto` div 包裹；`html { overflow-x: clip }` 兜底。

**Phase 4 — Header 头像 + 代码色块修复**：头像加 `flex-shrink-0` 防压扁；typography 主题加 `blockquote code` / `pre code` 覆盖规则消除多余色块背景。

**Phase 5 — 暗黑模式边框修复**：`--border` 暗色亮度 `15.9%` → `28%`；首页 featured card 改用 `border-border`。

## 设计原则

- 极简 content-first，zinc 灰色系，亮/暗模式均正常
- 移动端优先（375px），长文阅读体验优先
- 与 Tailwind 主题体系兼容，不硬编码颜色值

## 约束

- 不改首页 Layout B 结构、Header 结构、内容宽度（max-w-2xl）
- 不改字体（Inter 正文 / IBM Plex Sans 标题）、主题名称
- 不引入新 npm 依赖，不动 `src/content/blog/` MDX 文件
- 页脚保留原作者 Corey Chiu copyright（MIT 协议要求）
- 修改代码时用中文交流

## 工作方式

- `--chrome` 模式，改完后在 localhost:3000 验证
- 每组改动描述效果后等确认再继续；设计决策有疑问先问
