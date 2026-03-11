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
