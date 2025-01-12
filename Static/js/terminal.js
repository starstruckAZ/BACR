document.addEventListener('DOMContentLoaded', () => {
    // File System with 2174 content
    const fileSystem = {
        '/': {
            'README.txt': 'BACR TERMINAL v2.174\nACCESS LEVEL: ALPHA-3\nFor assistance contact technical support.\n\nNOTE: Recent system instabilities reported around timestamp 4:13',
            'public': {
                'news.txt': 'PUBLIC ADVISORY: Recent increases in anomalous activity.\nCitizens are advised to report any shadow-related phenomena.\nReminder: Discussion of "Displacement Underground" is prohibited.',
                'safety.txt': 'Standard containment protocols remain in effect.\nReport any physical law violations to your local BACR office.\nDO NOT ATTEMPT TO INTERACT WITH SHADOW ENTITIES.',
                'contact.txt': 'BACR CONTACT INFORMATION\n[NOTICE: All offices temporarily closed due to Protocol Echo]'
            },
            'classified': {
                'subjects': {
                    'weaver_r.dat': 'Subject: Raylyn Weaver\nStatus: WANTED\nAbility: Reality Displacement\nThreat Level: SEVERE\n\nNotes: Leader of underground resistance.\nLast confirmed sighting: [REDACTED]\nKnown associates: [FILE CORRUPTED]\n\nWARNING: Approach with extreme caution.',
                    'zhao_m.dat': 'Subject: Michael Zhao\nStatus: DECEASED(?)\nAbility: Probability Manipulation\n\nNote: Death probability calculations show inconsistencies.\nPossible temporal manipulation detected.',
                    'subject_2174.dat': '[FILE CORRUPTED BY BINARY CODE INFECTION]'
                },
                'projects': {
                    'echo.dat': '[RESTRICTED ACCESS]\nProject Echo Status: ONGOING\nSuccess Rate: 0.03%\nNote: Shadow realm activity increasing at test sites\n\nRecommendation: [REDACTED] before next 4:13 window',
                    'threshold.dat': '[FILE LOCKED]\nAccess attempted logged and reported to security'
                }
            },
            '.hidden': {
                'shadow_comms.log': '[ENCRYPTED TRANSMISSION INTERCEPTED]\n...the spaces between are getting hungry...\n...reality requires renovation...\n...the children see us now...',
                'jaron_notes.txt': 'Personal observations:\nThe boy exists in multiple states\nReality fractures follow his movements\nPossible connection to [TEXT CORRUPTED]',
                'coordinate.dat': '41°24\'12.2"N 2°10\'26.5"E\n[WARNING: DO NOT INVESTIGATE THIS LOCATION]',
                '2174_terminal.log': '[RECOVERED TERMINAL LOG - PRE-INFECTION]\nUser: Dr. Sarah Chen\nAccess Level: BETA-2\nTimestamp: [CORRUPTED]\n\nI have to be quick. Project Echo was never about replication. The shadows showed us how to do it. They want us to create more parallaxers. But why? What do they gain from...\n\n[LOG INTERRUPTED]',
                '2174_notes.dat': '[PERSONAL LOG - ENCRYPTED]\nThey keep the real data in sublevel 6. I watched them test it today. The "volunteers" - their screams when the shadow energy hit them. 0.03% survival rate. But the ones who survive... the things they can do...\n\nI have to get proof. Have to show everyone what\'s really happening here.',
                '2174_final.txt': '[FINAL RECORDED MESSAGE]\nTo whoever finds this: I did what I had to do. Converting my blood to binary was the only way to get the data out. Becoming Asset 2174 was the price.\n\nProject Echo logs attached below:\n\n[DATA CORRUPTED - BINARY INFECTION DETECTED]'
            }
        }
    };

    // Easter Eggs and Hidden Content
    const easterEggs = {
        'shadow': '[ALERT: Shadow realm breach detected in local sector]',
        '413': '[WARNING: Temporal anomaly detected - Reality stabilization required]',
        'jaron': '[ALERT: Multiple personality signatures detected in terminal vicinity]',
        'echo': '[Project Echo status: █████ing... DATA CORRUPTED]',
        'void': '[V̸̡̛O̶̼I̷͚D̴̨ ̷̢D̵͚E̷͎T̷̢E̷̢C̷̢T̷̢E̷̢D̷̢]',
        '2174': '[BINARY CODE INFECTION DETECTED IN LOCAL SYSTEM]'
    };

    // Hidden Commands with Asset 2174 sequence
    const hiddenCommands = {
        'sequence': {
            'echo_protocol': false,
            'binary_check': false,
            'asset_revealed': false
        },
        'scan': () => `
SCANNING LOCAL REALITY...
■■■■■■■■■■■ 100%
WARNING: Multiple breaches detected
- Temporal anomaly at ${Math.floor(Math.random() * 90)}°${Math.floor(Math.random() * 60)}'N
- Shadow realm breach probability: ${Math.floor(Math.random() * 30 + 70)}%
- Nearby Parallaxer signatures: ${Math.floor(Math.random() * 5 + 1)}
[WARNING: Reality stabilization recommended]`,

        'decrypt': () => `
ATTEMPTING DECRYPTION...
■■■■■■□□□□□ 47%
[ERROR: UNAUTHORIZED ACCESS DETECTED]
...recovering fragments...
...${getRandomFragment()}...`,

        'analyze': () => `
TEMPORAL ANALYSIS IN PROGRESS...
Next 4:13 window: [CALCULATION ERROR]
Timeline stability: COMPROMISED
Reality fractures detected: ${Math.floor(Math.random() * 10 + 3)}
Shadow realm bleed: ACTIVE`,

        'protocol': (args) => {
            if (args.includes('echo')) {
                hiddenCommands.sequence.echo_protocol = true;
                return `
[PROTOCOL ECHO INITIATED]
WARNING: Accessing classified Project Echo data requires additional authentication
Hint: Check binary status...`;
            }
            return 'Protocol not recognized.';
        },

        'binary': (args) => {
            if (hiddenCommands.sequence.echo_protocol && args.includes('status')) {
                hiddenCommands.sequence.binary_check = true;
                return `
[BINARY CONVERSION DETECTED]
DNA to data conversion process recognized
Asset 2174 genetic key accepted
Retrieving hidden logs...

Type 'reveal 2174' to access encrypted files`;
            }
            return 'Binary analysis failed.';
        },

        'reveal': (args) => {
            if (hiddenCommands.sequence.binary_check && args.includes('2174')) {
                hiddenCommands.sequence.asset_revealed = true;
                return `
[ACCESSING ASSET 2174 LOGS]
■■■■■■■■■■■ 100%
Three encrypted files found:
- 2174_terminal.log
- 2174_notes.dat
- 2174_final.txt

Use 'cat' command to read files from .hidden directory`;
            }
            return 'Nothing to reveal.';
        }
    };

    // Helper Functions
    function getRandomFragment() {
        const fragments = [
            "the children see through the spaces...",
            "Project Echo was their blueprint...",
            "reality is just their scaffolding...",
            "they were here before time...",
            "Jaron wasn't the first to fragment...",
            "the spaces between are hungry...",
            "4:13 wasn't when they arrived...",
            "parallel Earths are their testing grounds...",
            "Asset 2174 knew the truth...",
            "the binary infection was intentional..."
        ];
        return fragments[Math.floor(Math.random() * fragments.length)];
    }

    let currentDirectory = '/';
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('output');

    function writeOutput(text, className = '') {
        const p = document.createElement('p');
        p.textContent = text;
        if (className) p.className = className;
        output.appendChild(p);
        output.scrollTop = output.scrollHeight;
    }

    function handleCommand(command) {
        const args = command.toLowerCase().split(' ');
        const cmd = args[0];

        writeOutput(`>> ${command}`);

        switch(cmd) {
            case 'help':
                writeOutput(`
Available Commands:
----------------------------------------
help                - Display this help message
clear              - Clear terminal screen
ls                 - List directory contents
cd <directory>     - Change directory
cat <filename>     - Display file contents

[WARNING: Some commands may trigger reality stabilization protocols]`);
                break;

            case 'clear':
                const initialContent = output.innerHTML.split('<p>TYPE')[0];
                output.innerHTML = initialContent + '<p>TYPE \'help\' FOR AVAILABLE COMMANDS</p>';
                break;

            case 'ls':
                const dir = args[1] ? getDirectory(args[1]) : getDirectory(currentDirectory);
                if (!dir) {
                    writeOutput('Directory not found', 'error');
                    return;
                }
                Object.keys(dir).forEach(name => {
                    if (name !== '.hidden' || hiddenCommands.sequence.asset_revealed) {
                        const isDir = typeof dir[name] === 'object';
                        writeOutput(`${isDir ? '📁' : '📄'} ${name}`);
                    }
                });
                break;

            case 'cd':
                if (args.length < 2) {
                    currentDirectory = '/';
                    writeOutput('Changed to root directory');
                    return;
                }
                const newDir = getDirectory(args[1]);
                if (newDir) {
                    currentDirectory = args[1];
                    writeOutput(`Directory changed to: ${currentDirectory}`);
                } else {
                    writeOutput('Directory not found', 'error');
                }
                break;

            case 'cat':
                if (args.length < 2) {
                    writeOutput('Usage: cat <filename>', 'error');
                    return;
                }
                const dir2 = getDirectory(currentDirectory);
                if (dir2 && dir2[args[1]]) {
                    writeOutput('=====================================');
                    writeOutput(dir2[args[1]]);
                    writeOutput('=====================================');
                } else {
                    writeOutput('File not found', 'error');
                }
                break;

            default:
                // Check for hidden commands
                if (hiddenCommands[cmd]) {
                    writeOutput(hiddenCommands[cmd](args), 'classified');
                    return;
                }

                // Check for Easter eggs
                for (const [trigger, message] of Object.entries(easterEggs)) {
                    if (command.toLowerCase().includes(trigger)) {
                        writeOutput(message, 'warning');
                        return;
                    }
                }

                writeOutput('Command not recognized. Type \'help\' for available commands.');
                break;
        }
    }

    function getDirectory(path) {
        if (path === '/') return fileSystem['/'];
        
        const parts = path.split('/').filter(p => p);
        let current = fileSystem['/'];
        
        for (const part of parts) {
            if (current[part] && typeof current[part] === 'object') {
                current = current[part];
            } else {
                return null;
            }
        }
        return current;
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            if (command) {
                handleCommand(command);
                input.value = '';
            }
        }
    });

    input.focus();

    document.querySelector('.terminal-container').addEventListener('click', () => {
        input.focus();
    });
});