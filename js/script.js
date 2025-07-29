// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile Menu Toggle
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger?.contains(e.target) && !navMenu?.contains(e.target)) {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Header Scroll Effect
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (header) {
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollY = currentScrollY;
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header?.offsetHeight || 80;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Countdown Timer
function startCountdown() {
    const countdownElements = {
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
        hoursMain: document.getElementById('hours-main'),
        minutesMain: document.getElementById('minutes-main'),
        secondsMain: document.getElementById('seconds-main'),
        hoursMini: document.getElementById('hours-mini'),
        minutesMini: document.getElementById('minutes-mini'),
        secondsMini: document.getElementById('seconds-mini')
    };

    // Set initial time (24 hours from now)
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Update all countdown elements
            Object.keys(countdownElements).forEach(key => {
                const element = countdownElements[key];
                if (element) {
                    if (key.includes('hours')) {
                        element.textContent = hours.toString().padStart(2, '0');
                    } else if (key.includes('minutes')) {
                        element.textContent = minutes.toString().padStart(2, '0');
                    } else if (key.includes('seconds')) {
                        element.textContent = seconds.toString().padStart(2, '0');
                    }
                }
            });
        } else {
            // Reset countdown when it reaches zero
            Object.keys(countdownElements).forEach(key => {
                const element = countdownElements[key];
                if (element) {
                    if (key.includes('hours')) {
                        element.textContent = '23';
                    } else if (key.includes('minutes')) {
                        element.textContent = '59';
                    } else if (key.includes('seconds')) {
                        element.textContent = '59';
                    }
                }
            });
        }
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Add staggered animation for grid items
            if (entry.target.parentElement?.classList.contains('products-grid') ||
                entry.target.parentElement?.classList.contains('testimonials-grid') ||
                entry.target.parentElement?.classList.contains('team-grid')) {
                
                const siblings = Array.from(entry.target.parentElement.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.1}s`;
            }
        }
    });
}, observerOptions);

// Observe elements for animation
function observeElements() {
    const animatedElements = document.querySelectorAll(`
        .product-card, .testimonial-card, .team-member, .mvv-card,
        .achievement-item, .resource-card, .contact-method, .faq-item,
        .curriculum-item, .bonus-item, .topic-item, .stat-item
    `);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Parallax Effect for Hero Section
function initParallax() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const speed = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${speed}px)`;
        });
    }
}

// Button Click Tracking (for analytics)
function trackButtonClick(buttonName, destination, value = null) {
    console.log(`Button clicked: ${buttonName} -> ${destination}`);
    
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'CTA',
            'event_label': buttonName,
            'value': value || 1
        });
    }
    
    // Facebook Pixel tracking
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: buttonName,
            value: value,
            currency: 'BRL'
        });
    }
}

// Add click tracking to CTA buttons
function initButtonTracking() {
    const ctaButtons = document.querySelectorAll(`
        .btn-primary, .btn-secondary, .btn-product, .btn-buy-now, 
        .btn-final-cta, .cta-button, .btn-submit, .btn-newsletter
    `);
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = button.textContent.trim();
            const destination = button.href || button.getAttribute('href') || 'form_submit';
            const value = button.dataset.value || null;
            trackButtonClick(buttonText, destination, value);
        });
    });
}

// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return re.test(phone);
}

// Phone mask
function applyPhoneMask(input) {
    input.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = value;
    });
}

// Form handling
function initFormHandling() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterForm);
    });
    
    // Apply phone mask to phone inputs
    const phoneInputs = document.querySelectorAll('input[type="tel"], input[name="phone"]');
    phoneInputs.forEach(applyPhoneMask);
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
    const errors = [];
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(`${field} é obrigatório`);
        }
    });
    
    // Validate email
    if (data.email && !validateEmail(data.email)) {
        errors.push('E-mail inválido');
    }
    
    // Validate phone if provided
    if (data.phone && data.phone.trim() !== '' && !validatePhone(data.phone)) {
        errors.push('Telefone inválido');
    }
    
    // Check privacy policy
    if (!data.privacy) {
        errors.push('Você deve concordar com a Política de Privacidade');
    }
    
    if (errors.length > 0) {
        alert('Erros encontrados:\n' + errors.join('\n'));
        return;
    }
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Track form submission
        trackButtonClick('Contact Form', 'form_submit');
    }, 2000);
}

function handleNewsletterForm(e) {
    e.preventDefault();
    
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Por favor, insira seu e-mail.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cadastrando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Obrigado! Você será notificado quando houver novidades.');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Track newsletter signup
        trackButtonClick('Newsletter Signup', 'newsletter');
    }, 1500);
}

// FAQ Toggle
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = question.querySelector('i');
            
            // Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentElement;
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherQuestion.querySelector('i');
                    
                    if (otherItem && otherAnswer && otherIcon) {
                        otherItem.classList.remove('active');
                        otherAnswer.style.maxHeight = '0';
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // Toggle current FAQ
            if (faqItem && answer && icon) {
                faqItem.classList.toggle('active');
                
                if (faqItem.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    answer.style.maxHeight = '0';
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });
}

// Scroll Progress Indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
        progressBar.style.width = scrollPercent + '%';
    });
}

// Floating WhatsApp Button
function createFloatingWhatsApp() {
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/5597981379363?text=Olá! Tenho interesse nos cursos do Controle do Direito';
    whatsappButton.target = '_blank';
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.innerHTML = '';  // Apenas o background da imagem bot.png
    whatsappButton.setAttribute('aria-label', 'Falar no WhatsApp');
    
    whatsappButton.addEventListener('click', () => {
        trackButtonClick('WhatsApp Float', 'whatsapp');
    });
    
    document.body.appendChild(whatsappButton);
}

// Cookie Consent (LGPD Compliance)
function createCookieConsent() {
    if (localStorage.getItem('cookieConsent')) {
        return; // Already accepted
    }
    
    const cookieConsent = document.createElement('div');
    cookieConsent.className = 'cookie-consent';
    cookieConsent.innerHTML = `
        <div class="cookie-content">
            <p>Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.</p>
            <button class="cookie-accept">Aceitar</button>
        </div>
    `;
    
    const acceptButton = cookieConsent.querySelector('.cookie-accept');
    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.transform = 'translateY(100%)';
        setTimeout(() => cookieConsent.remove(), 300);
        
        trackButtonClick('Cookie Accept', 'cookie_consent');
    });
    
    document.body.appendChild(cookieConsent);
    
    // Show cookie consent after a delay
    setTimeout(() => {
        cookieConsent.style.transform = 'translateY(0)';
    }, 1000);
}

// Video Modal functionality
function initVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const closeModal = document.querySelector('.close-modal');
    const playButtons = document.querySelectorAll('.play-button');
    
    // Open video modal
    window.openVideoModal = function(videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1') {
        if (videoModal && videoFrame) {
            videoFrame.src = videoUrl;
            videoModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            trackButtonClick('Video Play', 'video_modal');
        }
    };
    
    // Close video modal
    function closeVideoModal() {
        if (videoModal && videoFrame) {
            videoModal.style.display = 'none';
            videoFrame.src = '';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Event listeners
    closeModal?.addEventListener('click', closeVideoModal);
    
    videoModal?.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal?.style.display === 'block') {
            closeVideoModal();
        }
    });
    
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            openVideoModal();
        });
    });
}

// Purchase tracking for products
window.trackPurchase = function(productName, value) {
    console.log(`Purchase intent tracked: ${productName} - R$ ${value}`);
    
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'purchase_intent', {
            'event_category': 'ecommerce',
            'event_label': productName,
            'value': value
        });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
            content_name: productName,
            value: value,
            currency: 'BRL'
        });
    }
};

// Typing effect for hero title
function initTypingEffect() {
    const typingElements = document.querySelectorAll('[data-typing]');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        const speed = parseInt(element.dataset.speed) || 50;
        
        element.textContent = '';
        element.style.borderRight = '2px solid';
        element.style.animation = 'blink 1s infinite';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                element.style.borderRight = 'none';
                element.style.animation = 'none';
            }
        };
        
        // Start typing effect when element is visible
        const typingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeWriter, 500);
                    typingObserver.unobserve(entry.target);
                }
            });
        });
        
        typingObserver.observe(element);
    });
}

// Counter animation for statistics
function initCounterAnimation() {
    const counters = document.querySelectorAll('.achievement-number, .stat-item h3');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/\D/g, ''));
                const suffix = counter.textContent.replace(/\d/g, '');
                
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + suffix;
                    }
                }, 20);
                
                counterObserver.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initFormHandling();
    initFAQ();
    initButtonTracking();
    initVideoModal();
    
    // Visual enhancements
    observeElements();
    initParallax();
    initLazyLoading();
    initTypingEffect();
    initCounterAnimation();
    
    // UI components
    createScrollProgress();
    createFloatingWhatsApp();
    createCookieConsent();
    
    // Timers
    startCountdown();
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { border-color: transparent; }
            51%, 100% { border-color: currentColor; }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .lazy {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lazy.loaded {
            opacity: 1;
        }
        
        @media (max-width: 768px) {
            .cookie-content {
                flex-direction: column;
                text-align: center;
                gap: 1rem;
            }
            
            .whatsapp-float {
                bottom: 15px !important;
                right: 15px !important;
                width: 50px !important;
                height: 50px !important;
                font-size: 20px !important;
            }
            
            .modal-content {
                width: 95% !important;
                margin: 10% auto !important;
            }
            
            .modal-content iframe {
                height: 250px !important;
            }
        }
        
        .menu-open {
            overflow: hidden;
        }
        
        .menu-open .nav-menu {
            left: 0;
        }
    `;
    document.head.appendChild(style);
});

// Performance optimization
window.addEventListener('load', () => {
    // Remove loading class if exists
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
    
    // Preload critical images
    const criticalImages = [
        'images/hero-lawyer.jpg',
        'images/success-lawyer.jpg',
        'images/new_logo.png',
        'images/new_banner.png',
        'images/office-modern.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Initialize performance monitoring
    if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Track page load time
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                'name': 'load',
                'value': loadTime
            });
        }
    }
});

// Error handling for missing elements
window.addEventListener('error', (e) => {
    console.warn('Non-critical error:', e.message);
    
    // Track JavaScript errors
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            'description': e.message,
            'fatal': false
        });
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validatePhone,
        trackButtonClick,
        trackPurchase
    };
}

