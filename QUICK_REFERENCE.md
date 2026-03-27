# 🎯 Quick Reference Guide

## ⚡ Super Quick Start (30 seconds)

```bash
# 1. Open browser and go to:
http://localhost:3000

# 2. Done! Your portfolio is live!
```

---

## 📂 File Guide - "What File Do I Edit?"

| Want to change... | Edit this file |
|---|---|
| Your name / Discord username | `components/Header.tsx` |
| About section text | `components/About.tsx` |
| Project list | `components/Projects.tsx` |
| Skills & expertise | `components/Skills.tsx` |
| Timeline (2021-2026) | `components/Timeline.tsx` |
| Contact info / form | `components/Contact.tsx` |
| Colors (cyan/pink) | `tailwind.config.js` |
| Fonts & global styles | `styles/globals.css` |
| Site metadata & favicon | `pages/_document.tsx` |
| Animation tweaks | `components/AnimatedBackground.tsx` |

---

## 🎨 How to Change Colors

**File:** `tailwind.config.js` (Line 12-18)

```js
colors: {
  primary: '#00D4FF',      // ← Cyan (main color)
  secondary: '#FF006E',    // ← Pink (accent)
  dark: '#0A0E27',         // ← Dark background
  darker: '#050811',       // ← Darker background
  accent: '#00F5FF',       // ← Bright cyan
}
```

**How to use new color picker:**
1. Visit [colors.google.com](https://colors.google.com)
2. Pick a color
3. Copy hex code (e.g., `#FF5733`)
4. Replace hex value above
5. Save & refresh browser

---

## 📝 How to Add a New Project

**File:** `components/Projects.tsx` (Line 8-60)

**Before the closing `]` of the projects array, add:**

```tsx
{
  title: 'Project Name Here',
  description: 'What your project does',
  image: '🆕',  // Pick an emoji
  tech: ['Tech1', 'Tech2', 'Tech3'],
  impact: 'What you achieved',
  status: 'Status (Active, Complete, etc)',
},
```

**Save and refresh browser - new project appears!**

---

## 💫 Add a New Skill Category

**File:** `components/Skills.tsx` (Line 8-28)

**Add to the `skills` object:**

```tsx
'Your Skill Category': {
  items: ['Skill1', 'Skill2', 'Skill3', 'Skill4', 'Skill5'],
  level: 'Expert', // or 'Advanced' / 'Intermediate'
  icon: '🎯', // Any emoji
},
```

---

## ❓ Common Questions

### Q: How do I start/stop the server?
**A:** 
```bash
# Start:
npm run dev

# Stop: Press Ctrl+C in terminal
```

### Q: Changes aren't showing up?
**A:** Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

### Q: Can I change the animation speed?
**A:** Edit `components/SectionName.tsx` - look for `duration: 600` (millisecond value)

### Q: How do I add images?
**A:** Put files in `public/` folder, then import:
```tsx
<img src="/imagename.png" alt="Description" />
```

### Q: Can I add a new page?
**A:** Create `pages/newpage.tsx` with default export component

---

## 📱 Test Mobile View

In your browser:
1. Press `F12` (Open DevTools)
2. Click device icon (top-left of DevTools)
3. Select mobile device from dropdown
4. See how it looks on phone!

---

## 🚀 Deploy in 3 Steps

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git push
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Import your GitHub repo
   - Click Deploy
   - Done!

3. **Add custom domain (optional)**
   - Buy domain from Namecheap/GoDaddy
   - Point to Vercel
   - Add in Vercel settings

**See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed steps**

---

## 🔗 Update Social Links

**Discord Link** - `components/Header.tsx` Line 36
```tsx
href="https://discord.com/users/YOUR_ID_HERE"
```

**Contact Links** - `components/Contact.tsx` Line 82-90
```tsx
{
  platform: 'Discord',
  handle: '_woospiegrassy_',  // ← Your actual Discord username
  icon: '💬',
},
```

---

## 🎨 Customize Animations

### Change animation speed
**File:** Any `components/SectionName.tsx`

Look for:
```tsx
duration: 600  // milliseconds (0.6 seconds)
```

Smaller = faster, Larger = slower

### Change animation type
```tsx
easing: 'easeOutExpo'  // Try: easeInOutQuad, easeOutCubic, etc
```

[See Anime.js docs](https://animejs.com/) for all options

---

## 📊 Build & Deploy Commands

```bash
# Development (local testing)
npm run dev

# Production build
npm run build

# Run production locally
npm start

# Check for issues
npm run lint
```

---

## 🎯 Portfolio Elements You Can Customize

- ✅ Hero section title
- ✅ About text (4 cards)
- ✅ Add/remove projects
- ✅ Add/remove skills
- ✅ Add/remove timeline entries
- ✅ Contact information
- ✅ All colors
- ✅ Animation speeds
- ✅ Social links
- ✅ Fonts (via Google Fonts)

---

## 🔐 Keep Safe

**Never commit to GitHub:**
- `.env` files with secrets
- API keys
- Passwords
- Personal info (unless you want it public!)

**Already safe:** `.gitignore` file prevents common sensitive files

---

## 📈 Performance Tips

1. **Compress images** - Use [TinyPNG.com](https://tinypng.com)
2. **Lazy load images** - Use Next.js `<Image>` component
3. **Remove unused fonts** - Delete from `_document.tsx`
4. **Minimize dependencies** - Don't add unnecessary packages

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Server won't start | `npm install` then `npm run dev` |
| Styles not applying | Hard refresh: `Ctrl+Shift+R` |
| Animations stutter | Close other browser tabs |
| Build fails | Delete `.next` folder, run `npm run build` again |
| Port 3000 in use | `npm run dev -- -p 3001` (use port 3001) |

---

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Anime.js](https://animejs.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

## ✨ Pro Tips

1. **Keyboard shortcuts** - Use your editor's find/replace (Ctrl+H)
2. **Edit while running** - Changes auto-reload!
3. **Check console** - F12 → Console for errors
4. **Screenshot portfolio** - For Discord bio
5. **Track changes** - Use `git add` / `git commit`

---

## 🎊 You're Ready!

Everything you need is here. This portfolio is:
- 🖥️ Running on your computer
- 📝 Fully customizable
- 🚀 Ready to deploy
- 📱 Responsive design
- ✨ Professional quality

**Start by opening http://localhost:3000 in your browser!**

---

**Questions?** Check the other docs:
- [GETTING_STARTED.md](GETTING_STARTED.md) - Complete guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - How to go live
- [ENHANCEMENTS.md](ENHANCEMENTS.md) - Future features
- [PORTFOLIO_SUMMARY.md](PORTFOLIO_SUMMARY.md) - Full overview
- [README.md](README.md) - Technical details

---

*Happy coding! 🚀 Your portfolio is going to blow people away!*
