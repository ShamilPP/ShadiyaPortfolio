// ==========================================
// Animations JavaScript for Shadiya Portfolio
// Intersection Observer for Scroll Animations
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Intersection Observer for Scroll Animations
    // ==========================================
    
    // Options for Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };
    
    // Callback function for Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animated class to trigger CSS animations
                entry.target.classList.add('animated');
                
                // Optional: Stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    };
    
    // Create Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // ==========================================
    // Counter Animation for Numbers
    // ==========================================
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // Observe counter elements
    const counterElements = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counterElements.forEach(element => {
        counterObserver.observe(element);
    });
    
    // ==========================================
    // Parallax Effect for Hero Section
    // ==========================================
    
    const heroSection = document.querySelector('.hero-section');
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroSection && heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // ==========================================
    // Typing Effect for Hero Title (Optional)
    // ==========================================
    
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment to enable typing effect
    /*
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const originalText = heroName.textContent;
        typeWriter(heroName, originalText, 100);
    }
    */
    
    // ==========================================
    // Mouse Parallax Effect
    // ==========================================
    
    function initMouseParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        if (parallaxElements.length === 0) return;
        
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-parallax') || 1;
                const x = mouseX * speed * 20;
                const y = mouseY * speed * 20;
                
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
    
    initMouseParallax();
    
    // ==========================================
    // Scroll Reveal Animation with Delay
    // ==========================================
    
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    // ==========================================
    // Stagger Animation for Lists/Grids
    // ==========================================
    
    function staggerAnimation(selector, delay = 100) {
        const elements = document.querySelectorAll(selector);
        
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(elements).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, index * delay);
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        elements.forEach(element => {
            staggerObserver.observe(element);
        });
    }
    
    // Apply stagger animation to skill cards
    staggerAnimation('.skill-card', 150);
    
    // Apply stagger animation to service cards
    staggerAnimation('.service-card', 150);
    
    // ==========================================
    // Image Load Animation
    // ==========================================
    
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
    
    // ==========================================
    // Project Card Hover Animation Enhancement
    // ==========================================
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            // Add subtle 3D tilt effect
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
    });
    
    // ==========================================
    // Animate Section Dividers
    // ==========================================
    
    const sectionDividers = document.querySelectorAll('.section-divider');
    
    const dividerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.transition = 'width 1s ease';
                    entry.target.style.width = '80px';
                }, 100);
                dividerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sectionDividers.forEach(divider => {
        dividerObserver.observe(divider);
    });
    
    // ==========================================
    // Smooth Scroll Progress
    // ==========================================
    
    let ticking = false;
    
    function updateScrollProgress() {
        const scrollProgress = document.getElementById('scrollProgress');
        if (!scrollProgress) return;
        
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        scrollProgress.style.width = scrolled + '%';
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollProgress);
            ticking = true;
        }
    });
    
    // ==========================================
    // Form Input Focus Animation
    // ==========================================
    
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check on page load
        if (input.value !== '') {
            input.parentElement.classList.add('focused');
        }
    });
    
    // ==========================================
    // Nav Link Active State Animation
    // ==========================================
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ==========================================
    // Button Click Wave Animation
    // ==========================================
    
    function createWave(event) {
        const button = event.currentTarget;
        const wave = document.createElement('div');
        
        wave.classList.add('wave');
        wave.style.left = event.clientX - button.offsetLeft + 'px';
        wave.style.top = event.clientY - button.offsetTop + 'px';
        
        button.appendChild(wave);
        
        setTimeout(() => {
            wave.remove();
        }, 600);
    }
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', createWave);
    });
    
    // ==========================================
    // Fade In Elements on Load
    // ==========================================
    
    window.addEventListener('load', function() {
        const fadeElements = document.querySelectorAll('.fade-in-on-load');
        fadeElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 100);
        });
    });
    
    // ==========================================
    // Skills Icon Animation on Hover
    // ==========================================
    
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.animation = 'bounce 0.8s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.animation = '';
            }
        });
    });
    
    // ==========================================
    // Performance: Throttle Function
    // ==========================================
    
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // ==========================================
    // Reduce Motion for Accessibility
    // ==========================================
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable all animations
        document.documentElement.style.setProperty('--transition-fast', '0s');
        document.documentElement.style.setProperty('--transition-base', '0s');
        document.documentElement.style.setProperty('--transition-slow', '0s');
        
        // Remove animation classes
        document.querySelectorAll('[data-animate]').forEach(element => {
            element.classList.add('animated');
        });
    }
    
    // ==========================================
    // Console Art
    // ==========================================
    
    const consoleArt = `
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║         Shadiya Portfolio             ║
    ║    Interior Design & Visualization    ║
    ║                                       ║
    ║   Transforming Spaces, Crafting Dreams ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
    `;
    
    console.log(consoleArt);
    console.log('%c🎨 Design by Shadiya | Built with ❤️', 'font-size: 12px; color: #2c5f5d;');
    
});

// ==========================================
// Export functions for use in other scripts
// ==========================================

window.portfolioAnimations = {
    observer: null,
    animateCounter: function(element, target, duration) {
        // Counter animation function available globally
    }
};
