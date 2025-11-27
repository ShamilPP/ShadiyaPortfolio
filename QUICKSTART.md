# Quick Start Guide - Shadiya Portfolio

Get your portfolio website up and running in minutes!

## 🚀 5-Minute Setup

### Step 1: Download/Clone
```bash
# If using Git
git clone <repository-url>
cd ShadiyaPortfolio

# Or download and extract the ZIP file
```

### Step 2: Customize Content

**Update Personal Information (index.html):**
1. Find and replace "shadiyamdoff@gmail.com" with your email
2. Add your social media links (search for "#" in social links)
3. Update the about section text with your own bio

**Add Profile Image:**
1. Place your profile photo in `assets/images/profile/`
2. Update line 131 in `index.html`:
```html
<img src="assets/images/profile/your-photo.jpg" alt="Your Name">
```

**Customize Projects:**
- Projects are already set up with sample images
- Update project titles and categories as needed
- The images are located in `assets/images/projects/`

### Step 3: Open in Browser

**Option A: Direct Open**
- Simply double-click `index.html`
- Your browser will open the website

**Option B: Local Server (Recommended)**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Step 4: Deploy (Optional)

**Easiest: Netlify Drop**
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag your entire folder
3. Get your live URL instantly!

**Or: GitHub Pages**
1. Create GitHub repository
2. Push your code
3. Enable GitHub Pages in settings
4. Done!

## ✅ Checklist

Before going live, make sure you:
- [ ] Added your profile photo
- [ ] Updated email address
- [ ] Added social media links
- [ ] Customized about section text
- [ ] Updated project information
- [ ] Tested on mobile device
- [ ] Checked all links work
- [ ] Tested contact form

## 🎨 Quick Customization

### Change Colors

Edit `assets/css/styles.css` (line 6):
```css
:root {
    --primary-color: #2c5f5d;  /* Your main color */
    --accent-color: #c9a961;   /* Your accent color */
}
```

### Change Fonts

Update Google Fonts link in `index.html` (line 21) and CSS variables (line 17-18).

### Modify Layout

All sections are clearly commented in `index.html`. Find the section you want to edit and modify the content.

## 📱 Test on Mobile

1. Open on your phone's browser
2. Check if navigation menu works
3. Verify images load correctly
4. Test contact form
5. Ensure all buttons work

## 🆘 Common Issues

**Images not showing?**
- Check file paths are correct
- Ensure images are in correct folder
- Verify image file names match HTML

**CSS not loading?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check CSS file path in HTML
- Open DevTools (F12) to check for errors

**JavaScript not working?**
- Check browser console for errors (F12)
- Ensure JavaScript files are loaded
- Verify file paths are correct

## 🔗 Important Files

- `index.html` - Main website file (edit your content here)
- `assets/css/styles.css` - Styling and colors
- `assets/js/main.js` - Functionality and interactions
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment instructions

## 💡 Tips

1. **Always test locally** before deploying
2. **Backup your files** before making changes
3. **Use browser DevTools** (F12) to debug
4. **Test on real devices** when possible
5. **Keep content up to date** with new projects

## 🎯 Next Steps

1. **Optimize Images**
   - Compress images using [TinyPNG](https://tinypng.com)
   - Aim for < 200KB per image

2. **SEO Setup**
   - Update meta tags with your info
   - Submit to Google Search Console
   - Create social media accounts

3. **Analytics** (Optional)
   - Add Google Analytics
   - Track visitor behavior
   - Improve based on data

4. **Backup**
   - Keep copies of your website
   - Use Git for version control
   - Document changes

## 📚 Learn More

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Testing Guide**: See `TESTING.md`

## 📞 Need Help?

- Email: shadiyamdoff@gmail.com
- Check browser console (F12) for errors
- Review documentation files
- Search online for specific issues

## 🎉 You're Ready!

Your portfolio website is now set up and ready to showcase your interior design work. Remember to:
- Update content regularly
- Add new projects as you complete them
- Test before deploying updates
- Keep backups of your work

**Good luck with your portfolio!** ✨

---

**Quick Links:**
- [Full README](README.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Testing Guide](TESTING.md)

