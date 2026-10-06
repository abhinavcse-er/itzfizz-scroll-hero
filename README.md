# ITZFIZZ — Scroll-Driven Hero Experience

> A premium, responsive frontend implementation of the **Scroll-Driven Hero Section Animation** assignment.

## ✨ Project Overview

ITZFIZZ is an interactive landing-page hero built around motion, typography and scroll-based storytelling.

### Features
- Large letter-spaced **WELCOME ITZFIZZ** headline
- Smooth initial page-load reveal
- Scroll-controlled sports-car movement
- Dynamic motion trail
- Scroll progress indicator
- Four animated impact/statistic cards
- Responsive desktop, tablet and mobile layouts
- Premium dark visual design with subtle grain and glow
- Transform-based, performance-conscious animation
- Semantic HTML structure
- Inline SVG car — no local image asset required

## 🎯 Assignment Requirements

| Requirement | Status |
|---|---|
| Full-screen hero | ✅ |
| Letter-spaced headline | ✅ |
| Impact metrics | ✅ |
| Initial load animation | ✅ |
| Scroll-based animation | ✅ |
| Main visual moves with scroll | ✅ |
| Scroll-tied, not autoplay | ✅ |
| Smooth interpolation | ✅ |
| Transform-based animation | ✅ |
| Responsive design | ✅ |
| HTML + CSS + JavaScript | ✅ |
| GSAP + ScrollTrigger | ✅ |
| Clean separate files | ✅ |
| GitHub Pages ready | ✅ |

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- GSAP
- GSAP ScrollTrigger
- DM Sans + Manrope
- GitHub Pages

No React, Next.js, Tailwind or build system is required.

## 📁 Project Structure

```text
itzfizz-scroll-hero/
├── index.html
├── style.css
├── script.js
├── README.md
└── .nojekyll
```

## 🚀 Run Locally

### Direct
Extract the project and open `index.html` in a modern browser.

### VS Code
1. Open the project folder in VS Code.
2. Install **Live Server**.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

# 🌐 GitHub Pages Deployment

GitHub Pages can publish static HTML, CSS and JavaScript directly from a GitHub repository.

## Step 1 — Create a repository

On GitHub, click **New repository**.

Suggested name:

```text
itzfizz-scroll-hero
```

For an assignment, making it **Public** is the simplest option.

## Step 2 — Upload the files

Upload these files to the **root** of the repository:

```text
index.html
style.css
script.js
README.md
.nojekyll
```

Your repository should look like:

```text
itzfizz-scroll-hero
├── index.html
├── style.css
├── script.js
├── README.md
└── .nojekyll
```

**Important:** Do not upload only the ZIP. `index.html` must be directly inside the repository's publishing folder.

## Step 3 — Enable GitHub Pages

Open:

```text
Repository → Settings → Pages
```

Under **Build and deployment** select:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

Click **Save**.

## Step 4 — Wait for deployment

Open:

```text
Repository → Actions
```

to see deployment activity.

You can also return to:

```text
Settings → Pages
```

When deployment finishes, GitHub will show the published site.

## 🔗 Expected Live URL

For a project repository:

```text
https://YOUR-USERNAME.github.io/itzfizz-scroll-hero/
```

Example:

```text
https://abhinav123.github.io/itzfizz-scroll-hero/
```

Replace `abhinav123` with your actual GitHub username.

## 📤 What to Submit

### Live Webpage

```text
https://YOUR-USERNAME.github.io/itzfizz-scroll-hero/
```

### GitHub Repository

```text
https://github.com/YOUR-USERNAME/itzfizz-scroll-hero
```

## 🔄 Updating the Website

After Pages is configured:

```text
Edit files
   ↓
Commit changes
   ↓
Push to main
   ↓
GitHub Pages redeploys
   ↓
Refresh live website
```

## 🧪 Pre-Submission Checklist

- [ ] `index.html` is in repository root
- [ ] Hero appears on first screen
- [ ] Headline reveal works
- [ ] Statistics animate
- [ ] Car responds to scrolling
- [ ] Motion trail works
- [ ] Progress indicator works
- [ ] Mobile layout works
- [ ] No horizontal scrolling
- [ ] GitHub repository opens correctly
- [ ] GitHub Pages deployment succeeds
- [ ] Live URL works in a private/incognito browser
- [ ] Both assignment links are copied correctly

## ⚡ Performance

The project uses GSAP ScrollTrigger and transform-based animation rather than repeatedly changing layout properties during scroll. This keeps the animation smoother and avoids unnecessary layout/reflow work.

## ♿ Reduced Motion

A `prefers-reduced-motion` rule is included for users who request reduced motion.

## 🎨 Design Direction

The visual language follows a modern digital-studio aesthetic:

- Minimal dark background
- High-contrast editorial typography
- Lime/blue/orange accents
- Large hero type
- Strong spacing hierarchy
- Subtle grain and glow
- Motion used as storytelling rather than decoration

## 👨‍💻 Author

**Abhinav Kumar**

Frontend / Web Development Assignment

## 📄 License

Created for educational and assignment purposes.

## 📚 Official GitHub Pages Documentation

For current GitHub Pages instructions, use the official GitHub documentation:

https://docs.github.com/en/pages
