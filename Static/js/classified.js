document.addEventListener('DOMContentLoaded', () => {
    const files = {
        'project-echo': `CLASSIFIED DOCUMENT - PROJECT ECHO
Level: ULTRA RESTRICTED
Status: ACTIVE

Project Echo represents BACR's primary initiative to replicate the Parallax Event under controlled conditions. Current success rate: 0.03%

[FURTHER ACCESS RESTRICTED]
`,
        'subject-2174': `CLASSIFIED DOCUMENT - SUBJECT 2174
Status: DECEASED
Ability: Binary Blood Manipulation

Subject demonstrated unprecedented ability to convert biological material into functional computer code. Terminated during escape attempt.

[RECORD SEALED]
`,
        'parallax-event': `CLASSIFIED DOCUMENT - PARALLAX EVENT
Date: [REDACTED]
Duration: 4 minutes, 13 seconds

Initial manifestation occurred at precisely [REDACTED]. Shadow realm breaches detected at multiple sites. Estimated 80,000 individuals affected worldwide.

[DATA CORRUPTED]
`
    };

    const viewer = document.querySelector('.document-content');
    const header = document.querySelector('.document-header');

    document.querySelectorAll('.file').forEach(file => {
        file.addEventListener('click', () => {
            const fileId = file.dataset.file;
            viewer.textContent = files[fileId];
            header.textContent = file.textContent;
            
            // Add glitch effect
            viewer.style.animation = 'none';
            viewer.offsetHeight; // Trigger reflow
            viewer.style.animation = 'formGlitch 0.3s';
        });
    });
});