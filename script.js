// ===========================================
// MOBILE MENU TOGGLE
// ===========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');
const links = document.querySelectorAll('.links a');

const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});


// ===========================================
// BACK TO TOP BUTTON
// ===========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

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
        typingSpeed = 30;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 50;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}


// ===========================================
// AI CHATBOT FUNCTIONALITY
// ===========================================

document.addEventListener('DOMContentLoaded', () => {

    // Start typing animation
    typeEffect();

    // DOM Elements
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatMinimized = document.getElementById('chat-minimized');
    const chatRestore = document.getElementById('chat-restore');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Portfolio data
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

    // Get bot response
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();

        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return "Hello! 👋 How can I help you learn more about Mariah today?";
        }

        if (message.includes('who') || message.includes('about')) {
            return `Mariah Sidney B. Bellaflor is a ${portfolioData.role}. She's a Magna Cum Laude IT graduate from PUP, focused on building inclusive, high-performance web applications.`;
        }

        if (message.includes('skill') || message.includes('tech') || message.includes('technology')) {
            return `Mariah's technical skills include: ${portfolioData.skills.slice(0, 6).join(', ')}, and more. She specializes in frontend development, backend, UI/UX, and cloud technologies.`;
        }

        if (message.includes('experience') || message.includes('work') || message.includes('job')) {
            return `Mariah currently works as a Guidewire Digital Portal Developer Associate at PwC Acceleration Center Manila (since Oct 2025). Previously, she was a Web Development Intern at Unified Internship Program Incorporated.`;
        }

        if (message.includes('project') || message.includes('portfolio')) {
            return `Mariah has worked on several projects:\n• ${portfolioData.projects[0].name} - ${portfolioData.projects[0].description}\n• ${portfolioData.projects[1].name} - ${portfolioData.projects[1].description}\n• ${portfolioData.projects[2].name} - ${portfolioData.projects[2].description}`;
        }

        if (message.includes('certification') || message.includes('certificate') || message.includes('cert')) {
            return `Mariah holds ${portfolioData.certifications.length} certifications including: ISC2 Certified in Cybersecurity, IBM Cybersecurity Specialist, Google UX Design Specialization, and Guidewire Associate – Jutro Developer.`;
        }

        if (message.includes('education') || message.includes('graduate') || message.includes('school') || message.includes('university') || message.includes('pup')) {
            return `Mariah is a Magna Cum Laude graduate from the Polytechnic University of the Philippines (PUP) with a degree in Information Technology.`;
        }

        if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('linkedin')) {
            return `You can contact Mariah at:\n• Email: ${portfolioData.contact.email}\n• LinkedIn: ${portfolioData.contact.linkedin}\n• Portfolio: ${portfolioData.contact.portfolio}`;
        }

        if (message.includes('hire') || message.includes('hiring') || message.includes('available')) {
            return "Mariah is currently working but always open to new opportunities! Feel free to reach out to her via email or LinkedIn.";
        }

        return "I'm not sure I understood that. Try asking about her skills, experience, projects, certifications, education, or how to contact her!";
    }

    // Open chat
    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatWindow.classList.remove('chat-hidden');
            chatToggle.style.display = 'none';
            chatMinimized.classList.add('minimized-hidden');
            chatInput.focus();
        });
    }

    // Minimize chat (X button) — minimizes to bar instead of hiding
    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatWindow.classList.add('chat-hidden');
            chatToggle.style.display = 'flex'; // ✅ show the toggle button again
            chatMinimized.classList.remove('minimized-hidden');
        });
    }

    // Restore from minimized bar button (↑)
    if (chatRestore) {
        chatRestore.addEventListener('click', (e) => {
            e.stopPropagation();
            chatMinimized.classList.add('minimized-hidden');
            chatWindow.classList.remove('chat-hidden');
            chatToggle.style.display = 'none';
            chatInput.focus();
        });
    }

    // Click anywhere on minimized bar to restore
    if (chatMinimized) {
        chatMinimized.addEventListener('click', () => {
            chatMinimized.classList.add('minimized-hidden');
            chatWindow.classList.remove('chat-hidden');
            chatToggle.style.display = 'none';
            chatInput.focus();
        });
    }

    // Handle form submission
    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const userMessage = chatInput.value.trim();
            if (!userMessage) return;

            addMessage(userMessage, 'user');
            chatInput.value = '';

            showTyping();

            setTimeout(() => {
                removeTyping();
                const response = getBotResponse(userMessage);
                addMessage(response, 'bot');
            }, 800);
        });
    }

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

});


