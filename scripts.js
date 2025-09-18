/* Material Design JavaScript for CodeHive Landing Page */

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    initMobileNavigation();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Navbar scroll effect
    initNavbarScrollEffect();
    
    // Material Design ripple effects
    initRippleEffects();
    
    // Initialize animations on scroll
    initScrollAnimations();
    
    console.log('CodeHive Material Design scripts loaded successfully!');
});

/**
 * Initialize mobile navigation toggle functionality
 */
function initMobileNavigation() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = navbarNav.classList.contains('active');
            navbarToggle.setAttribute('aria-expanded', isExpanded);
            
            // Animate the hamburger icon
            const icon = navbarToggle.querySelector('.material-icons');
            if (icon) {
                icon.textContent = isExpanded ? 'close' : 'menu';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navbarNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarNav.classList.remove('active');
                navbarToggle.setAttribute('aria-expanded', 'false');
                
                const icon = navbarToggle.querySelector('.material-icons');
                if (icon) {
                    icon.textContent = 'menu';
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbarToggle.contains(event.target) && !navbarNav.contains(event.target)) {
                navbarNav.classList.remove('active');
                navbarToggle.setAttribute('aria-expanded', 'false');
                
                const icon = navbarToggle.querySelector('.material-icons');
                if (icon) {
                    icon.textContent = 'menu';
                }
            }
        });
    }
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                const headerOffset = 80; // Account for fixed navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize navbar scroll effect
 */
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow when scrolled
            if (scrollTop > 0) {
                navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)';
            } else {
                navbar.style.boxShadow = 'var(--md-elevation-2)';
            }
            
            // Hide/show navbar on scroll (optional feature)
            if (window.innerWidth > 768) { // Only on desktop
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scrolling down
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling up
                    navbar.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, { passive: true });
    }
}

/**
 * Initialize Material Design ripple effects for buttons
 */
function initRippleEffects() {
    const buttons = document.querySelectorAll('.md-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            createRipple(event, this);
        });
    });
}

/**
 * Create Material Design ripple effect
 * @param {Event} event - The click event
 * @param {Element} element - The button element
 */
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add CSS for ripple effect if not already present
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            .md-button {
                position: relative;
                overflow: hidden;
            }
            .ripple {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.3);
                pointer-events: none;
                transform: scale(0);
                animation: ripple-animation 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Initialize scroll animations for elements
 */
function initScrollAnimations() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.feature-card, .md-card, .section-header');
        animateElements.forEach(element => {
            element.classList.add('animate-ready');
            observer.observe(element);
        });
        
        // Add CSS for animations if not already present
        if (!document.querySelector('#scroll-animations')) {
            const style = document.createElement('style');
            style.id = 'scroll-animations';
            style.textContent = `
                .animate-ready {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }
            `;
            document.head.appendChild(style);
        }
    }
}

/**
 * Utility function to debounce scroll events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately
 * @returns {Function} Debounced function
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/**
 * Handle responsive behavior
 */
function handleResize() {
    const navbar = document.querySelector('.navbar');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (window.innerWidth > 768 && navbarNav) {
        navbarNav.classList.remove('active');
        if (navbar) {
            navbar.style.transform = 'translateY(0)';
        }
    }
}

// Add resize event listener with debouncing
window.addEventListener('resize', debounce(handleResize, 250), { passive: true });

/**
 * Initialize form validation (if forms are present)
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!validateForm(this)) {
                event.preventDefault();
            }
        });
        
        // Add real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    });
}

/**
 * Validate form fields
 * @param {Element} form - The form element
 * @returns {boolean} - True if form is valid
 */
function validateForm(form) {
    let isValid = true;
    const fields = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

/**
 * Validate individual field
 * @param {Element} field - The field element
 * @returns {boolean} - True if field is valid
 */
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name') || field.getAttribute('id') || 'Field';
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = `${fieldName} is required.`;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    }
    
    // Show/hide error message
    showFieldError(field, isValid ? '' : errorMessage);
    
    return isValid;
}

/**
 * Show field error message
 * @param {Element} field - The field element
 * @param {string} message - Error message
 */
function showFieldError(field, message) {
    let errorElement = field.parentNode.querySelector('.field-error');
    
    if (message) {
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.cssText = 'color: #d32f2f; font-size: 0.75rem; margin-top: 4px;';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
        field.classList.add('error');
    } else {
        if (errorElement) {
            errorElement.remove();
        }
        field.classList.remove('error');
    }
}

// Initialize form validation when DOM is loaded
document.addEventListener('DOMContentLoaded', initFormValidation);