# Hannah Personal Site

Static personal website for GitHub Pages.

## Files

- `index.html`: page content and structure
- `styles.css`: visual design and responsive layout
- `script.js`: small header/year behavior
- `assets/hero-ai-product-workbench.png`: generated hero image

## Local Preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/site/
```

## Before Publishing

Replace these placeholders:

- `hello@example.com`
- GitHub profile URL
- LinkedIn profile URL
- project descriptions
- final public name or domain

## GitHub Pages Publishing Path

Recommended beginner path:

1. Create a GitHub repository named `<your-github-username>.github.io`.
2. Put the contents of this `site/` folder at the root of that repository.
3. Make sure the repository root contains `index.html`, `styles.css`, `script.js`, and the `assets/` folder.
4. In GitHub, open repository `Settings` > `Pages`.
5. Choose `Deploy from a branch`.
6. Choose branch `main` and folder `/root`.
7. Visit `https://<your-github-username>.github.io` after GitHub finishes deploying.

Strict publishing rule: do not publish until the email, GitHub URL, LinkedIn URL, and at least one project card are real.

## Product Terms Used In This Homepage

- `Homepage`: 网站首页，用户进入网站看到的第一个主要页面。
- `Hero section`: 首页第一屏的主视觉区域，负责快速传递定位和气质。
- `IA / Information Architecture`: 信息架构，决定内容如何分组、排序、进入。
- `Navigation metaphor`: 导航隐喻，用“窗”这个概念组织整个网站入口。
- `Entry point`: 入口。当前四个入口是 About、Products、Learning、Method。
- `Interaction model`: 交互模型。当前模型是点击窗口，打开对应内容。
- `Modal / Dialog`: 模态窗口。点击窗口后弹出的内容层。
- `CTA / Call to Action`: 行动按钮，例如 Email、GitHub、LinkedIn。
- `Responsive layout`: 响应式布局，确保桌面和手机屏幕都能阅读和操作。
- `Placeholder`: 占位内容，发布前必须替换成真实信息。
- `i18n / Internationalization`: 国际化，让网站具备多语言扩展能力。
- `Language switcher`: 语言切换器，当前是右上角的 `EN / 中文` 按钮。
