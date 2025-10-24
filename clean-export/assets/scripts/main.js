/**
 * TOMMASO PICCIOLI PORTFOLIO - MAIN JAVASCRIPT
 * Clean, semantic interactions for Framer compatibility
 */

(function() {
    'use strict';

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    
    /**
     * Smooth scroll to element
     */
    function scrollToElement(element, offset = 0) {
        if (!element) return;
        
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    /**
     * Smooth scroll to section by ID
     */
    function scrollToSection(sectionId, offset = 80) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - offset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Update active navigation state
            const nav = document.querySelector('.main-navigation');
            if (nav) {
                const navLinks = nav.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        }
    }

    /**
     * Debounce function for performance
     */
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

    /**
     * Throttle function for scroll events
     */
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

    // ========================================
    // NAVIGATION FUNCTIONALITY
    // ========================================
    
    class Navigation {
        constructor() {
            this.navLinks = document.querySelectorAll('.nav-link');
            this.sections = document.querySelectorAll('section[id], header[id]');
            this.activeSection = '#home';
            this.isScrolling = false;
            
            this.init();
        }

        init() {
            this.setupClickHandlers();
            this.setupScrollSpy();
            this.setupActiveStates();
            this.setupPageLoadState();
        }

        setupClickHandlers() {
            this.navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    
                    if (targetId.startsWith('#')) {
                        this.isScrolling = true;
                        this.activeSection = targetId;
                        this.updateActiveStates();
                        
                        // Smooth scroll with offset for fixed header
                        const targetSection = document.querySelector(targetId);
                        if (targetSection) {
                            const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                        
                        // Reset scrolling flag after animation
                        setTimeout(() => {
                            this.isScrolling = false;
                        }, 1000);
                    }
                });
            });
        }

        setupScrollSpy() {
            const scrollSpyHandler = throttle(() => {
                if (this.isScrolling) return; // Don't update during programmatic scroll
                
                let currentSection = '#home';
                const scrollPosition = window.scrollY + 100; // Offset for better UX
                
                this.sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        currentSection = '#' + section.id;
                    }
                });
                
                if (currentSection !== this.activeSection) {
                    this.activeSection = currentSection;
                    this.updateActiveStates();
                }
            }, 50); // More responsive updates

            window.addEventListener('scroll', scrollSpyHandler);
        }

        setupActiveStates() {
            this.updateActiveStates();
        }

        setupPageLoadState() {
            // Check if we're coming from a project page
            const savedSection = localStorage.getItem('scrollToSection');
            if (savedSection) {
                setTimeout(() => {
                    this.scrollToSavedSection(savedSection);
                    localStorage.removeItem('scrollToSection');
                }, 100);
            }
        }

        scrollToSavedSection(sectionId) {
            const targetSection = document.querySelector(`#${sectionId}`);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                this.activeSection = `#${sectionId}`;
                this.updateActiveStates();
            }
        }

        updateActiveStates() {
            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === this.activeSection) {
                    link.classList.add('active');
                }
            });
        }
    }

    // ========================================
    // PROJECT INTERACTIONS
    // ========================================
    
    class ProjectInteractions {
        constructor() {
            this.projectCards = document.querySelectorAll('.project-card');
            this.init();
        }

        init() {
            this.setupHoverEffects();
            this.setupClickHandlers();
        }

        setupHoverEffects() {
            this.projectCards.forEach(card => {
                const image = card.querySelector('.project-image');
                const glow = card.querySelector('.project-hover-glow');
                const underline = card.querySelector('.project-underline');
                const viewLink = card.querySelector('.project-view-link');
                const borderGlow = card.querySelector('.project-border-glow');

                card.addEventListener('mouseenter', () => {
                    if (image) image.style.transform = 'scale(1.08)';
                    if (glow) glow.style.opacity = '1';
                    if (underline) underline.style.width = '85%';
                    if (viewLink) {
                        viewLink.style.opacity = '1';
                        viewLink.style.height = 'auto';
                    }
                    if (borderGlow) {
                        borderGlow.style.boxShadow = 'inset 0 0 0 1px rgba(255, 255, 255, 0.15)';
                    }
                });

                card.addEventListener('mouseleave', () => {
                    if (image) image.style.transform = 'scale(1)';
                    if (glow) glow.style.opacity = '0';
                    if (underline) underline.style.width = '40%';
                    if (viewLink) {
                        viewLink.style.opacity = '0';
                        viewLink.style.height = '0';
                    }
                    if (borderGlow) {
                        borderGlow.style.boxShadow = 'inset 0 0 0 1px rgba(255, 255, 255, 0)';
                    }
                });
            });
        }

        setupClickHandlers() {
            const bmwProject = document.querySelector('.bmw-project');
            if (bmwProject) {
                bmwProject.addEventListener('click', () => {
                    this.openProjectDetail('bmw-x3');
                });
            }
        }

        openProjectDetail(projectId) {
            // For now, we'll scroll to contact section
            // In a full implementation, this would open a modal or navigate to a detail page
            console.log(`Opening project detail for: ${projectId}`);
            scrollToSection('contattami');
        }
    }

    // ========================================
    // CONTACT INTERACTIONS
    // ========================================
    
    class ContactInteractions {
        constructor() {
            this.contactMethods = document.querySelectorAll('.contact-method');
            this.init();
        }

        init() {
            this.setupHoverEffects();
        }

        setupHoverEffects() {
            this.contactMethods.forEach(method => {
                const icon = method.querySelector('.contact-method-icon');
                const value = method.querySelector('.contact-method-value');
                const arrow = method.querySelector('.contact-method-arrow');
                const accentLine = method.querySelector('.contact-method-accent-line');
                const glow = method.querySelector('.contact-method-glow');

                method.addEventListener('mouseenter', () => {
                    if (icon) {
                        icon.style.transform = 'scale(1.1) rotate(5deg)';
                        icon.style.background = 'rgba(59, 138, 162, 0.2)';
                        icon.style.borderColor = 'rgba(174, 199, 233, 0.5)';
                    }
                    if (value) {
                        value.style.transform = 'translateX(4px)';
                        value.style.color = '#ffffff';
                    }
                    if (arrow) {
                        arrow.style.opacity = '1';
                        arrow.style.transform = 'translate(4px, -4px)';
                    }
                    if (accentLine) accentLine.style.width = '100%';
                    if (glow) glow.style.opacity = '1';
                });

                method.addEventListener('mouseleave', () => {
                    if (icon) {
                        icon.style.transform = 'scale(1) rotate(0deg)';
                        icon.style.background = '#3c434c';
                        icon.style.borderColor = 'rgba(59, 138, 162, 0.5)';
                    }
                    if (value) {
                        value.style.transform = 'translateX(0)';
                        value.style.color = 'rgba(255, 255, 255, 0.9)';
                    }
                    if (arrow) {
                        arrow.style.opacity = '0.3';
                        arrow.style.transform = 'translate(0, 0)';
                    }
                    if (accentLine) accentLine.style.width = '0%';
                    if (glow) glow.style.opacity = '0';
                });
            });
        }
    }

    // ========================================
    // ANIMATION UTILITIES
    // ========================================
    
    class AnimationUtils {
        constructor() {
            this.observerOptions = {
                threshold: 0.1,
                rootMargin: '-100px 0px -100px 0px'
            };
            
            this.init();
        }

        init() {
            this.setupIntersectionObserver();
            this.setupScrollAnimations();
        }

        setupIntersectionObserver() {
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('fade-in-up');
                        }
                    });
                }, this.observerOptions);

                // Observe elements that should animate on scroll
                const animatedElements = document.querySelectorAll('.about-text-content, .about-image-content, .projects-header, .project-card, .contact-header, .contact-message, .contact-methods');
                animatedElements.forEach(el => observer.observe(el));
            }
        }

        setupScrollAnimations() {
            const scrollHandler = throttle(() => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.hero-background-image');
                
                parallaxElements.forEach(el => {
                    const speed = 0.5;
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
            }, 16);

            window.addEventListener('scroll', scrollHandler);
        }
    }

    // ========================================
    // CTA BUTTON FUNCTIONALITY
    // ========================================
    
    function setupCTAButton() {
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', (e) => {
                e.preventDefault();
                scrollToSection('progetti');
            });
        }
    }

    // ========================================
    // SOCIAL LINKS
    // ========================================
    
    function setupSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Add analytics tracking here if needed
                console.log(`Social link clicked: ${link.getAttribute('href')}`);
            });
        });
    }

    // ========================================
    // RESPONSIVE BEHAVIOR
    // ========================================
    
    class ResponsiveBehavior {
        constructor() {
            this.isMobile = window.innerWidth <= 768;
            this.init();
        }

        init() {
            this.setupResizeHandler();
            this.adjustMobileLayout();
        }

        setupResizeHandler() {
            const resizeHandler = debounce(() => {
                this.isMobile = window.innerWidth <= 768;
                this.adjustMobileLayout();
            }, 250);

            window.addEventListener('resize', resizeHandler);
        }

        adjustMobileLayout() {
            // Adjust navigation for mobile
            if (this.isMobile) {
                document.body.classList.add('mobile-layout');
            } else {
                document.body.classList.remove('mobile-layout');
            }
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
            this.preloadImages();
            this.setupLazyLoading();
        }

        preloadImages() {
            const imageUrls = [
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=1600&fit=crop&q=90',
                'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=1600&fit=crop&q=90',
                'https://images.unsplash.com/photo-1592286927505-b0e2950e3900?w=1200&h=1600&fit=crop&q=90'
            ];

            imageUrls.forEach(url => {
                const img = new Image();
                img.src = url;
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
    // ACCESSIBILITY ENHANCEMENTS
    // ========================================
    
    class AccessibilityEnhancer {
        constructor() {
            this.init();
        }

        init() {
            this.setupKeyboardNavigation();
            this.setupFocusManagement();
            this.setupScreenReaderSupport();
        }

        setupKeyboardNavigation() {
            document.addEventListener('keydown', (e) => {
                // ESC key to close any open modals or menus
                if (e.key === 'Escape') {
                    // Close any open modals
                    console.log('ESC pressed - close modals');
                }
            });
        }

        setupFocusManagement() {
            // Ensure focus is visible and managed properly
            const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
            focusableElements.forEach(element => {
                element.addEventListener('focus', (e) => {
                    e.target.style.outline = '2px solid #aec7e9';
                    e.target.style.outlineOffset = '2px';
                });
                
                element.addEventListener('blur', (e) => {
                    e.target.style.outline = 'none';
                });
            });
        }

        setupScreenReaderSupport() {
            // Add ARIA labels and descriptions where needed
            const heroTitle = document.querySelector('.hero-title h1');
            if (heroTitle) {
                heroTitle.setAttribute('aria-label', 'Tommaso Piccioli Portfolio');
            }

            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
                card.setAttribute('aria-label', `Project ${index + 1} - Click to view details`);
            });
        }
    }

    // ========================================
    // INITIALIZATION
    // ========================================
    
    function initializeApp() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
            return;
        }

        try {
            // Initialize all components
            new Navigation();
            new ProjectInteractions();
            new ContactInteractions();
            new AnimationUtils();
            new ResponsiveBehavior();
            new PerformanceOptimizer();
            new AccessibilityEnhancer();

            // Setup additional functionality
            setupCTAButton();
            setupSocialLinks();

            // Global functions for external use (Framer compatibility)
            window.scrollToSection = scrollToSection;
            window.openProjectDetail = (projectId) => {
                console.log(`Opening project detail for: ${projectId}`);
                scrollToSection('contattami');
            };

            console.log('Portfolio initialized successfully');
        } catch (error) {
            console.error('Error initializing portfolio:', error);
        }
    }

    // Start the application
    initializeApp();

})();
