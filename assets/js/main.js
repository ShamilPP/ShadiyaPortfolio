// ==========================================
// Main JavaScript for Shadiya Portfolio
// ==========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Blocking Modal Functionality
    // ==========================================
     
    const blockModal = document.getElementById('blockModal');
    const blockModalInput = document.getElementById('blockModalInput');
    const blockModalSubmit = document.getElementById('blockModalSubmit');
    const blockModalError = document.getElementById('blockModalError');
    const correctCode = 'Broast'; // Case-insensitive check
    const body = document.body;
    
    // Show modal after 5 seconds delay on every page load
    setTimeout(() => {
        // Prevent body scroll when modal is open
        body.classList.add('modal-open');
        
        // Show modal
        blockModal.classList.add('show');
        
        // Focus on input after modal appears
        setTimeout(() => {
            blockModalInput.focus();
        }, 300);
        
        // Handle Enter key press
        blockModalInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                checkAccessCode();
            }
        });
        
        // Handle submit button click
        blockModalSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            checkAccessCode();
        });
        
        // Prevent closing modal by clicking outside or ESC key
        blockModal.addEventListener('click', function(e) {
            if (e.target === blockModal || e.target.classList.contains('block-modal-backdrop')) {
                // Do nothing - modal cannot be closed
                shakeModal();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                shakeModal();
            }
        });
        
        // Prevent right-click context menu
        blockModal.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        
        // Prevent text selection
        blockModal.style.userSelect = 'none';
        blockModal.style.webkitUserSelect = 'none';
    }, 5000); // 5 second delay
    
    function checkAccessCode() {
        const inputValue = blockModalInput.value.trim();
        
        if (inputValue.toLowerCase() === correctCode.toLowerCase()) {
            // Correct code
            blockModalError.classList.remove('show');
            blockModalError.textContent = '';
            
            // Success animation
            blockModal.querySelector('.block-modal-content').classList.add('success');
            
            // Hide modal with animation
            setTimeout(() => {
                blockModal.style.animation = 'fadeOut 0.5s ease-out forwards';
                setTimeout(() => {
                    blockModal.classList.remove('show');
                    blockModal.style.animation = '';
                    blockModal.style.display = 'none';
                    body.classList.remove('modal-open');
                }, 500);
            }, 800);
        } else {
            // Wrong code
            blockModalError.textContent = 'Invalid access code. Please try again.';
            blockModalError.classList.add('show');
            blockModalInput.value = '';
            blockModalInput.focus();
            shakeModal();
        }
    }
    
    function shakeModal() {
        const modalContent = blockModal.querySelector('.block-modal-content');
        modalContent.style.animation = 'shake 0.5s ease-out';
        setTimeout(() => {
            modalContent.style.animation = '';
        }, 500);
    }
    
    // ==========================================
    // Navigation Functionality
    // ==========================================
    
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollProgress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');
    
    // Handle scroll events for navbar
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class to navbar
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update scroll progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
        
        // Show/hide back to top button
        if (currentScroll > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
                
                // Scroll to section
                const offsetTop = targetSection.offsetTop - navbar.offsetHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveLink(this);
            }
        });
    });
    
    // Update active navigation link based on scroll position
    function updateActiveLink(clickedLink = null) {
        if (clickedLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            clickedLink.classList.add('active');
            return;
        }
        
        const scrollPos = window.pageYOffset + navbar.offsetHeight + 100;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Back to top button
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ==========================================
    // Project Filtering
    // ==========================================
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    // Show card with animation
                    card.classList.remove('hidden');
                    card.style.animation = 'scaleIn 0.5s ease-out forwards';
                } else {
                    // Hide card with animation
                    card.style.animation = 'scaleOut 0.3s ease-out forwards';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
    
    // ==========================================
    // Initialize GLightbox for Project Gallery
    // ==========================================
    
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            closeButton: true,
            closeOnOutsideClick: true,
            plyr: {
                css: 'https://cdn.plyr.io/3.6.8/plyr.css',
                js: 'https://cdn.plyr.io/3.6.8/plyr.js',
                config: {
                    ratio: '16:9',
                    muted: false,
                    hideControls: true,
                    youtube: {
                        noCookie: true,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: false,
                        portrait: false,
                        title: false,
                        speed: true,
                        transparent: false
                    }
                }
            }
        });
    }
    
    // ==========================================
    // Contact Form Validation & Submission
    // ==========================================
    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous messages
            formMessage.className = 'form-message';
            formMessage.textContent = '';
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            let isValid = true;
            
            // Name validation
            if (name === '') {
                showError('nameError', 'Please enter your name');
                isValid = false;
            } else {
                clearError('nameError');
            }
            
            // Email validation
            if (email === '') {
                showError('emailError', 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError('emailError');
            }
            
            // Message validation
            if (message === '') {
                showError('messageError', 'Please enter your message');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters');
                isValid = false;
            } else {
                clearError('messageError');
            }
            
            if (isValid) {
                // Show loading state
                const submitButton = contactForm.querySelector('.btn-submit');
                submitButton.classList.add('loading');
                submitButton.disabled = true;
                
                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // Success
                    submitButton.classList.remove('loading');
                    submitButton.disabled = false;
                    
                    formMessage.classList.add('success');
                    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formMessage.className = 'form-message';
                        formMessage.textContent = '';
                    }, 5000);
                }, 2000);
                
                // In production, you would make an API call here:
                /*
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        message: message
                    })
                })
                .then(response => response.json())
                .then(data => {
                    submitButton.classList.remove('loading');
                    submitButton.disabled = false;
                    
                    if (data.success) {
                        formMessage.classList.add('success');
                        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                        contactForm.reset();
                    } else {
                        formMessage.classList.add('error');
                        formMessage.textContent = 'Something went wrong. Please try again.';
                    }
                })
                .catch(error => {
                    submitButton.classList.remove('loading');
                    submitButton.disabled = false;
                    formMessage.classList.add('error');
                    formMessage.textContent = 'Something went wrong. Please try again.';
                });
                */
            }
        });
    }
    
    // Form validation helper functions
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }
    
    function clearError(elementId) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Real-time validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                showError('nameError', 'Please enter your name');
            } else {
                clearError('nameError');
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email === '') {
                showError('emailError', 'Please enter your email');
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address');
            } else {
                clearError('emailError');
            }
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            const message = this.value.trim();
            if (message === '') {
                showError('messageError', 'Please enter your message');
            } else if (message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters');
            } else {
                clearError('messageError');
            }
        });
    }
    
    // ==========================================
    // Lazy Loading Images
    // ==========================================
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger loading
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ==========================================
    // Smooth Scroll for All Internal Links
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - navbar.offsetHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // Preload Important Images
    // ==========================================
    
    const criticalImages = [
        'assets/images/projects/IMG-20251127-WA0200.jpg',
        'assets/images/projects/IMG-20251127-WA0201.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // ==========================================
    // Handle Keyboard Navigation
    // ==========================================
    
    document.addEventListener('keydown', function(e) {
        // Close mobile menu on Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ==========================================
    // Add ripple effect to buttons
    // ==========================================
    
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
        ripple.classList.add('ripple');
        
        const rippleElement = button.getElementsByClassName('ripple')[0];
        if (rippleElement) {
            rippleElement.remove();
        }
        
        button.appendChild(ripple);
    }
    
    const buttons = document.querySelectorAll('.btn, .filter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // ==========================================
    // Performance: Debounce scroll events
    // ==========================================
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ==========================================
    // Add animation on page load
    // ==========================================
    
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // ==========================================
    // Console message
    // ==========================================
    
    console.log('%c✨ Shadiya Portfolio ✨', 'font-size: 20px; font-weight: bold; color: #2c5f5d;');
    console.log('%cTransforming Spaces, Crafting Dreams', 'font-size: 14px; font-style: italic; color: #c9a961;');
    console.log('%cInterested in working together? Contact: shadiyamdoff@gmail.com', 'font-size: 12px; color: #4a4a4a;');
    
});

// ==========================================
// Service Worker Registration (Optional)
// ==========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        /*
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
        */
    });
}
