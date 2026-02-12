# Landing Page Update - Added Images

## ✅ Changes Made

### New Images Added
1. **Banner:** `/assets/scotthugh-banner.png` - Full-width header
2. **Profile Photo:** `/assets/scotthugh.jpeg` - Circular profile pic with green border

### Layout Updates
```
┌────────────────────────────┐
│ [Banner Image - Full Width]│
├────────────────────────────┤
│    ◯  Profile Photo        │
│    Scott Hugh              │
│    Infrastructure•Arch...  │
│    Bio text...             │
└────────────────────────────┘
```

### CSS Added
- `.banner` - Full width, rounded corners, subtle border
- `.profile-photo` - 120px circle, green border (3px)
- Mobile responsive (100px on mobile)

## 📱 Responsive Behavior
- Desktop: 120px profile photo
- Mobile: 100px profile photo
- Banner adjusts to container width

## 🚀 Next Steps

```bash
cd /Users/scottpetersen/Documents/Repositories/scotthugh.github.io

# Check changes
git status

# Add and commit
git add index.html assets/scotthugh-banner.png assets/scotthugh.jpeg
git commit -m "Add banner and profile photo to landing page"

# Push to GitHub
git push origin main

# Wait 1-2 minutes for GitHub Pages rebuild
# Visit: https://scotthugh.github.io
```

## ✨ Result

**Landing page now has:**
- ✅ Professional banner at top
- ✅ Your photo (builds personal connection)
- ✅ Clean layout with proper hierarchy
- ✅ Mobile responsive
- ✅ Matches overall design aesthetic

**Visual hierarchy:**
1. Banner (full width)
2. Profile photo (centered)
3. Name + tagline
4. Bio
5. Links sections

**Professional and personal!** 🎯
