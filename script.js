document.addEventListener('DOMContentLoaded', () => {

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

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
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

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


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
        if (!typingText) return;
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

    typeEffect();


    // ===========================================
    // AI CHATBOT
    // ===========================================
    const chatToggle   = document.getElementById('chat-toggle');
    const chatWindow   = document.getElementById('chat-window');
    const chatClose    = document.getElementById('chat-close');
    const chatMinimized = document.getElementById('chat-minimized');
    const chatRestore  = document.getElementById('chat-restore');
    const chatForm     = document.getElementById('chat-form');
    const chatInput    = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Guard — if any element is missing, log it and stop
    if (!chatToggle || !chatWindow || !chatClose || !chatMinimized || !chatRestore || !chatForm || !chatInput || !chatMessages) {
        console.warn('Chat: one or more elements not found', {
            chatToggle, chatWindow, chatClose, chatMinimized, chatRestore, chatForm, chatInput, chatMessages
        });
        return;
    }

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

    function getBotResponse(userMessage) {
        const msg = userMessage.toLowerCase();

        if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey'))
            return "Hello! 👋 How can I help you learn more about Mariah today?";

        if (msg.includes('who') || msg.includes('about'))
            return `Mariah Sidney B. Bellaflor is a ${portfolioData.role}. She's a Magna Cum Laude IT graduate from PUP, focused on building inclusive, high-performance web applications.`;

        if (msg.includes('skill') || msg.includes('tech') || msg.includes('technology'))
            return `Mariah's technical skills include: ${portfolioData.skills.slice(0, 6).join(', ')}, and more. She specializes in frontend development, backend, UI/UX, and cloud technologies.`;

        if (msg.includes('experience') || msg.includes('work') || msg.includes('job'))
            return `Mariah currently works as a Guidewire Digital Portal Developer Associate at PwC Acceleration Center Manila (since Oct 2025). Previously, she was a Web Development Intern at Unified Internship Program Incorporated.`;

        if (msg.includes('project') || msg.includes('portfolio'))
            return `Mariah has worked on several projects:\n• ${portfolioData.projects[0].name} - ${portfolioData.projects[0].description}\n• ${portfolioData.projects[1].name} - ${portfolioData.projects[1].description}\n• ${portfolioData.projects[2].name} - ${portfolioData.projects[2].description}`;

        if (msg.includes('cert'))
            return `Mariah holds ${portfolioData.certifications.length} certifications including: ISC2 Certified in Cybersecurity, IBM Cybersecurity Specialist, Google UX Design Specialization, and Guidewire Associate – Jutro Developer.`;

        if (msg.includes('education') || msg.includes('graduate') || msg.includes('school') || msg.includes('university') || msg.includes('pup'))
            return `Mariah is a Magna Cum Laude graduate from the Polytechnic University of the Philippines (PUP) with a degree in Information Technology.`;

        if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('linkedin'))
            return `You can contact Mariah at:\n• Email: ${portfolioData.contact.email}\n• LinkedIn: ${portfolioData.contact.linkedin}\n• Portfolio: ${portfolioData.contact.portfolio}`;

        if (msg.includes('hire') || msg.includes('hiring') || msg.includes('available'))
            return "Mariah is currently working but always open to new opportunities! Feel free to reach out to her via email or LinkedIn.";

        return "I'm not sure I understood that. Try asking about her skills, experience, projects, certifications, education, or how to contact her!";
    }

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `chat-message ${sender}`;
        div.innerHTML = `<p>${text.replace(/\n/g, '<br>')}</p>`;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTyping() {
        const div = document.createElement('div');
        div.className = 'chat-message bot typing';
        div.id = 'typing-indicator';
        div.innerHTML = '<p>Typing...</p>';
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTyping() {
        const t = document.getElementById('typing-indicator');
        if (t) t.remove();
    }

    // --- OPEN: toggle button clicked ---
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.remove('chat-hidden');
        chatToggle.style.display = 'none';
        chatMinimized.classList.add('minimized-hidden');
        chatInput.focus();
    });

    // --- CLOSE: X button clicked → minimize to bar ---
    chatClose.addEventListener('click', () => {
        chatWindow.classList.add('chat-hidden');
        chatToggle.style.display = 'flex';
        chatMinimized.classList.remove('minimized-hidden');
    });

    // --- RESTORE: ↑ button inside minimized bar ---
    chatRestore.addEventListener('click', (e) => {
        e.stopPropagation();
        chatMinimized.classList.add('minimized-hidden');
        chatWindow.classList.remove('chat-hidden');
        chatToggle.style.display = 'none';
        chatInput.focus();
    });

    // --- RESTORE: click anywhere on minimized bar ---
    chatMinimized.addEventListener('click', () => {
        chatMinimized.classList.add('minimized-hidden');
        chatWindow.classList.remove('chat-hidden');
        chatToggle.style.display = 'none';
        chatInput.focus();
    });

    // --- SEND MESSAGE ---
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        addMessage(userMessage, 'user');
        chatInput.value = '';
        showTyping();

        setTimeout(() => {
            removeTyping();
            addMessage(getBotResponse(userMessage), 'bot');
        }, 800);
    });

});
