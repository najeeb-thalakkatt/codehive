/* JavaScript for CodeHive Material Design Website */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFormValidation();
    initializeAnimations();
    setActiveNavItem();
});

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const expanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', expanded);
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
            }
        });
    }
}

/**
 * Set active navigation item based on current page
 */
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Initialize form validation
 */
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!validateForm(form)) {
                event.preventDefault();
            }
        });

        // Real-time validation on input blur
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(input);
            });

            input.addEventListener('input', function() {
                clearFieldError(input);
            });
        });
    });
}

/**
 * Validate entire form
 * @param {HTMLFormElement} form - The form to validate
 * @returns {boolean} - True if form is valid
 */
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

/**
 * Validate individual field
 * @param {HTMLInputElement} field - The field to validate
 * @returns {boolean} - True if field is valid
 */
function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const isRequired = field.hasAttribute('required');
    let isValid = true;
    let errorMessage = '';

    // Clear previous errors
    clearFieldError(field);

    // Required field validation
    if (isRequired && !value) {
        errorMessage = 'This field is required.';
        isValid = false;
    }
    // Email validation
    else if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address.';
            isValid = false;
        }
    }
    // Phone validation (basic)
    else if (fieldType === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            errorMessage = 'Please enter a valid phone number.';
            isValid = false;
        }
    }
    // Name validation (minimum 2 characters)
    else if (field.name === 'name' && value && value.length < 2) {
        errorMessage = 'Name must be at least 2 characters long.';
        isValid = false;
    }
    // Message validation (minimum 10 characters)
    else if (field.name === 'message' && value && value.length < 10) {
        errorMessage = 'Message must be at least 10 characters long.';
        isValid = false;
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

/**
 * Show error message for a field
 * @param {HTMLInputElement} field - The field with error
 * @param {string} message - Error message to display
 */
function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.form-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

/**
 * Clear error message for a field
 * @param {HTMLInputElement} field - The field to clear error from
 */
function clearFieldError(field) {
    field.classList.remove('error');
    
    const errorElement = field.parentNode.querySelector('.form-error');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

/**
 * Initialize scroll animations
 */
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.card, .hero');
    
    // Add fade-in class to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Utility function to show loading state on buttons
 * @param {HTMLButtonElement} button - Button to show loading state
 */
function showButtonLoading(button) {
    const originalText = button.textContent;
    button.innerHTML = '<span class="loading"></span> Processing...';
    button.disabled = true;
    button.dataset.originalText = originalText;
}

/**
 * Utility function to hide loading state on buttons
 * @param {HTMLButtonElement} button - Button to hide loading state
 */
function hideButtonLoading(button) {
    const originalText = button.dataset.originalText || 'Submit';
    button.textContent = originalText;
    button.disabled = false;
    delete button.dataset.originalText;
}

/**
 * Handle contact form submission
 * @param {Event} event - Form submit event
 */
function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (!validateForm(form)) {
        return;
    }

    // Show loading state
    showButtonLoading(submitButton);

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        hideButtonLoading(submitButton);
        showSuccessMessage('Thank you for your message! We\'ll get back to you soon.');
        form.reset();
    }, 2000);
}

/**
 * Show success message
 * @param {string} message - Success message to display
 */
function showSuccessMessage(message) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.style.cssText = `
        background-color: var(--success);
        color: white;
        padding: 16px;
        border-radius: 4px;
        margin-bottom: 24px;
        box-shadow: var(--elevation-1);
    `;
    successDiv.textContent = message;

    // Insert before form
    const form = document.querySelector('form');
    if (form) {
        form.parentNode.insertBefore(successDiv, form);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
}

/**
 * Smooth scroll to element
 * @param {string} targetId - ID of target element
 */
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Initialize tooltips (if needed)
 */
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            showTooltip(this, this.dataset.tooltip);
        });
        
        element.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}

/**
 * Show tooltip
 * @param {HTMLElement} element - Element to show tooltip for
 * @param {string} text - Tooltip text
 */
function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background-color: var(--text-primary);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
    
    setTimeout(() => {
        tooltip.style.opacity = '1';
    }, 10);
}

/**
 * Hide tooltip
 */
function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Export functions for use in other scripts if needed
window.CodeHive = {
    validateForm,
    validateField,
    showButtonLoading,
    hideButtonLoading,
    smoothScrollTo,
    showSuccessMessage
};