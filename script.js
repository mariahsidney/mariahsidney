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

const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

// Portfolio data for the chatbot
const portfolioData = {
    name: "Mariah Sidney B. Bellaflor",
    role: "Guidewire Digital Portal Developer Associate at PwC Manila",
    education: "Magna Cum Laude IT graduate from Polytechnic University of the Philippines",
    skills: ["Java", "Python", "R", "PHP", "ReactJS", "TypeScript", "Tailwind CSS", "Guidewire Jutro", "Figma", "MySQL", "GCP", "WordPress"],
    experience: [
        { role: "Guidewire Digital Portal Developer Associate", company: "PwC Acceleration Center Manila", period: "Oct 2025 - Present" },
        { role: "Web Development Intern", company: "Unified Internship Program Incorporated", period: "Mar 2024 - Jul 2024" }
    ],
    projects: [
        { name: "Flood-Watch", description: "IoT capstone project for real-time flood monitoring" },
        { name: "Banana Shu", description: "E-commerce website for milk tea business" },
        { name: "SUKIECO", description: "UI/UX design project for online shopping" }
    ],
    certifications: ["ISC2 Certified in Cybersecurity", "IBM Cybersecurity Specialist", "Google UX Design Specialization", "Guidewire Associate – Jutro Developer", "Google Cloud Platform Fundamentals"],
    contact: {
        email: "mariahsidneyb@gmail.com",
        linkedin: "linkedin.com/in/mariahsidneyb",
        portfolio: "mariahsidney.vercel.app"
    }
};

// Simple keyword-based responses
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();

    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! 👋 How can I help you learn more about Mariah today?";
    }

    // About / Who
    if (message.includes('who') || message.includes('about')) {
        return `Mariah Sidney B. Bellaflor is a ${portfolioData.role}. She's a Magna Cum Laude IT graduate from PUP, focused on building inclusive, high-performance web applications.`;
    }

    // Skills
    if (message.includes('skill') || message.includes('tech') || message.includes('technology')) {
        return `Mariah's technical skills include: ${portfolioData.skills.slice(0, 6).join(', ')}, and more. She specializes in frontend development, backend, UI/UX, and cloud technologies.`;
    }

    // Experience / Work
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
        return `Mariah currently works as a Guidewire Digital Portal Developer Associate at PwC Acceleration Center Manila (since Oct 2025). Previously, she was a Web Development Intern at Unified Internship Program Incorporated.`;
    }

    // Projects
    if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
        return `Mariah has worked on several projects:\n• ${portfolioData.projects[0].name} - ${portfolioData.projects[0].description}\n• ${portfolioData.projects[1].name} - ${portfolioData.projects[1].description}\n• ${portfolioData.projects[2].name} - ${portfolioData.projects[2].description}`;
    }

    // Certifications
    if (message.includes('certification') || message.includes('certificate') || message.includes('cert')) {
        return `Mariah holds ${portfolioData.certifications.length} certifications including: ISC2 Certified in Cybersecurity, IBM Cybersecurity Specialist, Google UX Design Specialization, and Guidewire Associate – Jutro Developer.`;
    }

    // Education
    if (message.includes('education') || message.includes('graduate') || message.includes('school') || message.includes('university') || message.includes('pup')) {
        return `Mariah is a Magna Cum Laude graduate from the Polytechnic University of the Philippines (PUP) with a degree in Information Technology.`;
    }

    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('linkedin')) {
        return `You can contact Mariah at:\n• Email: ${portfolioData.contact.email}\n• LinkedIn: ${portfolioData.contact.linkedin}\n• Portfolio: ${portfolioData.contact.portfolio}`;
    }

    // Hiring / Job
    if (message.includes('hire') || message.includes('hiring') || message.includes('available') || message.includes('job')) {
        return "Mariah is currently working but always open to new opportunities! Feel free to reach out to her via email or LinkedIn.";
    }

    // Default
    return "I'm not sure I understood that. Try asking about her skills, experience, projects, certifications, education, or how to contact her!";
}

// Toggle chat window
chatToggle.addEventListener('click', () => {
    chatWindow.classList.remove('chat-hidden');
    chatToggle.style.display = 'none';
    chatInput.focus();
});

chatClose.addEventListener('click', () => {
    chatWindow.classList.add('chat-hidden');
    chatToggle.style.display = 'flex';
});

// Handle form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Add user message
    addMessage(userMessage, 'user');
    chatInput.value = '';

    // Show typing indicator
    showTyping();

    // Get response after delay (simulates AI thinking)
    setTimeout(() => {
        removeTyping();
        const response = getBotResponse(userMessage);
        addMessage(response, 'bot');
    }, 800);
});

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = `<p>${text.replace(/\n/g, '<br>')}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<p>Typing...</p>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
}
