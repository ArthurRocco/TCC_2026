/* Initialize AOS (Animate on Scroll) */
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });
});

/* Mobile Menu Toggle */
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

/* Change Header Background on Scroll */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

/* Smooth Scroll for Anchor Links (Optional generic fallback) */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Account for fixed header height
            const headerHeight = document.querySelector('.header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
