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

document.addEventListener('DOMContentLoaded', typeEffect);


// ===========================================
// AI CHATBOT MODULE
// ===========================================
const ChatBot = (() => {
    // 1. Private Data
    const portfolioData = {
        name: "Mariah Sidney B. Bellaflor",
        role: "Guidewire Digital Portal Developer Associate",
        skills: ["Java", "ReactJS", "TypeScript", "Guidewire Jutro", "Figma"],
        contact: { email: "mariahsidneyb@gmail.com", linkedin: "linkedin.com/in/mariahsidneyb" }
    };

    // 2. DOM Cache
    const ui = {
        toggle: document.getElementById('chat-toggle'),
        window: document.getElementById('chat-window'),
        close: document.getElementById('chat-close'),
        form: document.getElementById('chat-form'),
        input: document.getElementById('chat-input'),
        messages: document.getElementById('chat-messages')
    };

    // 3. Methods
    const toggleChat = (isOpen) => {
        if (isOpen) {
            ui.window.classList.add('active');
            ui.toggle.classList.add('hidden');
            setTimeout(() => ui.input.focus(), 300);
        } else {
            ui.window.classList.remove('active');
            ui.toggle.classList.remove('hidden');
        }
    };

    const addMessage = (text, sender) => {
        const msg = document.createElement('div');
        msg.className = `chat-message ${sender}`;
        msg.innerHTML = `<p>${text.replace(/\n/g, '<br>')}</p>`;
        ui.messages.appendChild(msg);
        ui.messages.scrollTop = ui.messages.scrollHeight;
    };

    const getResponse = (input) => {
        const msg = input.toLowerCase();
        if (msg.includes('hi') || msg.includes('hello')) return "Hi! 👋 How can I help you today?";
        if (msg.includes('skill')) return `Mariah excels in: ${portfolioData.skills.join(', ')}.`;
        if (msg.includes('contact')) return `Email: ${portfolioData.contact.email}`;
        return "I'm not sure about that. Try asking about Mariah's skills or contact info!";
    };

    // 4. Init Listeners
    const init = () => {
        if (!ui.toggle || !ui.window) return;

        ui.toggle.addEventListener('click', () => toggleChat(true));
        ui.close.addEventListener('click', () => toggleChat(false));

        ui.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = ui.input.value.trim();
            if (!val) return;

            addMessage(val, 'user');
            ui.input.value = '';

            // Bot Thinking State
            const typing = document.createElement('div');
            typing.className = 'chat-message bot typing';
            typing.innerHTML = '<p>...</p>';
            ui.messages.appendChild(typing);

            setTimeout(() => {
                typing.remove();
                addMessage(getResponse(val), 'bot');
            }, 800);
        });
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', ChatBot.init);

