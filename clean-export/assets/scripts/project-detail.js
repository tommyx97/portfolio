/**
 * BMW X3 PROJECT DETAIL - JAVASCRIPT
 * Interactive functionality for project detail page
 */

(function() {
    'use strict';

    // ========================================
    // PROJECT DETAIL INTERACTIONS
    // ========================================
    
    class ProjectDetailInteractions {
        constructor() {
            this.init();
        }

        init() {
            this.setupParallaxEffects();
            this.setupImageInteractions();
            this.setupScrollAnimations();
            this.setupNavigation();
        }

        setupParallaxEffects() {
            const heroImage = document.querySelector('.hero-image');
            const scrollHandler = throttle(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                
                if (heroImage) {
                    heroImage.style.transform = `translateY(${rate}px) scale(1.05)`;
                }
            }, 16);

            window.addEventListener('scroll', scrollHandler);
        }

        setupImageInteractions() {
            const images = document.querySelectorAll('.visual-image, .supporting-img, .gallery-hero-image, .gallery-item-image, .social-grid-image');
            
            images.forEach(image => {
                const container = image.closest('figure, .image-wrapper, .gallery-item-wrapper, .gallery-hero-wrapper');
                
                if (container) {
                    container.addEventListener('mouseenter', () => {
                        image.style.transform = 'scale(1.05)';
                    });
                    
                    container.addEventListener('mouseleave', () => {
                        image.style.transform = 'scale(1)';
                    });
                }
            });
        }

        setupScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '-50px 0px -50px 0px'
            };

            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('fade-in-up');
                        }
                    });
                }, observerOptions);

                // Observe sections for animations
                const animatedElements = document.querySelectorAll('.section-header, .visual-hero-image, .visual-supporting-grid, .gallery-hero, .gallery-grid, .social-grid, .cta-content');
                animatedElements.forEach(el => observer.observe(el));
            }
        }

        setupNavigation() {
            const backButton = document.querySelector('.back-button');
            const contactButton = document.querySelector('.contact-button');

            if (backButton) {
                backButton.addEventListener('click', () => {
                    goBackToPortfolio();
                });
            }

            if (contactButton) {
                contactButton.addEventListener('click', () => {
                    scrollToContact();
                });
            }
        }
    }

    // ========================================
    // NAVIGATION FUNCTIONS
    // ========================================
    
    function goBackToPortfolio() {
        // Save the section to scroll to when returning to portfolio
        localStorage.setItem('scrollToSection', 'progetti');
        
        // Navigate back to portfolio
        window.location.href = 'index.html';
    }

    function scrollToContact() {
        const ctaSection = document.querySelector('.project-cta');
        if (ctaSection) {
            ctaSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // ========================================
    // IMAGE GALLERY FUNCTIONALITY
    // ========================================
    
    class ImageGallery {
        constructor() {
            this.images = document.querySelectorAll('.visual-image, .supporting-img, .gallery-item-image, .social-grid-image');
            this.init();
        }

        init() {
            this.setupClickHandlers();
        }

        setupClickHandlers() {
            this.images.forEach(image => {
                image.addEventListener('click', () => {
                    this.openLightbox(image.src, image.alt);
                });
            });
        }

        openLightbox(src, alt) {
            // Create lightbox overlay
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox-overlay';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <img src="${src}" alt="${alt}" class="lightbox-image">
                    <div class="lightbox-caption">${alt}</div>
                </div>
            `;

            // Add lightbox styles
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;

            const content = lightbox.querySelector('.lightbox-content');
            content.style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
            `;

            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.style.cssText = `
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                z-index: 1001;
            `;

            const lightboxImage = lightbox.querySelector('.lightbox-image');
            lightboxImage.style.cssText = `
                max-width: 100%;
                max-height: 80vh;
                object-fit: contain;
            `;

            const caption = lightbox.querySelector('.lightbox-caption');
            caption.style.cssText = `
                color: white;
                text-align: center;
                margin-top: 1rem;
                font-size: 0.9rem;
                opacity: 0.8;
            `;

            document.body.appendChild(lightbox);

            // Animate in
            requestAnimationFrame(() => {
                lightbox.style.opacity = '1';
            });

            // Close handlers
            const closeLightbox = () => {
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                }, 300);
            };

            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });

            // ESC key to close
            const escHandler = (e) => {
                if (e.key === 'Escape') {
                    closeLightbox();
                    document.removeEventListener('keydown', escHandler);
                }
            };
            document.addEventListener('keydown', escHandler);
        }
    }

    // ========================================
    // PERFORMANCE OPTIMIZATIONS
    // ========================================
    
    class PerformanceOptimizer {
        constructor() {
            this.init();
        }

        init() {
            this.preloadCriticalImages();
            this.setupLazyLoading();
        }

        preloadCriticalImages() {
            const criticalImages = [
                'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/c7a920b4-7e44-4453-a217-081ad44e0cd3.jpg',
                'https://storage.googleapis.com/storage.magicpath.ai/user/298335939791556608/assets/eb5c2e18-61b3-4b08-a38d-ce851988f563.jpg'
            ];

            criticalImages.forEach(src => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = src;
                document.head.appendChild(link);
            });
        }

        setupLazyLoading() {
            if ('IntersectionObserver' in window) {
                const lazyImages = document.querySelectorAll('img[data-src]');
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            observer.unobserve(img);
                        }
                    });
                });

                lazyImages.forEach(img => imageObserver.observe(img));
            }
        }
    }

    // ========================================
    // SCROLL PROGRESS INDICATOR
    // ========================================
    
    class ScrollProgress {
        constructor() {
            this.init();
        }

        init() {
            this.createProgressBar();
            this.setupScrollHandler();
        }

        createProgressBar() {
            const progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 2px;
                background: linear-gradient(to right, #aec7e9, #8ba8d4);
                z-index: 1000;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
            this.progressBar = progressBar;
        }

        setupScrollHandler() {
            const scrollHandler = throttle(() => {
                const scrollTop = window.pageYOffset;
                const docHeight = document.body.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                
                if (this.progressBar) {
                    this.progressBar.style.width = scrollPercent + '%';
                }
            }, 16);

            window.addEventListener('scroll', scrollHandler);
        }
    }

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    
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

    // ========================================
    // INITIALIZATION
    // ========================================
    
    function initializeProjectDetail() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeProjectDetail);
            return;
        }

        try {
            // Initialize all components
            new ProjectDetailInteractions();
            new ImageGallery();
            new PerformanceOptimizer();
            new ScrollProgress();

            // Global functions for external use
            window.goBackToPortfolio = goBackToPortfolio;
            window.scrollToContact = scrollToContact;

            console.log('Project detail initialized successfully');
        } catch (error) {
            console.error('Error initializing project detail:', error);
        }
    }

    // Start the application
    initializeProjectDetail();

})();
