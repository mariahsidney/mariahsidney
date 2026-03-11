// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');
const links = document.querySelectorAll('.links a');

// Create overlay dynamically
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');

    // Update aria-expanded
    const isOpen = navLinks.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
}

// Toggle on hamburger click
hamburger.addEventListener('click', toggleMenu);

// Close on overlay click
overlay.addEventListener('click', toggleMenu);

// Close on link click
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

// Show button when user scrolls down 300px
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll to top when clicked
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===========================================
// TYPING ANIMATION
// ===========================================
const typingText = document.querySelector('.typing-text');
const phrases = [
    "Magna Cum Laude IT graduate from PUP.",
    "Guidewire Digital Portal Developer.",
    "Specializing in full-stack development.",
    "UI/UX Designer & Cybersecurity Enthusiast."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 50;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 30; // Faster when deleting
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 50; // Normal speed when typing
    }

    // Move to next character
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Finished typing, pause then delete
        isDeleting = true;
        typingSpeed = 2000; // Wait 2 seconds before deleting
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Wait 0.5 seconds before typing next
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect when page loads
document.addEventListener('DOMContentLoaded', typeEffect);
