// Language Toggle Functionality
const languageToggle = document.getElementById('language-toggle');
const enElements = document.querySelectorAll('.lang-en');
const esElements = document.querySelectorAll('.lang-es');

languageToggle.addEventListener('change', function() {
    if (this.checked) {
        // Switch to Spanish
        enElements.forEach(el => el.style.display = 'none');
        esElements.forEach(el => el.style.display = '');
    } else {
        // Switch to English
        enElements.forEach(el => el.style.display = '');
        esElements.forEach(el => el.style.display = 'none');
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Toggle hamburger to X
    const bars = this.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                mobileMenu.click();
            }
        }
    });
});

// Add Animation on Scroll
window.addEventListener('scroll', function() {
    const hostCards = document.querySelectorAll('.host-card');
    hostCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const hostCards = document.querySelectorAll('.host-card');
    hostCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`;
    });
    
    // Trigger initial scroll event to show visible elements
    window.dispatchEvent(new Event('scroll'));
});