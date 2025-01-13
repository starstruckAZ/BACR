// Glitch effect function for text elements
function createGlitchEffect(text) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';
    const element = document.querySelector('.glitch-text');
    
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance of glitch
            let glitchedText = '';
            for (let i = 0; i < text.length; i++) {
                if (Math.random() < 0.1) {
                    glitchedText += chars[Math.floor(Math.random() * chars.length)];
                } else {
                    glitchedText += text[i];
                }
            }
            element.textContent = glitchedText;
            
            // Reset after short delay
            setTimeout(() => {
                element.textContent = text;
            }, 100);
        }
    }, 100);
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    createGlitchEffect('WARNING: AUTHORIZED ACCESS ONLY');
    
    const loginForm = document.getElementById('loginForm');
    const output = document.getElementById('output');

    // Add background glitch effect
    setInterval(() => {
        if (Math.random() < 0.05) { // 5% chance of background glitch
            document.body.style.backgroundColor = '#001100';
            setTimeout(() => {
                document.body.style.backgroundColor = '#000000';
            }, 50);
        }
    }, 200);

    // Handle form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Add glitch effect to form
        loginForm.style.animation = 'formGlitch 0.3s';
        
        // Remove existing cursor
        output.innerHTML = output.innerHTML.replace('<span class="cursor"></span>', '');
        
        if (username === 'agent-327' && password === 'parallax-413') {
            // Success animation and redirect
            output.innerHTML += '<br>ACCESS GRANTED<span class="cursor"></span>';
            
            // Add typing effect
            const text = 'INITIATING SECURE CONNECTION...';
            let index = 0;
            const typing = setInterval(() => {
                if (index < text.length) {
                    output.innerHTML = output.innerHTML.replace('<span class="cursor"></span>', '');
                    output.innerHTML += text.charAt(index) + '<span class="cursor"></span>';
                    index++;
                } else {
                    clearInterval(typing);
                    setTimeout(() => {
                        window.location.href = 'templates/classified.html';
                    }, 500);
                }
            }, 50);
        } else {
            // Error animation and effects
            output.innerHTML += '<br>ACCESS DENIED<span class="cursor"></span>';
            
            // Clear password field
            document.getElementById('password').value = '';
            
            // Add glitch effect for error
            const deniedMessage = document.createElement('div');
            deniedMessage.className = 'access-denied';
            deniedMessage.textContent = 'ACCESS DENIED';
            document.body.appendChild(deniedMessage);
            
            // Random character effect for error message
            let errorInterval = setInterval(() => {
                deniedMessage.textContent = 'ACCESS DENIED'.split('').map(char => 
                    Math.random() < 0.1 ? chars[Math.floor(Math.random() * chars.length)] : char
                ).join('');
            }, 50);

            // Remove error message after animation
            setTimeout(() => {
                clearInterval(errorInterval);
                deniedMessage.remove();
            }, 2000);
        }
    });

    // Add hover effects to input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (Math.random() < 0.3) { // 30% chance of glitch effect on focus
                input.style.animation = 'inputGlitch 0.3s';
            }
        });
        
        input.addEventListener('blur', () => {
            input.style.animation = 'none';
        });
    });
});