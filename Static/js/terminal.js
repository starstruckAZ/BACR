import React, { useState, useEffect, useRef } from 'react';

const BACRTerminal = () => {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState([]);
	const [currentDirectory, setCurrentDirectory] = useState('/');
	const [sequence, setSequence] = useState({
		echo_protocol: false,
		binary_check: false,
		asset_revealed: false
	});
	const inputRef = useRef(null);

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
					'weaver_r.dat': 'Subject: Raylyn Weaver\nStatus: WANTED\nAbility: Reality Displacement\nThreat Level: SEVERE\n\nNotes: Leader of underground resistance.\nLast confirmed sighting: [REDACTED]\nKnown associates: [FILE CORRUPTED]',
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
				'2174_terminal.log': '[RECOVERED TERMINAL LOG - PRE-INFECTION]\nAccess Level: BETA-2\nTimestamp: [CORRUPTED]\n\nI have to be quick. Project Echo was never about replication. The shadows showed us how to do it. They want us to create more parallaxers. But why? What do they gain from...\n\n[LOG INTERRUPTED]'
			}
		}
	};

	const easterEggs = {
		'shadow': '[ALERT: Shadow realm breach detected in local sector]',
		'413': '[WARNING: Temporal anomaly detected - Reality stabilization required]',
		'jaron': '[ALERT: Multiple personality signatures detected in terminal vicinity]',
		'echo': '[Project Echo status: █████ing... DATA CORRUPTED]',
		'void': '[V̸̡̛O̶̼I̷͚D̴̨ ̷̢D̵͚E̷͎T̷̢E̷̢C̷̢T̷̢E̷̢D̷̢]',
		'2174': '[BINARY CODE INFECTION DETECTED IN LOCAL SYSTEM]'
	};

	const getRandomFragment = () => {
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
	};

	const hiddenCommands = {
		'scan': () => [
			'SCANNING LOCAL REALITY...',
			'■■■■■■■■■■■ 100%',
			'WARNING: Multiple breaches detected',
			`- Temporal anomaly at ${Math.floor(Math.random() * 90)}°${Math.floor(Math.random() * 60)}'N`,
			`- Shadow realm breach probability: ${Math.floor(Math.random() * 30 + 70)}%`,
			`- Nearby Parallaxer signatures: ${Math.floor(Math.random() * 5 + 1)}`,
			'[WARNING: Reality stabilization recommended]'
		],
		'decrypt': () => [
			'ATTEMPTING DECRYPTION...',
			'■■■■■■□□□□□ 47%',
			'[ERROR: UNAUTHORIZED ACCESS DETECTED]',
			'...recovering fragments...',
			`...${getRandomFragment()}...`
		],
		'analyze': () => [
			'TEMPORAL ANALYSIS IN PROGRESS...',
			'Next 4:13 window: [CALCULATION ERROR]',
			'Timeline stability: COMPROMISED',
			`Reality fractures detected: ${Math.floor(Math.random() * 10 + 3)}`,
			'Shadow realm bleed: ACTIVE'
		],
		'protocol': (args) => {
			if (args.includes('echo')) {
				setSequence(prev => ({ ...prev, echo_protocol: true }));
				return [
					'[PROTOCOL ECHO INITIATED]',
					'WARNING: Accessing classified Project Echo data requires additional authentication',
					'Hint: Check binary status...'
				];
			}
			return ['Protocol not recognized.'];
		}
	};

	const handleCommand = (cmd) => {
		const args = cmd.toLowerCase().split(' ');
		const command = args[0];

		// Check for easter eggs first
		for (const [trigger, message] of Object.entries(easterEggs)) {
			if (cmd.toLowerCase().includes(trigger)) {
				setOutput([...output, `>> ${cmd}`, message]);
				return;
			}
		}

		// Handle hidden commands
		if (hiddenCommands[command]) {
			setOutput([...output, `>> ${cmd}`, ...hiddenCommands[command](args)]);
			return;
		}

		// Handle regular commands
		switch (command) {
			case 'help':
				setOutput([...output, `>> ${cmd}`, 
					'Available Commands:',
					'----------------------------------------',
					'help                - Display this help message',
					'clear              - Clear terminal screen',
					'ls                 - List directory contents',
					'cd <directory>     - Change directory',
					'cat <filename>     - Display file contents',
					'scan              - Scan local reality [RESTRICTED]',
					'analyze           - Perform temporal analysis',
					'decrypt           - Attempt file decryption',
					'',
					'[WARNING: Some commands may trigger reality stabilization protocols]'
				]);
				break;

			case 'clear':
				setOutput([]);
				break;

			// ... more command handling ...
		}
	};

	const bacrAscii = `
██████   █████   ██████ ██████  
██   ██ ██   ██ ██      ██   ██ 
██████  ███████ ██      ██████  
██   ██ ██   ██ ██      ██   ██ 
██████  ██   ██  ██████ ██   ██`;

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const handleInput = (e) => {
		if (e.key === 'Enter') {
			handleCommand(input);
			setInput('');
		}
	};

	return (
		<div className="bg-black text-green-500 p-4 font-mono min-h-screen w-full" onClick={() => inputRef.current?.focus()}>
			<div className="mb-8 text-center">
				<pre className="text-xl mb-2">{bacrAscii}</pre>
				<div className="text-sm">BUREAU OF ANOMALOUS CONTAINMENT AND RESEARCH</div>
				<div className="text-sm mb-4">SECURITY LEVEL: ALPHA-3</div>
				<div className="text-xs text-green-400">
					BACR TERMINAL COMMAND REFERENCE ls List files in current directory | cd Change current directory | cat Display file contents [RESTRICTED] ALPHA-3 Standard
				</div>
				<div className="text-xs text-green-400">
					file access | BETA-2 Classified documents | [RESTRICTED] OMEGA-1 Shadow Realm data WARNING: Some commands may trigger reality stabilization protocols
				</div>
				<div className="text-xs text-yellow-400 mt-1">
					[NOTE: Unauthorized access attempts will be logged and reported]
				</div>
			</div>

			<div className="mb-4">
				<div className="mb-2 text-center">BACR SECURE DATABASE</div>
				<div className="text-sm mb-4 text-center text-yellow-400">WARNING: AUTHORIZED ACCESS ONLY</div>
			</div>

			<div className="overflow-auto max-h-96 mb-4">
				{output.map((line, index) => (
					<div key={index} className="text-sm mb-1 whitespace-pre-wrap">{line}</div>
				))}
			</div>

			<div className="flex items-center">
				<span className="mr-2">&gt;&gt;</span>
				<input
					ref={inputRef}
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handleInput}
					className="bg-transparent border-none outline-none flex-1 text-green-500"
					placeholder="TYPE 'help' FOR AVAILABLE COMMANDS"
				/>
			</div>
		</div>
	);
};

export default BACRTerminal;