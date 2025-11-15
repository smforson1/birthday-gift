// ===== Smooth Scroll Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            closeMobileMenu();
        }
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        closeMobileMenu();
    }
});

// ===== Animated Stats Counter =====
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== Skill Progress Bars Animation =====
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// ===== Scroll Reveal Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger stat counter animation
            if (entry.target.classList.contains('stats-grid')) {
                statNumbers.forEach(stat => animateCounter(stat));
            }
            
            // Trigger skill bars animation
            if (entry.target.classList.contains('skills-grid')) {
                animateSkillBars();
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements
const fadeElements = document.querySelectorAll('.about-content, .stats-grid, .skills-grid, .projects-grid, .contact-content');
fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Project Filtering =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== Contact Form Validation =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(error => error.textContent = '');
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
        showError('name', 'Name is required');
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    }
    
    // Validate subject
    if (subject === '') {
        showError('subject', 'Subject is required');
        isValid = false;
    }
    
    // Validate message
    if (message === '') {
        showError('message', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    if (isValid) {
        // Show success message
        formSuccess.classList.add('show');
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.parentElement.querySelector('.form-error');
    errorElement.textContent = message;
    field.style.borderColor = '#EF4444';
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Clear error on input
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('input', function() {
        this.style.borderColor = '';
        const errorElement = this.parentElement.querySelector('.form-error');
        errorElement.textContent = '';
    });
});

// ===== Parallax Effect on Hero =====
const hero = document.querySelector('.hero');
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===== Initialize animations on page load =====
window.addEventListener('load', () => {
    // Add initial animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});