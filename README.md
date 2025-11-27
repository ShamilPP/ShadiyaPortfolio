# Shadiya Portfolio Website

A modern, responsive portfolio website for Shadiya - Interior Designer specializing in residential design and 3D visualization.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Modern Animations**: Smooth scroll animations, hover effects, and micro-interactions
- **Project Gallery**: Filterable gallery with lightbox for viewing projects
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Lazy loading images, efficient animations, minimal dependencies
- **SEO Friendly**: Semantic HTML, meta tags, and proper structure
- **Accessible**: WCAG AA compliant with keyboard navigation support

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No frameworks, pure JavaScript for performance
- **GLightbox**: Lightweight lightbox for image galleries
- **Font Awesome**: Icon library
- **Google Fonts**: Playfair Display and Poppins fonts

## 📁 Project Structure

```
ShadiyaPortfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── styles.css      # Main stylesheet
│   │   └── animations.css  # Animation definitions
│   ├── js/
│   │   ├── main.js         # Core functionality
│   │   └── animations.js   # Animation handlers
│   └── images/
│       ├── profile/        # Profile images
│       └── projects/       # Project images
├── Data/                   # Source files and documents
├── favicon.ico            # Website favicon
├── README.md              # This file
└── .gitignore            # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for testing)

### Installation

1. Clone or download this repository
2. Replace the placeholder profile image:
   - Add your profile photo to `assets/images/profile/`
   - Update the image path in `index.html`

3. Customize content:
   - Update personal information in `index.html`
   - Add social media links
   - Modify project descriptions and categories

4. Open `index.html` in your browser or serve it using a local web server

### Using a Local Web Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors

Edit CSS variables in `assets/css/styles.css`:

```css
:root {
    --primary-color: #2c5f5d;
    --accent-color: #c9a961;
    /* ... more colors */
}
```

### Fonts

Change Google Fonts in the `<head>` section of `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update CSS variables:

```css
:root {
    --font-heading: 'Your Font', serif;
    --font-body: 'Your Font', sans-serif;
}
```

### Adding Projects

Add new project cards in the Projects section of `index.html`:

```html
<div class="project-card" data-category="bedroom" data-animate>
    <div class="project-image-wrapper">
        <img src="path/to/image.jpg" 
             alt="Project description"
             class="project-image"
             loading="lazy">
        <div class="project-overlay">
            <div class="project-info">
                <h3 class="project-title">Project Name</h3>
                <p class="project-category">Category</p>
            </div>
            <a href="path/to/image.jpg" 
               class="project-view glightbox"
               data-gallery="projects">
                <i class="fas fa-search-plus"></i>
            </a>
        </div>
    </div>
</div>
```

## ⚡ Performance Optimization

### Image Optimization

1. **Compress images**: Use tools like TinyPNG or ImageOptim
2. **Use appropriate formats**: WebP with JPEG/PNG fallbacks
3. **Responsive images**: Use `srcset` for different screen sizes
4. **Lazy loading**: Images below the fold use `loading="lazy"`

### Code Optimization

- **Minify CSS/JS**: Use tools like cssnano and terser
- **Combine files**: Reduce HTTP requests
- **Use CDN**: For libraries like Font Awesome and GLightbox
- **Enable caching**: Configure server caching headers

### Performance Tips

```bash
# Minify CSS
npx cssnano assets/css/styles.css assets/css/styles.min.css

# Minify JavaScript
npx terser assets/js/main.js -o assets/js/main.min.js
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Alt text for all images
- Skip to content link
- Focus visible states
- Reduced motion support

## 📈 SEO Optimization

- Semantic HTML5 elements
- Meta tags (description, keywords, author)
- Open Graph tags for social media
- Proper heading hierarchy
- Alt text for images
- Descriptive link text
- Fast loading times
- Mobile-friendly design

## 🔒 Security

- No external form submission (customize as needed)
- Input validation and sanitization
- HTTPS recommended for production
- Content Security Policy headers

## 📝 Contact Form Integration

The contact form currently simulates submission. To integrate with a backend:

1. **Email Service** (Formspree, EmailJS):
```javascript
fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
```

2. **Custom Backend**:
```javascript
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
})
```

3. **Netlify Forms**: Add `data-netlify="true"` to form element

## 🚢 Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch and folder
4. Save and wait for deployment

### Netlify

1. Connect GitHub repository
2. Configure build settings (if any)
3. Deploy

### Vercel

```bash
npx vercel
```

### Traditional Hosting

1. Upload all files via FTP
2. Ensure `index.html` is in root directory
3. Configure server (Apache, Nginx)

## 🔄 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark mode
- [ ] Add testimonials section
- [ ] Integrate CMS (optional)
- [ ] Add loading screen
- [ ] Implement PWA features
- [ ] Add more project categories
- [ ] Create PDF portfolio download
- [ ] Add language switcher
- [ ] Implement search functionality

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Shadiya**
- Email: shadiyamdoff@gmail.com
- Specialization: Interior Design & 3D Visualization

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- GLightbox for image lightbox
- Design inspiration from modern portfolio websites

## 💡 Tips for Maintenance

1. **Regular Updates**: Keep libraries updated
2. **Test Regularly**: Check on different devices and browsers
3. **Backup**: Keep backups of your website
4. **Monitor Performance**: Use Google PageSpeed Insights
5. **Update Content**: Keep portfolio fresh with new projects
6. **Check Links**: Ensure all links work properly
7. **Security**: Keep contact form secure with validation

## 📞 Support

For questions or support, contact: shadiyamdoff@gmail.com

---

**Transforming Spaces, Crafting Dreams** ✨

