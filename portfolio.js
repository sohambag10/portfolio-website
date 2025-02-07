
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const expandButtons = document.querySelectorAll('.expand-btn');
expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectDetails = button.nextElementSibling;
        if (projectDetails.style.display === 'none' || projectDetails.style.display === '') {
            projectDetails.style.display = 'block';
            button.textContent = 'Show Less';
        } else {
            projectDetails.style.display = 'none';
            button.textContent = 'Learn More';
        }
    });
});


const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}


const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<span class="toggle-icon">🌞</span>';
darkModeToggle.className = 'theme-toggle';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '10px';
darkModeToggle.style.right = '10px';
darkModeToggle.style.zIndex = '1000';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('.toggle-icon');
    icon.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '🌞';
    darkModeToggle.classList.add('clicked');
    setTimeout(() => darkModeToggle.classList.remove('clicked'), 300);
});


const darkModeStyles = `
    /* Smooth transition for all theme changes */
    body {
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    body.dark-mode {
        background-color: #1a1a1a;
        color: #f0f0f0;
    }
    
    /* Theme toggle button styles */
    .theme-toggle {
        padding: 10px;
        border-radius: 50%;
        border: 2px solid #ccc;
        background: white;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .theme-toggle:hover {
        transform: scale(1.1);
    }

    .theme-toggle.clicked {
        animation: pulse 0.3s ease;
    }

    .toggle-icon {
        font-size: 20px;
        display: block;
        transition: transform 0.3s ease;
    }

    /* Pulse animation for click feedback */
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(0.9); }
        100% { transform: scale(1); }
    }

    /* Smooth transitions for other elements */
    body.dark-mode header {
        background-color: #2c2c2c;
        transition: background-color 0.3s ease;
    }
    
    body.dark-mode footer {
        background-color: #2c2c2c;
        transition: background-color 0.3s ease;
    }
    
    body.dark-mode .project {
        border-color: #444;
        transition: border-color 0.3s ease;
    }
    
    body.dark-mode input,
    body.dark-mode textarea {
        background-color: #2c2c2c;
        color: #f0f0f0;
        border-color: #444;
        transition: all 0.3s ease;
    }

    /* Dark mode button specific styles */
    body.dark-mode .theme-toggle {
        background: #2c2c2c;
        border-color: #666;
    }
`;

const styleElement = document.createElement('style');
styleElement.textContent = darkModeStyles;
document.head.appendChild(styleElement);