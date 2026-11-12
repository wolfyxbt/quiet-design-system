# Quiet Design System

一套安静的、以排版为主的单栏设计语言：一栏文字，四级灰度，三种字重。以中文为主，同时支持中英文混排和纯英文页面。适合个人主页、博客、作品集、文档这类以阅读为主的网站。

**在线示例：<https://wolfyxbt.github.io/quiet-design-system/>**（一个小网站，首页、文章列表、文章页三种页面都有）

风格提炼自 [brianlovin.com](https://brianlovin.com/about)，并针对中文重新调整了字体、行高和间距。本仓库只包含从公开页面归纳出的设计规律（色值、字号、间距、组件结构），不包含原站点的任何文字、图片或代码，与原作者没有关联。

## 包含什么

| 文件 | 内容 |
| --- | --- |
| [DESIGN.md](DESIGN.md) | 设计规范：原则、颜色、字号、间距、组件用法、该做与不该做 |
| [tokens.css](tokens.css) | 全部设计变量（CSS 自定义属性），含深色模式 |
| [components.css](components.css) | 基础样式和组件类，类名以 `q-` 开头 |
| [tailwind-theme.css](tailwind-theme.css) | Tailwind CSS v4 主题，把变量映射成工具类 |
| [index.html](index.html) | 示例网站的首页（封面页），也是在线示例的入口 |
| [writing/](writing/) | 示例网站的文章列表（索引页）和三篇文章（文章页） |
| [site.js](site.js) | 示例网站用的一点脚本：开关导航、切换深浅色。不属于设计系统 |

## 怎么用

### 方式一：纯 CSS

把 `tokens.css` 和 `components.css` 复制到项目里，在页面中引入，再加载 Inter（西文和数字）和 Noto Sans SC（思源黑体，中文）两个字体。别忘了在 `<html>` 上写 `lang="zh-CN"`：

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="tokens.css" />
<link rel="stylesheet" href="components.css" />
```

然后按 [DESIGN.md](DESIGN.md) 里的组件写 HTML：

```html
<header class="q-topbar">
  <a href="/">你的名字</a>
  <span class="q-topbar-sep">/</span>
  <a href="/about">关于</a>
</header>

<main class="q-page q-page--airy">
  <section class="q-section">
    <h2 class="q-section-label">项目</h2>
    <ul class="q-list">
      <li>
        <a class="q-row" href="#">
          <span class="q-row-title">工具箱</span>
          <span class="q-row-meta">我常用的软件和工具</span>
        </a>
      </li>
    </ul>
  </section>
</main>
```

### 方式二：Tailwind CSS v4

在全局 CSS 里按这个顺序导入：

```css
@import "tailwindcss";
@import "./quiet-design-system/tokens.css";
@import "./quiet-design-system/tailwind-theme.css";
```

之后可以直接写 `text-primary`、`text-quaternary`、`bg-tertiary`、`border-primary`、`max-w-measure`、`link-body` 这些工具类。颜色会随系统自动切换深浅色，不需要写 `dark:` 前缀。

### 方式三：交给 AI

在新项目里对 AI 说：

> 按这个仓库里的 DESIGN.md 做页面，直接使用 tokens.css 和 components.css，不要自己定义颜色和字号。

[DESIGN.md](DESIGN.md) 末尾有专门写给 AI 的使用说明。

## 关于字体加载

- 苹果设备上中文用系统自带的苹方，不会下载思源黑体。
- 其他设备会从 Google Fonts 按需下载思源黑体，只下载页面用到的那部分字。
- 如果 Google Fonts 加载失败（比如读者的网络访问不了），页面会回退到系统字体。Windows 上是微软雅黑，它没有 500 字重，列表里的主文字和附注会变得一样粗，其他不受影响。读者主要在这类网络环境的话，建议把两个字体下载下来自己托管。

## 深色模式

默认跟随系统。要强制指定，在 `<html>` 上加属性：

```html
<html data-theme="dark">
```

## 换成自己的风格

- **品牌色**：改 `tokens.css` 里的 `--brand`。它只出现在一条 20×4px 的短线上。
- **字体**：改 `--font-sans`。这套设计依赖 400、500、700 三档字重，换字体时确认它们都有。
- **英文页面**：把 `<html lang="zh-CN">` 改成 `lang="en"`，行高、字距会自动换成西文的取值。
- **内容宽度**：改 `--measure` 系列变量。

## 本地预览

```bash
python3 -m http.server 4173
```

然后打开 `http://localhost:4173/`。
