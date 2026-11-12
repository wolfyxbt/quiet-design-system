# Quiet Design System — 设计规范

这份文档写给两类读者：动手做页面的人，和被要求"按这套风格做页面"的 AI。读完它再去看 [tokens.css](tokens.css) 和 [components.css](components.css)，就能做出风格一致的新页面。

同样的内容有一个可以点着看的版本：<https://wolfyxbt.github.io/quiet-design-system/>。那里每个组件都有真实的效果和代码，颜色页会显示每个变量当前的取值。两边不一致时，以 `tokens.css` 和 `components.css` 为准。

## 一句话概括

**一栏文字，四级灰度，三种字重。** 没有卡片、没有边框、没有底色块，层级全靠字号、字重和灰度的深浅来表达。

这是一种通用的网页设计风格，不限定用途。个人主页、产品官网、文档和博客、应用里的列表页和设置页，都用同一套规则来做。

它不适合必须铺满屏幕的界面：十几列的数据表格、看板、画布、地图、聊天窗口。遇到这类需求，要么把内容拆成几个页面，要么换一套设计。

## 设计原则

1. **排版就是界面。** 页面上几乎只有文字。不用卡片、分割线、图标来"装饰"信息，先问能不能只靠字号、字重、灰度解决。
2. **黑白灰为主，颜色是例外。** 文字只有四级灰度，按钮也只用黑白灰。品牌色全页最多出现一次（一条 20×4px 的短线）。状态色只出现在 8px 的圆点、错误提示和危险操作的文字上。
3. **列表是主角。** 经历、功能、价格、文章、设置项，一切成组的内容都排成同一种列表行：深色的主文字 + 灰色的附注 + 右对齐的等宽数字。表格是把列对齐了的列表。
4. **留白要大方。** 区块之间 64px，页面上下 64–128px。内容越少，留白越多。
5. **交互要轻。** 悬停时只给主文字加下划线，不变色、不加底色、不位移。一个页面最多一个实心的主按钮，其他按钮是白色的小胶囊或者只有文字。
6. **单栏，窄宽度。** 内容永远是居中的一栏，最宽 768px。不做多栏布局，不做侧边栏。做应用时也一样：导航收进左上角的菜单，内容多了就另开一页。

## 颜色

所有颜色都从一条中性色阶取值，通过语义变量使用。组件里不要直接写色值。

### 文字

| 变量 | 浅色 | 深色 | 用在哪 |
| --- | --- | --- | --- |
| `--text-primary` | `#171717` | 白 90% | 标题、列表主文字、正文、按钮文字、输入的内容 |
| `--text-secondary` | `#525252` | 白 70% | 大号引言段落 |
| `--text-tertiary` | `#737373` | 白 50% | 文章日期、引用块、提示、字段说明、未选中的导航和标签页 |
| `--text-quaternary` | `#a1a1a1` | 白 32% | 列表附注、等宽日期、图标、占位文字、链接下划线 |
| `--text-label` | 同 quaternary | 同 tertiary | 分组标签、表头（深色下提亮一级，否则看不清） |
| `--text-inverse` | `#ffffff` | `#000000` | 主按钮上的文字 |

深色模式下文字用的是**带透明度的白**，不是固定的灰色值。

### 背景

| 变量 | 浅色 | 深色 | 用在哪 |
| --- | --- | --- | --- |
| `--bg-page` | `#ffffff` | `#000000` | 页面底色，顶栏和导航层也用它 |
| `--bg-secondary` | `#fafafa` | `#171717` | 小胶囊按钮的悬停态 |
| `--bg-tertiary` | `#f5f5f5` | `#262626` | 行内代码、代码块、输入框、标签、按钮的悬停态 |
| `--bg-elevated` | `#ffffff` | `#171717` | 按钮、对话框 |
| `--bg-hover` | 黑 8% | 白 12% | 透明按钮的悬停层 |
| `--bg-inverse` | `#171717` | 白 90% | 主按钮 |
| `--veil` | 白 80% | 黑 70% | 对话框后面的遮罩 |

页面是纯白 / 纯黑。不要给区块加底色来分区，用留白。

### 品牌色和状态色

| 变量 | 浅色 | 深色 | 用在哪 |
| --- | --- | --- | --- |
| `--brand` | `#fc532a` | 同左 | 强调短线。换成你自己的品牌色即可 |
| `--danger` | `#d93036` | `#ff6166` | 错误提示的文字、出错输入框的描边、危险按钮的文字、状态圆点 |
| `--success` | `#2f9e63` | `#46c37b` | 状态圆点 |
| `--warning` | `#e5a000` | `#f5b83d` | 状态圆点 |

颜色的面积越小越好。不做彩色的实心按钮、彩色的提示条、彩色的标签。

### 其他

| 变量 | 值 | 用在哪 |
| --- | --- | --- |
| `--border-primary` | 黑 / 白 12% | 引用块和提示的左边线、`<hr>` |
| `--selection-text` / `--selection-bg` | 浅色蓝、深色橙 | 文字选中态 |

## 字体

这套系统以中文为主，同时照顾中英文混排。

| 文字 | 字体 | 说明 |
| --- | --- | --- |
| 西文、数字 | Inter | 网页字体，可变字重 100–900 |
| 中文（苹果设备） | 苹方 PingFang SC | 系统自带，不用下载 |
| 中文（其他设备） | 思源黑体 Noto Sans SC | 网页字体，加载 400 / 500 / 700 三档 |
| 等宽 | 系统等宽字体 | 只用于日期、数字和代码 |

字体栈的顺序是 `Inter → PingFang SC → Noto Sans SC → Microsoft YaHei → 系统字体`，几点说明：

- **Inter 必须排在最前。** 这样西文和数字用 Inter，汉字自动落到后面的中文字体上。顺序反过来的话，英文会用中文字体自带的西文字形，粗细和间距都对不上。
- **为什么要加载思源黑体。** 这套设计靠 400 和 500 两档字重区分"附注"和"主文字"。Windows 自带的微软雅黑只有常规和粗体，没有 500，两者会变得一样粗。思源黑体三档都有。
- **苹果设备不会下载思源黑体。** 苹方排在它前面，浏览器只在前面的字体缺字时才去下载后面的网页字体。
- **不开启字体合成粗体**（`font-synthesis-weight: none`）。苹方没有 700，标题会用它最粗的 600，不让浏览器硬描粗。
- **页面要写 `<html lang="zh-CN">`。** 浏览器靠它选择简体字形和中文标点的排法，漏掉的话部分汉字可能显示成日文字形。

### 中文排版规则

汉字占满整个字框，没有西文那样的升部和降部，所以同样的参数下中文会显得更挤。和原版西文设计相比，中文做了这些调整：

| 项目 | 中文（默认） | 英文（`lang="en"`） | 原因 |
| --- | --- | --- | --- |
| 正文行高 | 1.75 | 1.6 | 汉字更密，行间要更松 |
| 引言行高 | 1.5 | 1.33 | 同上 |
| 标题行高 | 1.3 | 1.2 | 同上 |
| 标题字距 | 0 | -0.64px | 汉字收紧字距会粘在一起 |
| 段落间距 | 20px | 16px | 行高变大后，段距要跟着变大才分得清段落 |
| 链接下划线偏移 | 4px | 2px | 汉字底部贴着基线，下划线太近会压到笔画 |
| 列表悬停下划线偏移 | 3px | 1px | 同上 |
| 强调 `<em>` | 中等字重，不倾斜 | 斜体 | 中文没有斜体，硬倾斜很难看 |

这些值都是 [tokens.css](tokens.css) 里的变量。给元素加上 `lang="en"`，它和它的子元素会自动换回英文的取值，所以同一个页面里可以中英文段落并存。

另外几条书写约定：

- **中英文、中文和数字之间加一个空格**（"在 Fieldnote 工作""共 12 期"）。新版 Chrome 和 Safari 会通过 `text-autospace` 自动留出空隙，但旧浏览器不会，手动加最稳妥，两者不会叠加。
- **引号用直角引号「」**，或者接受弯引号 “” 显示得比较窄：因为 Inter 排在最前，弯引号会用 Inter 的半宽字形。
- **日期用数字格式**（`2026.05`、`2022–25`），放在等宽的 `.q-row-date` 里才能右对齐成一列。"至今"这样的汉字也可以放，但尽量短。
- **分组标签用两到四个字**（"项目""工作经历"），不加冒号。
- **按钮文字用两到四个字**（"保存修改""新建文档"），动词开头，不加标点。

### 字号表

| 角色 | 字号 | 字重 | 行高 | 颜色 | 对应类 |
| --- | --- | --- | --- | --- | --- |
| 页面标题 | 30 → 36 → 40px | 700 | 1.3 | primary | `.q-title` |
| 数据概览的数字 | 30px | 700 | 1.3 | primary | `.q-stat-value` |
| 引言段落 | 24px | 500 | 1.5 | secondary | `.q-lead` |
| 列表主文字 | 20px | 500 | 1.6 | primary | `.q-row-title` |
| 列表附注 | 20px | 400 | 1.6 | quaternary | `.q-row-meta` |
| 列表日期 | 19px 等宽 | 400 | — | quaternary，透明度 0.8 | `.q-row-date` |
| 表格 | 20px（手机 16px） | 第一列 500，其余 400 | 1.6 | primary | `.q-table` |
| 文章正文 | 18px | 400 | 1.75 | primary | `.q-prose` |
| 文章小标题、对话框标题 | 20px | 700 | 1.75 / 1.6 | primary | `.q-prose h3`、`.q-dialog-title` |
| 分组标签、表头 | 16px | 400 | 1.6 | label | `.q-section-label` |
| 元信息（日期）、提示 | 16px | 400 | 1.6 | tertiary | `.q-meta`、`.q-note` |
| 面包屑 | 16px | 500 | 24px | primary | `.q-topbar a` |
| 按钮、字段标签、标签页 | 16px | 500 | — | primary（标签页未选中是 tertiary） | `.q-button`、`.q-field-label`、`.q-tab` |
| 输入框里的文字 | 16px | 400 | 1.6 | primary | `.q-input` |
| 导航链接 | 20px | 600 | 28px | tertiary → primary | `.q-nav-link` |
| 小胶囊、导航分组、字段说明、标签 | 14px | 500 / 400 | — | quaternary / tertiary | `.q-pill`、`.q-nav-label`、`.q-field-hint`、`.q-tag` |

几条容易忽略的规律：

- **分组标签比它下面的内容更小、更淡。** 标签是 16px 的浅灰，内容是 20px 的深色。标签不加粗、不用大写。
- **字重只有三档在正文区出现**：400（附注）、500（主文字、按钮）、700（标题）。600 只在导航里用。
- **单行文字的行高都是 1.6**（列表行、标签、日期）。会换行的文字另有取值：正文 1.75、引言 1.5、标题 1.3。表里是中文的值，英文的值见上面的「中文排版规则」。
- **等宽日期是 19px 而不是 20px**：等宽字体看起来偏大，小 1px 才和旁边的 Inter 对齐。
- **内容用大字，操作用小字。** 读的东西（列表、表格、正文）是 18–20px，点的东西（按钮、标签页、输入框）是 16px。

## 间距与布局

间距以 4px 为基准。最常用的几个：

| 值 | 用在哪 |
| --- | --- |
| 6px | 桌面端列表行与行之间 |
| 8px | 列表行内，主文字和附注之间；按钮之间；字段标签到输入框 |
| 16px | 页面左右留白；分组标签到列表；手机端列表行距 |
| 20px | 段落之间（英文 16px）；标签页之间 |
| 24px | 表单字段之间；标题、引言和按钮之间 |
| 32px | 头像下方；文章页和应用页的区块之间；手机端带图标列表的行距 |
| 64px | 区块之间；页面上下留白 |
| 128px | 介绍页的上下留白（≥640px） |

### 内容宽度

| 变量 | 值 | 用在哪 |
| --- | --- | --- |
| `--measure-narrow` | 576px | 列表页 |
| `--measure` | 672px | 默认：介绍页、表单页 |
| `--measure-wide` | 768px | 文章页、带表格的应用页 |

### 页面骨架

```
┌──────────────────────────────────────────┐
│ ☰  站点名 / 当前页        ◐  顶栏 56px，粘顶 │
├──────────────────────────────────────────┤
│                                          │
│            （64–128px 留白）              │
│                                          │
│        ┌──────────────────────┐          │
│        │ 标题 / 引言 / 按钮     │          │
│        └──────────────────────┘          │
│               64px                       │
│        ┌──────────────────────┐          │
│        │ 分组标签              │          │
│        │ 列表行 ………… 日期     │  ≤768px  │
│        │ 列表行 ………… 日期     │          │
│        └──────────────────────┘          │
│               64px                       │
│                 …                        │
└──────────────────────────────────────────┘
```

### 五种页面

做新页面时先选它属于哪一种，再照下面的顺序往下排。

| 页面 | 用来做什么 | 容器 | 从上到下 |
| --- | --- | --- | --- |
| 介绍页 | 首页、产品页、个人主页、关于 | `.q-page.q-page--airy`，672px | （头像）→ 标题或几段引言 → 按钮或图标链接 → 若干个「标签 + 列表」→ 页脚 |
| 列表页 | 文章列表、更新日志、目录 | `.q-page.q-page--narrow`，576px | 页面标题 → 按年份或类别分组的「标签 + 列表」 |
| 文章页 | 文章、文档、帮助、条款 | `.q-page.q-page--article`，768px | 日期 → 标题 →（小胶囊）→ 正文 → 斜纹带 → 短线 + 「延伸阅读」 |
| 应用页 | 带数据的列表：订单、文档、成员 | `.q-page.q-page--app`，768px | 标题 + 主按钮 → 标签页 → 数据概览 → 搜索框 → 表格 |
| 表单页 | 设置、注册、新建、编辑 | `.q-page`，672px | 页面标题 → 若干个「标签 + 字段」→ 保存按钮 |

每一种都有可运行的例子：介绍页 [index.html](index.html)、[examples/product.html](examples/product.html)、[examples/personal.html](examples/personal.html)，列表页 [docs/index.html](docs/index.html)、[writing/index.html](writing/index.html)，文章页 [writing/keep-it-small.html](writing/keep-it-small.html) 和 [docs/](docs/) 里的每一篇文档，应用页 [examples/app.html](examples/app.html)，表单页 [examples/settings.html](examples/settings.html)。

拼页面时要守住的几条：

- **一个页面只用一种宽度。** 不要把两种页面接在同一页里：栏宽一变，左边缘会错开，一栏就不成立了。内容多了就另开一页。
- **一个页面只有一个标题。** 介绍页的标题可以藏起来（`.q-sr-only`），让引言当开头。
- **一个页面最多一个主按钮**（`.q-button--primary`）。其他操作用默认按钮或幽灵按钮。
- **斜纹带一页最多一条**，只放在文章正文和「延伸阅读」之间。它不是通用的分隔线，区块之间用留白。
- **正文以段落为主。** 一篇文章里大部分是段落，偶尔有小标题、一条横线、一两处行内代码。列表、引用块只在内容本身是列表、是引用的时候用，不要为了「丰富版面」把各种样式挤在一起。
- **链接要有去处。** 没有目标页面的行不要做成链接，用 `<div class="q-row">`，它没有悬停效果。
- **应用里放不下的东西另开一页。** 表格超过五列，把次要的列挪到详情页。设置项多了，分成几个表单页，从菜单进入。不要加侧边栏，也不要把页面加宽。

### 断点

- `640px`：列表行从上下堆叠变成一行；表格文字从 16px 变成 20px；介绍页上下留白从 64px 变成 128px。
- `768px`：页面标题 36px；文章页和应用页左右留白 24px。
- `1024px`：页面标题 40px；文章页和应用页留白再放大。
- `1280px`：文章页上下留白 80px。

### 圆角、阴影、动效

- 圆角只有三种：4px（行内代码、标签、小图标）、8px（图片、代码块、输入框、对话框）、全圆（按钮、开关、头像、强调短线）。
- 阴影只有一种：`--shadow-pill`（一圈 0.5px 的描边加极轻的投影）。它只用在浮起来、能按的东西上：按钮、小胶囊、对话框。其他元素都不加阴影。
- 过渡统一用 `150ms` + `cubic-bezier(0.4, 0, 0.2, 1)`，只用于颜色和背景色，开关的滑块是唯一的位移。没有入场动画。

## 组件

### 顶栏 `.q-topbar`

粘在顶部的一行面包屑：菜单按钮 + 站点名 + `/` + 当前页。没有边框和阴影，底色和页面相同。

需要在最右边放一个操作（切换深浅色、当前用户的头像）时，用同样的图标按钮，加上 `.q-topbar-end` 把它推到右侧。最多放一个。

```html
<header class="q-topbar">
  <button class="q-icon-button" aria-label="菜单">…</button>
  <a href="/">站点名</a>
  <span class="q-topbar-sep">/</span>
  <a href="/docs">文档</a>
  <button class="q-icon-button q-topbar-end" aria-label="切换深浅色">…</button>
</header>
```

### 全屏导航 `.q-nav`

点菜单按钮后盖住整个页面的导航层。链接是 20px 半粗的灰色字，当前页和悬停时变成主色。用 `hidden` 属性控制显示。应用的全部导航都放在这里，不做侧边栏。

```html
<nav class="q-nav" hidden>
  <div class="q-nav-group">
    <a class="q-nav-link" href="/">首页</a>
    <a class="q-nav-link" href="/docs" aria-current="page">文档</a>
  </div>
  <div class="q-nav-group">
    <span class="q-nav-label">工作区</span>
    <a class="q-nav-link" href="/members">成员</a>
    <a class="q-nav-link" href="/settings">设置</a>
  </div>
</nav>
```

### 页面容器 `.q-page`

居中的单栏，区块之间 64px。

| 修饰类 | 效果 |
| --- | --- |
| （无） | 672px 宽，用于表单页 |
| `.q-page--airy` | 672px 宽，≥640px 时上下留白 128px，用于介绍页 |
| `.q-page--narrow` | 576px 宽，用于列表页 |
| `.q-page--article` | 768px 宽，区块间距 32px，用于文章页 |
| `.q-page--app` | 768px 宽，区块间距 32px，用于应用页 |

### 分组 `.q-section`

一个灰色小标签加一段内容，两者相距 16px。内容可以是列表、表单、表格或一段正文。

```html
<section class="q-section">
  <h2 class="q-section-label">功能</h2>
  <ul class="q-list">…</ul>
</section>
```

### 标题区 `.q-header` 和一排按钮 `.q-actions`

- `.q-header`：页面标题在左，主按钮在右，放不下时按钮换到下一行。用在应用页的开头。
- `.q-actions`：一排按钮，相距 8px，放不下就换行。

```html
<div class="q-header">
  <h1 class="q-title">文档</h1>
  <button class="q-button q-button--primary" type="button">新建文档</button>
</div>
```

### 列表 `.q-list` + `.q-row`

整套设计的核心。每一行通常是一个链接（`<a class="q-row">`），由下面几种零件自由组合。没有目标页面的行用 `<div class="q-row">`，样子一样，只是悬停时不出现下划线。

| 零件 | 说明 |
| --- | --- |
| `.q-row-icon` | 可选。20px 的小图标（手机上 28px，单独占一行） |
| `.q-row-title` | 主文字。500 字重，主色。桌面端超长时截断成一行 |
| `.q-row-meta` | 附注。400 字重，最浅的灰 |
| `.q-row-date` | 等宽的日期、价格或数字，自动推到最右 |
| `.q-row-glyph` | 可选。外链箭头之类的小符号 |
| `.q-row-main` | 可选。包住主文字和附注，让它们在手机上保持并排 |
| `.q-row-end` | 可选。行尾的控件（开关、按钮），推到最右 |

几种常见组合：

```html
<!-- 图标 + 名称 + 角色 + 时间 -->
<li>
  <a class="q-row" href="/work/fieldnote">
    <img class="q-row-icon" src="logo.png" alt="" />
    <span class="q-row-main">
      <span class="q-row-title">Fieldnote</span>
      <span class="q-row-meta">产品设计师</span>
    </span>
    <span class="q-row-date">2022–25</span>
  </a>
</li>

<!-- 名称 + 一句话描述（不是链接） -->
<li>
  <div class="q-row">
    <span class="q-row-title">版本记录</span>
    <span class="q-row-meta">每次保存都能找回</span>
  </div>
</li>

<!-- 名称 + 说明 + 价格 -->
<li>
  <div class="q-row">
    <span class="q-row-main">
      <span class="q-row-title">团队版</span>
      <span class="q-row-meta">每人每月</span>
    </span>
    <span class="q-row-date">¥48</span>
  </div>
</li>

<!-- 设置项：名称 + 说明 + 开关。加 .q-row--inline，手机上也保持一行 -->
<li>
  <label class="q-row q-row--inline">
    <span class="q-row-main">
      <span class="q-row-title">每周摘要</span>
      <span class="q-row-meta">周一早上的一封邮件</span>
    </span>
    <input class="q-switch q-row-end" type="checkbox" checked />
  </label>
</li>
```

手机上（<640px）每行的零件上下堆叠，行距从 6px 放大到 16px（带图标时 32px）。

### 引言 `.q-lead` 与链接 `.q-link`

介绍页开头的几段话：24px、中等字重、次级灰。段落之间 20px。

链接不变色，只用一条 2px 的浅灰下划线表明可点，悬停时文字变成主色。

```html
<p class="q-lead">
  潮池是给小团队用的写作工具，用法见<a class="q-link" href="/docs">文档</a>。
</p>
```

### 文章正文 `.q-prose`

把 Markdown 渲染出来的 HTML 直接放进去即可。块与块之间 20px。也可以放在 `.q-section` 里，用来排「常见问题」这类一问一答的内容。

- `p`：18px，行高 1.75
- `h3`：20px 粗体，上方多留 20px
- `ul` / `ol`：项目之间 8px
- `blockquote`：左侧 3px 细线，文字变成三级灰
- `hr`：一条 1px 细线，上下各 24px
- `code`：浅灰底、4px 圆角、16px 等宽
- `img`：撑满宽度，8px 圆角
- `a`：和 `.q-link` 相同

文章页的头部是：灰色日期（`.q-meta`）→ 标题（`.q-title`）→ 小胶囊，彼此相距 24px。

### 按钮 `.q-button`

36px 高、全圆角、16px 中等字重。四种样子：

| 类 | 样子 | 什么时候用 |
| --- | --- | --- |
| `.q-button` | 白底，一圈极细的描边和很轻的投影 | 默认。大部分按钮都是它 |
| `.q-button.q-button--primary` | 实心，黑底白字（深色下白底黑字） | 页面上最重要的那一个操作。一页最多一个 |
| `.q-button.q-button--ghost` | 平时只有灰色文字，悬停出现淡底色 | 「取消」这类退出的操作 |
| `.q-button.q-button--danger` | 默认按钮，文字换成红色 | 删除这类不可恢复的操作 |

`<a>` 和 `<button>` 都能用。禁用时加 `disabled` 或 `aria-disabled="true"`，按钮变成 40% 透明。

```html
<div class="q-actions">
  <a class="q-button q-button--primary" href="/signup">免费开始</a>
  <a class="q-button" href="#pricing">查看价格</a>
</div>
```

### 小胶囊 `.q-pill`

小一号的默认按钮：28px 高、14px 字、浅灰色文字。用于贴着内容的小操作：点赞数、计数、翻页。不要拿它当页面上的主要按钮。

```html
<button class="q-pill" type="button">
  <svg>…</svg>
  128
</button>
```

### 图标按钮 `.q-icon-button` 与图标链接 `.q-icon-link`

- 图标按钮：36px 的圆，平时透明，悬停出现一层 8% 的黑。
- 图标链接：28px 的线性图标，最浅的灰，悬停变成主色。第一个图标向左偏 8px，让图形和上方文字左对齐。

### 表单 `.q-form` + `.q-field`

字段从上到下排成一列，相距 24px。每个字段是：标签（16px 中等字重）→ 输入框 → 说明或错误提示（14px）。

输入框没有边框，只有一层浅灰底色，8px 圆角，40px 高。获得焦点时出现 2px 的主色描边。出错时给输入框加 `aria-invalid="true"`，描边变成红色，下面用 `.q-field-error` 写明原因。

```html
<form class="q-form">
  <label class="q-field">
    <span class="q-field-label">邮箱</span>
    <input class="q-input" type="email" />
    <span class="q-field-hint">用于登录和接收每周摘要。</span>
  </label>

  <label class="q-field">
    <span class="q-field-label">名称</span>
    <input class="q-input" type="text" aria-invalid="true" />
    <span class="q-field-error">名称不能为空。</span>
  </label>

  <label class="q-field">
    <span class="q-field-label">简介</span>
    <textarea class="q-textarea"></textarea>
  </label>

  <label class="q-field">
    <span class="q-field-label">语言</span>
    <select class="q-select">…</select>
  </label>

  <div class="q-actions">
    <button class="q-button q-button--primary" type="submit">保存修改</button>
  </div>
</form>
```

选择类的控件：

- **单选、多选**：`<label class="q-check"><input type="radio" />浅色</label>`。用浏览器自带的控件，颜色改成主文字色。几个选项用 `.q-checks` 横着排。
- **开关**：`<input type="checkbox" class="q-switch" />`。36×20px，关着是浅灰，开着是主文字色。通常放在列表行的行尾（见上面的「设置项」）。

### 标签页 `.q-tabs`

一排 16px 的灰色文字，当前项变成主色。没有下划线和底色，做法和导航链接一样。用来切换同一份数据的不同筛选。

```html
<div class="q-tabs" role="tablist">
  <button class="q-tab" role="tab" aria-selected="true">全部</button>
  <button class="q-tab" role="tab" aria-selected="false">草稿</button>
</div>
```

切换的是页面时用链接：`<a class="q-tab" href="…" aria-current="page">`。

### 数据概览 `.q-stats`

几个关键数字排成一行：灰色小标签在上，30px 的粗体数字在下。放不下时自动换行。最多放四个。

```html
<dl class="q-stats">
  <div class="q-stat">
    <dt class="q-stat-label">文档</dt>
    <dd class="q-stat-value">128</dd>
  </div>
</dl>
```

### 表格 `.q-table`

把列对齐了的列表。表头是灰色小标签，第一列是中等字重的主文字，没有边框、斑马纹和悬停底色。

- 数字和日期的单元格加 `.q-num`：等宽字体，右对齐。对应的表头也加上。
- 次要的列加 `.q-muted`：最浅的灰。
- 外面包一层 `.q-table-wrap`，手机上放不下时可以横向滑动。
- 不超过五列。再多就把次要的列挪到详情页。

```html
<div class="q-table-wrap">
  <table class="q-table">
    <thead>
      <tr>
        <th>标题</th>
        <th>状态</th>
        <th class="q-num">字数</th>
        <th class="q-num">更新</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>写作规范</td>
        <td><span class="q-status q-status--success">已发布</span></td>
        <td class="q-num">3,410</td>
        <td class="q-num q-muted">04.21</td>
      </tr>
    </tbody>
  </table>
</div>
```

没有数据时，在表格的位置放一句灰色的话（`<p class="q-meta">没有符合条件的文档。</p>`），需要的话下面跟一个按钮。不用插图。

### 状态 `.q-status` 和标签 `.q-tag`

- `.q-status`：文字前面一个 8px 的圆点。默认是灰点，`--success`、`--warning`、`--danger` 只改圆点的颜色，文字不变色。
- `.q-tag`：14px 的灰色小字，浅灰底，4px 圆角，和行内代码是同一种做法。用于「测试版」「只读」这类附加说明。

### 提示 `.q-note`

和引用块同一种做法：左边一条 3px 的细线，16px 的三级灰文字。没有底色和图标。`.q-note--danger` 把细线换成红色，用在危险操作的说明上。

```html
<p class="q-note q-note--danger">删除后无法恢复。</p>
```

### 对话框 `.q-dialog`

用浏览器自带的 `<dialog>`，调用 `showModal()` 打开。最宽 448px，8px 圆角，和按钮一样的细描边。后面的页面盖上一层半透明的页面底色（浅色下是白，深色下是黑），不用黑色遮罩。

按钮靠右：退出的操作用幽灵按钮在左，确认的操作在右。

```html
<dialog class="q-dialog">
  <form method="dialog">
    <h2 class="q-dialog-title">删除工作区？</h2>
    <p class="q-dialog-body">里面的 8 篇文档会被永久删除。</p>
    <div class="q-actions">
      <button class="q-button q-button--ghost" type="submit">取消</button>
      <button class="q-button q-button--danger" type="submit">删除</button>
    </div>
  </form>
</dialog>
```

对话框只用来确认操作，或者填一两个字段。字段多了就做成表单页。

### 页脚 `.q-footer`

页面最后一行 16px 的灰色小字：版权、几个链接。不分栏。

```html
<p class="q-footer">
  <span>© 2026 潮池</span>
  <a href="/privacy">隐私</a>
  <a href="/terms">条款</a>
</p>
```

### 写文档用的：示例框 `.q-demo` 和色块 `.q-swatch`

- `.q-demo`：上下各一条细线，中间放真实的组件，后面跟一段代码（`<pre>`）。文档页的正文由交替出现的 `.q-prose` 和 `.q-demo` 组成，外面包一层 `.q-stack`。示例不能放进 `.q-prose` 里面，否则正文的链接和列表样式会套到组件上。
- `.q-swatch`：20px 的小色块，4px 圆角，一圈细描边。颜色用 `style="--swatch: var(--brand)"` 指定。可以加上 `.q-row-icon` 当列表行的图标，用来排色板。

```html
<div class="q-stack">
  <div class="q-prose">
    <h2>按钮</h2>
    <p>36px 高、全圆角。</p>
  </div>
  <div class="q-demo">
    <div class="q-actions">
      <button class="q-button" type="button">查看价格</button>
    </div>
  </div>
  <div class="q-prose">
    <pre><code>&lt;button class="q-button"&gt;查看价格&lt;/button&gt;</code></pre>
  </div>
</div>
```

### 分隔

- `.q-hatch`：8px 高的细斜纹带，横跨整个视口，只用来分开文章正文和「延伸阅读」，一页最多一条。
- `.q-tick`：20×4px 的品牌色短线，放在「延伸阅读」的标签上方。**这是品牌色唯一出现的地方。** 紧跟在它后面的标签会自动深一级（三级灰）。

```html
<div class="q-hatch"></div>

<div class="q-page q-page--article">
  <section class="q-section">
    <div class="q-tick"></div>
    <h2 class="q-section-label">延伸阅读</h2>
    <ul class="q-list">…</ul>
  </section>
</div>
```

## 该做与不该做

**该做**

- 先确定页面是五种里的哪一种，再照「五种页面」里的顺序往下排。
- 新内容先试着排成列表行，排不进去再考虑表格，最后才是别的形式。
- 用灰度区分主次：主文字用 primary，补充信息用 quaternary。
- 时间、数字、价格这类"数据"用等宽字体，右对齐。
- 保持大留白，哪怕页面看起来"有点空"。
- 需要颜色的时候，先试试能不能只用一个 8px 的圆点。

**不该做**

- 不要加卡片、边框、底色块来分组。
- 不要给链接和按钮用品牌色或状态色做底色。
- 不要用图标代替文字标签。
- 不要加悬停底色、位移、缩放这类效果。
- 不要把分组标签加粗、放大或改成全大写。
- 不要引入新的字号、灰度或圆角；先在现有的变量里找。
- 不要在一个页面里混用两种栏宽，也不要把两种页面接在同一页里。
- 不要在一个页面上放两个主按钮。
- 不要加侧边栏、多栏布局、固定在底部的操作条。
- 不要把斜纹带当成通用分隔线，不要把小胶囊当成主要按钮。
- 不要为了展示样式，把代码、加粗、列表、引用、横线挤在几行正文里。

## 哪些是照搬的，哪些是我补的

这套规范最初提炼自一个公开的个人网站，之后扩展成了通用的设计风格。

**取自原站点的**：色阶和四级灰度、字号、间距、三种栏宽，以及这些组件的结构：顶栏、全屏导航、列表行、引言、正文、小胶囊、图标按钮、斜纹带、强调短线。数值都来自页面上实际生效的样式。

**按同样的规律补出来的**：原站点是个人网站，没有下面这些东西，它们是照着已有组件的做法推出来的。

- **按钮**：默认按钮是大一号的小胶囊，幽灵按钮是带文字的图标按钮，主按钮把主文字色用作底色。
- **表单**：输入框用行内代码的浅灰底和图片的 8px 圆角，不加边框。
- **表格、数据概览、标签页**：表格是对齐了列的列表，表头是分组标签；数据概览是分组标签加页面标题的字号；标签页是导航链接的做法。
- **示例框和色块**：示例框用的是正文横线的那种细线，色块是列表行的小图标。
- **状态、标签、提示、对话框、页脚**：状态色只有圆点大小；标签是行内代码的做法；提示是引用块的做法；对话框用按钮的描边和阴影。
- **应用页和表单页**两种页面，以及 `.q-header`、`.q-actions`、`.q-row-end`、`.q-row--inline`、`.q-topbar-end`。
- **状态色** `--danger`、`--success`、`--warning`。
- **键盘焦点环**（`:focus-visible`）：原站点没有统一的焦点样式，这里为了可访问性补了一个。
- **`.q-prose h2` 和 `.q-prose pre`**：原站点的文章里没有出现，按相邻元素的规律外推。
- **`data-theme` 手动切换深浅色**：原站点只跟随系统设置。
- **非链接的列表行**（`<div class="q-row">`）：原站点的行都是链接。
- **中文适配**：原站点是纯英文的。中文字体（苹方、思源黑体）、放宽的行高和段距、去掉标题负字距、加大下划线偏移、`<em>` 不倾斜，都是为中文补的，详见「中文排版规则」。英文的取值保留在 `:lang(en)` 里，和原站点一致。

## 给 AI 的使用说明

如果你是被要求"按这套设计系统做页面"的 AI，请遵守：

1. 引入 `tokens.css` 和 `components.css`（或 Tailwind 项目里用 `tailwind-theme.css`），不要重新定义颜色、字号、间距。同时按 README 的写法加载 Inter 和 Noto Sans SC 两个字体，并在 `<html>` 上写 `lang="zh-CN"`。
2. 页面结构固定为：`.q-topbar` → `.q-page`（内含若干 `.q-section`）。先从「五种页面」里选一种，按它的顺序排，一个页面只用一种宽度。内容放不下就另开一页，不要把两种页面接在一起，不要加侧边栏。
3. 所有成组的内容优先用 `.q-list` + `.q-row`，列需要对齐时用 `.q-table`。
4. 页面上能点的东西只有：链接、`.q-button`、`.q-pill`、`.q-icon-button`、`.q-tab`、表单控件。一个页面最多一个 `.q-button--primary`。
5. 需要新组件时，先找一个已有的组件照着做（就像提示照着引用块做、标签照着行内代码做），只使用 `tokens.css` 里已有的变量，并遵守上面"该做与不该做"的每一条。
6. 不要添加规范之外的装饰：渐变、彩色底色、彩色图标、插图、入场动画。颜色只能出现在强调短线、状态圆点、错误提示和危险按钮的文字上。
7. 文案默认用中文，遵守「中文排版规则」里的书写约定：中英文之间加空格，日期用数字格式，分组标签和按钮文字两到四个字。
