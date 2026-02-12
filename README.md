# scotthugh.github.io

Personal site and technical guides by Scott Hugh

## 🌐 Live Site

**https://scotthugh.github.io**

## 📚 What's Here

### Landing Page
Clean portfolio hub linking to all projects and content

### Technical Guides
- **[Linux Field Engineer Diagnostic Guide](/guides/linux-field-engineer/guide.html)** - Systematic troubleshooting methodology for production infrastructure

## 🏗️ Structure

```
scotthugh.github.io/
├── index.html                    # Landing page
├── nav-component.js              # Shared navigation
├── .github/
│   └── FUNDING.yml              # GitHub Sponsors & Patreon
├── assets/
│   └── linux-cover.png          # Guide header images
└── guides/
    └── linux-field-engineer/
        └── guide.html           # Interactive diagnostic guide
```

## 🎨 Design

- Clean terminal aesthetic
- Dark theme (#0d0f0e)
- Professional green (#39d353)
- JetBrains Mono + Space Grotesk fonts
- Subtle scanline texture
- Mobile responsive

## 🔗 Navigation

**Global nav bar (all pages):**
- Home link
- Guide links
- GitHub
- Patreon

**Consistent experience across all pages**

## 🚀 Adding New Guides

1. Create directory in `/guides/`
2. Add `guide.html`
3. Include nav component: `<script src="/nav-component.js" defer></script>`
4. Update nav links in `nav-component.js`
5. Add link on landing page

## 📝 License

**Guides:** MIT License - Free to use, modify, share  
**Personal content:** © Scott Hugh

## 🤝 Support

Support ongoing framework development:
- **[Patreon](https://patreon.com/scotthugh)** - Early access, monthly Q&A
- **[GitHub Sponsors](https://github.com/sponsors/scotthugh)** - One-time or recurring

## 🔧 Local Development

```bash
# Clone
git clone git@github.com:scotthugh/scotthugh.github.io.git
cd scotthugh.github.io

# Serve locally
python3 -m http.server 8000
# Visit: http://localhost:8000
```

## 📞 Connect

- **Website:** https://scotthugh.github.io
- **LinkedIn:** https://linkedin.com/in/scotthugh
- **YouTube:** [@scotthughpro](https://www.youtube.com/@scotthughpro)
- **GitHub:** [@scotthugh](https://github.com/scotthugh)

---

**Frameworks over fixes • Methodology over memorization • Enablement over heroics**
