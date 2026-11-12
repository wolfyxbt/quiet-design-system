# Quiet Design System — 设计规范

这份文档写给两类读者：动手做页面的人，和被要求"按这套风格做页面"的 AI。读完它再去看 [tokens.css](tokens.css) 和 [components.css](components.css)，就能做出风格一致的新页面。

## 一句话概括

**一栏文字，四级灰度，三种字重。** 没有卡片、没有边框、没有底色块，层级全靠字号、字重和灰度的深浅来表达。

## 设计原则

1. **排版就是界面。** 页面上几乎只有文字。不用卡片、分割线、图标来"装饰"信息，先问能不能只靠字号、字重、灰度解决。
2. **黑白灰为主，颜色是例外。** 文字只有四级灰度。品牌色 `--brand` 全页最多出现一次，而且面积极小（一条 20×4px 的短线）。
3. **列表是主角。** 经历、项目、文章、演讲，一切内容都排成同一种列表行：深色的主文字 + 灰色的附注 + 右对齐的等宽日期。
4. **留白要大方。** 区块之间 64px，页面上下 64–128px。内容越少，留白越多。
5. **交互要轻。** 悬停时只给主文字加下划线，不变色、不加底色、不位移。按钮平时是透明的，悬停才出现一层很淡的底色。
6. **单栏，窄宽度。** 内容永远是居中的一栏，最宽 768px。不做多栏布局，不做侧边栏。

## 颜色

所有颜色都从一条中性色阶取值，通过语义变量使用。组件里不要直接写色值。

### 文字

| 变量 | 浅色 | 深色 | 用在哪 |
| --- | --- | --- | --- |
| `--text-primary` | `#171717` | 白 90% | 标题、列表主文字、文章正文 |
| `--text-secondary` | `#525252` | 白 70% | 大号引言段落 |
| `--text-tertiary` | `#737373` | 白 50% | 日期、引用块、导航里未选中的链接 |
| `--text-quaternary` | `#a1a1a1` | 白 32% | 列表附注、等宽日期、图标、链接下划线 |
| `--text-label` | 同 quaternary | 同 tertiary | 分组标签（深色下提亮一级，否则看不清） |

深色模式下文字用的是**带透明度的白**，不是固定的灰色值。

### 背景

| 变量 | 浅色 | 深色 | 用在哪 |
| --- | --- | --- | --- |
| `--bg-page` | `#ffffff` | `#000000` | 页面底色，顶栏和导航层也用它 |
| `--bg-secondary` | `#fafafa` | `#171717` | 胶囊按钮的悬停态 |
| `--bg-tertiary` | `#f5f5f5` | `#262626` | 行内代码、代码块 |
| `--bg-elevated` | `#ffffff` | `#171717` | 胶囊按钮 |
| `--bg-hover` | 黑 8% | 白 12% | 透明图标按钮的悬停层 |

页面是纯白 / 纯黑。不要给区块加底色来分区，用留白。

### 其他

| 变量 | 值 | 用在哪 |
| --- | --- | --- |
| `--brand` | `#fc532a` | 强调短线。换成你自己的品牌色即可 |
| `--border-primary` | 黑 / 白 12% | 引用块左边线、`<hr>` |
| `--selection-text` / `--selection-bg` | 浅色蓝、深色橙 | 文字选中态 |

## 字体

- **无衬线**：Inter（可变字体，100–900），后备为系统字体。
- **等宽**：系统等宽字体（`ui-monospace`、SF Mono、Menlo…），只用于列表右侧的日期和代码。
- 不开启字体合成粗体：`font-synthesis-weight: none`。

### 字号表

| 角色 | 字号 | 字重 | 行高 | 颜色 | 对应类 |
| --- | --- | --- | --- | --- | --- |
| 页面标题 | 30 → 36 → 40px | 700 | 1.2，字距 -0.64px | primary | `.q-title` |
| 引言段落 | 24px | 500 | 32px | secondary | `.q-lead` |
| 列表主文字 | 20px | 500 | 1.6 | primary | `.q-row-title` |
| 列表附注 | 20px | 400 | 1.6 | quaternary | `.q-row-meta` |
| 列表日期 | 19px 等宽 | 400 | — | quaternary，透明度 0.8 | `.q-row-date` |
| 文章正文 | 18px | 400 | 1.6 | primary | `.q-prose` |
| 文章小标题 | 20px | 700 | 1.6 | primary | `.q-prose h3` |
| 分组标签 | 16px | 400 | 1.6 | label | `.q-section-label` |
| 元信息（日期） | 16px | 400 | 1.6 | tertiary | `.q-meta` |
| 面包屑 | 16px | 500 | 24px | primary | `.q-topbar a` |
| 导航链接 | 20px | 600 | 28px | tertiary → primary | `.q-nav-link` |
| 小按钮 / 导航分组 | 14px | 500 | — | quaternary | `.q-pill`、`.q-nav-label` |

几条容易忽略的规律：

- **分组标签比它下面的内容更小、更淡。** 标签是 16px 的浅灰，内容是 20px 的深色。标签不加粗、不用大写。
- **字重只有三档在正文区出现**：400（附注）、500（主文字）、700（标题）。600 只在导航里用。
- **行高几乎全是 1.6**，只有页面标题（1.2）和引言段落（固定 32px）例外。
- **等宽日期是 19px 而不是 20px**：等宽字体看起来偏大，小 1px 才和旁边的 Inter 对齐。

## 间距与布局

间距以 4px 为基准。最常用的几个：

| 值 | 用在哪 |
| --- | --- |
| 6px | 桌面端列表行与行之间 |
| 8px | 列表行内，主文字和附注之间 |
| 16px | 页面左右留白；分组标签到列表；段落之间；手机端列表行距 |
| 32px | 头像下方；文章页区块之间；手机端带图标列表的行距 |
| 64px | 区块之间；页面上下留白 |
| 128px | 个人主页这类页面的上下留白（≥640px） |

### 内容宽度

| 变量 | 值 | 用在哪 |
| --- | --- | --- |
| `--measure-narrow` | 576px | 索引页（文章列表） |
| `--measure` | 672px | 默认：个人主页、通用页面 |
| `--measure-wide` | 768px | 文章正文 |

### 页面骨架

```
┌──────────────────────────────────────────┐
│ ☰  站点名 / 当前页          顶栏 56px，粘顶 │
├──────────────────────────────────────────┤
│                                          │
│            （64–128px 留白）              │
│                                          │
│        ┌──────────────────────┐          │
│        │ 引言 / 标题           │          │
│        └──────────────────────┘          │
│               64px                       │
│        ┌──────────────────────┐          │
│        │ 分组标签              │          │
│        │ 列表行 ………… 日期     │  ≤672px  │
│        │ 列表行 ………… 日期     │          │
│        └──────────────────────┘          │
│               64px                       │
│                 …                        │
└──────────────────────────────────────────┘
```

### 断点

- `640px`：列表行从上下堆叠变成一行；个人主页上下留白从 64px 变成 128px。
- `768px`：页面标题 36px；文章页左右留白 24px。
- `1024px`：页面标题 40px；文章页留白再放大。

### 圆角、阴影、动效

- 圆角只有三种：4px（行内代码、小图标）、8px（图片、代码块）、全圆（按钮、头像、强调短线）。
- 阴影只有一处：胶囊按钮的 `--shadow-pill`（一圈 0.5px 的描边加极轻的投影）。其他元素都不加阴影。
- 过渡统一用 `150ms` + `cubic-bezier(0.4, 0, 0.2, 1)`，只用于颜色和背景色。没有入场动画。

## 组件

完整可运行的例子见 [example/index.html](example/index.html)。

### 顶栏 `.q-topbar`

粘在顶部的一行面包屑：菜单按钮 + 站点名 + `/` + 当前页。没有边框和阴影，底色和页面相同。

```html
<header class="q-topbar">
  <button class="q-icon-button" aria-label="Menu">…</button>
  <a href="/">Your Name</a>
  <span class="q-topbar-sep">/</span>
  <a href="/about">About</a>
</header>
```

### 全屏导航 `.q-nav`

点菜单按钮后盖住整个页面的导航层。链接是 20px 半粗的灰色字，当前页和悬停时变成主色。用 `hidden` 属性控制显示。

```html
<nav class="q-nav" hidden>
  <div class="q-nav-group">
    <a class="q-nav-link" href="/">Home</a>
    <a class="q-nav-link" href="/about" aria-current="page">About</a>
  </div>
  <div class="q-nav-group">
    <span class="q-nav-label">Projects</span>
    <a class="q-nav-link" href="/notes">Notes</a>
  </div>
</nav>
```

### 页面容器 `.q-page`

居中的单栏，区块之间 64px。

| 修饰类 | 效果 |
| --- | --- |
| （无） | 672px 宽 |
| `.q-page--narrow` | 576px 宽，用于索引页 |
| `.q-page--article` | 768px 宽，区块间距 32px，用于文章 |
| `.q-page--airy` | ≥640px 时上下留白 128px，用于个人主页 |

### 分组 `.q-section`

一个灰色小标签加一段内容，两者相距 16px。

```html
<section class="q-section">
  <h2 class="q-section-label">Work</h2>
  <ul class="q-list">…</ul>
</section>
```

### 列表 `.q-list` + `.q-row`

整套设计的核心。每一行是一个链接，由下面几种零件自由组合：

| 零件 | 说明 |
| --- | --- |
| `.q-row-icon` | 可选。20px 的小图标（手机上 28px，单独占一行） |
| `.q-row-title` | 主文字。500 字重，主色。桌面端超长时截断成一行 |
| `.q-row-meta` | 附注。400 字重，最浅的灰 |
| `.q-row-date` | 等宽日期，自动推到最右 |
| `.q-row-glyph` | 可选。外链箭头之类的小符号 |
| `.q-row-main` | 可选。包住主文字和附注，让它们在手机上保持并排 |

三种常见组合：

```html
<!-- 图标 + 名称 + 角色 + 时间 -->
<li>
  <a class="q-row" href="#">
    <img class="q-row-icon" src="logo.png" alt="" />
    <span class="q-row-main">
      <span class="q-row-title">Fieldnote</span>
      <span class="q-row-meta">Product Designer</span>
    </span>
    <span class="q-row-date">2022–25</span>
  </a>
</li>

<!-- 名称 + 一句话描述 -->
<li>
  <a class="q-row" href="#">
    <span class="q-row-title">Toolbox</span>
    <span class="q-row-meta">My favorite apps and tools</span>
  </a>
</li>

<!-- 长标题 + 日期 -->
<li>
  <a class="q-row" href="#">
    <span class="q-row-title q-row-title--fill">Designing with fewer moving parts</span>
    <span class="q-row-date">May '26</span>
  </a>
</li>
```

手机上（<640px）每行的零件上下堆叠，行距从 6px 放大到 16px（带图标时 32px）。

### 引言 `.q-lead` 与链接 `.q-link`

个人主页开头的自我介绍：24px、中等字重、次级灰。段落之间 16px。

链接不变色，只用一条 2px 的浅灰下划线表明可点，悬停时文字变成主色。

```html
<p class="q-lead">
  I'm currently building tools at <a class="q-link" href="#">Fieldnote</a>.
</p>
```

### 文章正文 `.q-prose`

把 Markdown 渲染出来的 HTML 直接放进去即可。块与块之间 16px。

- `p`：18px，行高 1.6
- `h3`：20px 粗体，上方多留 20px
- `ul` / `ol`：项目之间 8px
- `blockquote`：左侧 3px 细线，文字变成三级灰
- `hr`：一条 1px 细线，上下各 24px
- `code`：浅灰底、4px 圆角、16px 等宽
- `img`：撑满宽度，8px 圆角
- `a`：和 `.q-link` 相同

文章页的头部是：灰色日期（`.q-meta`）→ 标题（`.q-title`）→ 胶囊按钮，彼此相距 24px。

### 胶囊按钮 `.q-pill`

全套设计里唯一有"实体感"的控件：28px 高、全圆角、一圈极细的描边。用于点赞数、计数、筛选这类次要操作。文字是浅灰色，不抢正文。

```html
<button class="q-pill" type="button">
  <svg>…</svg>
  128
</button>
```

### 图标按钮 `.q-icon-button` 与图标链接 `.q-icon-link`

- 图标按钮：36px 的圆，平时透明，悬停出现一层 8% 的黑。
- 图标链接：28px 的线性图标，最浅的灰，悬停变成主色。第一个图标向左偏 8px，让图形和上方文字左对齐。

### 分隔

- `.q-hatch`：8px 高的细斜纹带，横跨整个视口，用来分开正文和"延伸阅读"。
- `.q-tick`：20×4px 的品牌色短线，放在分组标签上方。**这是品牌色唯一出现的地方。**

## 该做与不该做

**该做**

- 新内容先试着排成列表行，排不进去再考虑别的形式。
- 用灰度区分主次：主文字用 primary，补充信息用 quaternary。
- 时间、数字这类"数据"用等宽字体，右对齐。
- 保持大留白，哪怕页面看起来"有点空"。

**不该做**

- 不要加卡片、边框、底色块来分组。
- 不要给链接和按钮用品牌色。
- 不要用图标代替文字标签。
- 不要加悬停底色、位移、缩放这类效果。
- 不要把分组标签加粗、放大或改成全大写。
- 不要引入新的字号、灰度或圆角；先在现有的变量里找。

## 哪些是照搬的，哪些是我补的

这套规范提炼自一个公开的个人网站。色值、字号、间距、组件结构都来自页面上实际生效的样式，下面几项除外：

- **键盘焦点环**（`:focus-visible`）：原站点没有统一的焦点样式，这里为了可访问性补了一个。
- **`.q-prose h2` 和 `.q-prose pre`**：原站点的文章里没有出现，这里按相邻元素的规律外推。
- **`data-theme` 手动切换深浅色**：原站点只跟随系统设置。
- **中文后备字体**：在字体栈里加了 `PingFang SC`。

## 给 AI 的使用说明

如果你是被要求"按这套设计系统做页面"的 AI，请遵守：

1. 引入 `tokens.css` 和 `components.css`（或 Tailwind 项目里用 `tailwind-theme.css`），不要重新定义颜色、字号、间距。
2. 页面结构固定为：`.q-topbar` → `.q-page`（内含若干 `.q-section`）。
3. 所有成组的内容优先用 `.q-list` + `.q-row`。
4. 需要新组件时，只使用 `tokens.css` 里已有的变量，并遵守上面"该做与不该做"的每一条。
5. 不要添加规范之外的装饰：渐变、阴影、彩色图标、动画。
