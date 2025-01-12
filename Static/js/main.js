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

document.addEventListener('DOMContentLoaded', () => {
    createGlitchEffect('WARNING: AUTHORIZED ACCESS ONLY');
    
    const loginForm = document.getElementById('login-form');
    const accessDenied = document.querySelector('.access-denied');

    // Add random glitch effects to the background
    setInterval(() => {
        if (Math.random() < 0.05) { // 5% chance of background glitch
            document.body.style.backgroundColor = '#001100';
            setTimeout(() => {
                document.body.style.backgroundColor = '#000000';
            }, 50);
        }
    }, 200);

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        // Add glitch effect to form
        loginForm.style.animation = 'formGlitch 0.3s';
        
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            
            if (data.status === 'success') {
                // Success animation
                document.body.style.animation = 'accessGranted 2s forwards';
                accessDenied.textContent = 'ACCESS GRANTED';
                accessDenied.style.color = '#33ff33';
                
                // Add typing effect to access granted message
                const text = 'INITIATING SECURE CONNECTION...';
                let index = 0;
                accessDenied.textContent = '';
                const typing = setInterval(() => {
                    if (index < text.length) {
                        accessDenied.textContent += text.charAt(index);
                        index++;
                    } else {
                        clearInterval(typing);
                        setTimeout(() => {
                            window.location.href = '/classified';
                        }, 500);
                    }
                }, 50);

            } else {
                // Error animation
                accessDenied.textContent = 'ACCESS DENIED';
                accessDenied.style.color = '#ff3333';
                accessDenied.style.animation = 'glitchText 0.5s';
                
                // Clear password field
                loginForm.querySelector('input[type="password"]').value = '';
                
                // Add additional error effects
                document.body.style.animation = 'errorFlash 0.5s';
                for (let input of loginForm.querySelectorAll('input')) {
                    input.style.animation = 'inputError 0.5s';
                }

                // Random character effect for error message
                let errorInterval = setInterval(() => {
                    accessDenied.textContent = 'ACCESS DENIED'.split('').map(char => 
                        Math.random() < 0.1 ? String.fromCharCode(33 + Math.floor(Math.random() * 93)) : char
                    ).join('');
                }, 50);

                setTimeout(() => {
                    clearInterval(errorInterval);
                    accessDenied.textContent = 'ACCESS DENIED';
                }, 2000);
            }
        } catch (error) {
            console.error('Error:', error);
            accessDenied.textContent = 'SYSTEM ERROR';
            accessDenied.style.color = '#ff3333';

            // Add glitch effect for system error
            let glitchInterval = setInterval(() => {
                accessDenied.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            }, 50);

            setTimeout(() => {
                clearInterval(glitchInterval);
                accessDenied.style.transform = 'none';
            }, 1000);
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