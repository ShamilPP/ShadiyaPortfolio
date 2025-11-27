# Deployment Guide - Shadiya Portfolio

This guide covers various deployment options for the Shadiya Portfolio website.

## 📋 Pre-Deployment Checklist

- [ ] Replace placeholder profile image
- [ ] Update all personal information
- [ ] Add social media links
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Optimize all images
- [ ] Test contact form
- [ ] Update meta tags with actual domain
- [ ] Update sitemap.xml with actual domain
- [ ] Test all internal links
- [ ] Check for console errors
- [ ] Validate HTML/CSS
- [ ] Test accessibility
- [ ] Check page load speed

## 🚀 Deployment Options

### 1. GitHub Pages (Free)

**Steps:**
1. Create a GitHub repository
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the branch (usually `main` or `master`)
5. Select root folder
6. Click Save

**Custom Domain (Optional):**
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Add CNAME record pointing to `username.github.io`

**URL:** `https://username.github.io/repository-name`

### 2. Netlify (Free)

**Method 1: Git Integration**
1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" > "Import from Git"
3. Connect your GitHub/GitLab/Bitbucket
4. Select repository
5. Configure build settings (leave blank for static site)
6. Deploy!

**Method 2: Drag & Drop**
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Done!

**Custom Domain:**
- Go to Site settings > Domain management
- Add custom domain
- Configure DNS settings

**Features:**
- Automatic HTTPS
- Continuous deployment
- Form handling (add `data-netlify="true"` to form)
- Custom redirects

### 3. Vercel (Free)

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to project folder
3. Run: `vercel`
4. Follow prompts
5. Deploy!

**Or use Web Interface:**
1. Sign up at [vercel.com](https://vercel.com)
2. Import Git repository
3. Deploy

**URL:** `https://project-name.vercel.app`

### 4. Cloudflare Pages (Free)

**Steps:**
1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Go to Pages
3. Connect Git repository
4. Configure build settings
5. Deploy

**Features:**
- Global CDN
- Unlimited bandwidth
- Automatic HTTPS
- Analytics

### 5. Traditional Web Hosting

**Via FTP/SFTP:**
1. Connect to your hosting via FTP client (FileZilla, Cyberduck)
2. Upload all files to `public_html` or `www` directory
3. Ensure `index.html` is in root
4. Set file permissions (usually 644 for files, 755 for folders)

**Via cPanel:**
1. Log into cPanel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload files
5. Extract if zipped

**Popular Hosting Providers:**
- Bluehost
- HostGator
- SiteGround
- Namecheap
- GoDaddy

## 🔧 Server Configuration

### Apache (.htaccess)

The `.htaccess` file is already included in the project. Ensure your server has:
- mod_rewrite enabled
- mod_deflate enabled
- mod_expires enabled
- mod_headers enabled

### Nginx

Create a configuration file:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/html;
    index index.html;

    # Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 1000;

    # Caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🌐 DNS Configuration

### For Custom Domain:

**A Record:**
```
Type: A
Name: @
Value: [Your server IP]
TTL: 3600
```

**CNAME Record (for www):**
```
Type: CNAME
Name: www
Value: yourdomain.com
TTL: 3600
```

**For Netlify/Vercel:**
```
Type: CNAME
Name: @
Value: [provided by platform]
```

## 🔒 SSL Certificate (HTTPS)

### Free SSL Options:

**1. Let's Encrypt (Traditional Hosting):**
```bash
certbot --apache -d yourdomain.com -d www.yourdomain.com
```

**2. Cloudflare (Free Tier):**
- Add site to Cloudflare
- Change nameservers
- Enable SSL/TLS (Flexible or Full)

**3. Automatic (Netlify/Vercel/GitHub Pages):**
- HTTPS enabled automatically
- No configuration needed

## 📧 Contact Form Setup

### Option 1: Formspree
```javascript
// In main.js, replace form submission with:
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get API keys
3. Add EmailJS library
4. Configure template

### Option 3: Netlify Forms
```html
<!-- Add to form element -->
<form data-netlify="true" name="contact">
```

### Option 4: Custom Backend
Set up your own backend API to handle form submissions.

## 🎯 Performance Optimization

### Before Deployment:

1. **Minify Files:**
```bash
# CSS
npx cssnano assets/css/styles.css assets/css/styles.min.css

# JavaScript
npx terser assets/js/main.js -o assets/js/main.min.js
```

2. **Optimize Images:**
- Use TinyPNG or ImageOptim
- Convert to WebP format
- Create multiple sizes for responsive images

3. **Enable Caching:**
- Configure .htaccess (Apache)
- Set cache headers (Nginx)
- Use CDN

4. **Preload Critical Resources:**
```html
<link rel="preload" href="assets/css/styles.css" as="style">
<link rel="preload" href="assets/js/main.js" as="script">
```

## 📊 Post-Deployment

### 1. Google Search Console
- Submit sitemap: `https://yourdomain.com/sitemap.xml`
- Monitor indexing status
- Check for errors

### 2. Google Analytics (Optional)
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Testing Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### 4. Monitor Performance
- Check loading times
- Monitor uptime
- Track user analytics
- Review error logs

## 🔄 Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 🆘 Troubleshooting

### Common Issues:

**1. 404 Error:**
- Check file paths are correct
- Ensure index.html is in root
- Check server configuration

**2. Images Not Loading:**
- Verify image paths
- Check file permissions
- Ensure images are uploaded

**3. CSS/JS Not Working:**
- Clear browser cache
- Check file paths
- Verify file permissions
- Check console for errors

**4. Contact Form Not Working:**
- Check form action URL
- Verify email service configuration
- Test with simple submission

## 📝 Maintenance

- Regular backups
- Update content regularly
- Monitor security updates
- Check broken links
- Review analytics
- Update dependencies
- Test periodically

## 💡 Best Practices

- Use version control (Git)
- Test before deploying
- Keep backups
- Monitor performance
- Update regularly
- Use staging environment
- Document changes

## 📞 Support

For deployment issues, refer to:
- Platform documentation
- Community forums
- Stack Overflow
- GitHub Issues

---

**Good luck with your deployment!** 🚀

