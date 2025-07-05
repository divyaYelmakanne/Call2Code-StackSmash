// Voice Assistant Component for StackSmash
class VoiceAssistant {
    constructor() {
        this.isListening = false;
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        this.commands = this.initializeCommands();
        this.shouldAutoRestart = true;
        this.init();
    }

    init() {
        // Initialize speech recognition
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.setupRecognition();
        } else {
            this.showUnsupportedMessage();
            this.disableVoiceButton();
        }

        // Add event listener to voice toggle button
        const voiceBtn = document.getElementById('voice-toggle');
        if (voiceBtn) {
            voiceBtn.addEventListener('click', () => this.toggleListening());
        }

        // Add keyboard shortcut (Ctrl/Cmd + Shift + V)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'V') {
                e.preventDefault();
                this.toggleListening();
            }
        });
    }

    setupRecognition() {
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        this.recognition.onstart = () => {
            this.isListening = true;
            this.updateVoiceButton();
            this.speak('Listening for commands');
        };

        this.recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase().trim();
            this.processCommand(command);
        };

        this.recognition.onerror = (event) => {
            if (event.error === 'not-allowed' || event.error === 'denied') {
                this.showUnsupportedMessage('Microphone permission denied. Please allow access.');
            } else {
                this.speak('Sorry, I did not understand that command');
            }
            this.stopListening();
        };

        this.recognition.onend = () => {
            if (this.shouldAutoRestart && this.isListening) {
                // Only auto-restart if not stopped by user
                setTimeout(() => this.startListening(), 300);
            } else {
                this.stopListening();
            }
        };
    }

    initializeCommands() {
        return {
            // Navigation commands
            'go home': () => this.navigateTo('/index.html'),
            'open home': () => this.navigateTo('/index.html'),
            'go to home': () => this.navigateTo('/index.html'),

            // Frontend navigation
            'frontend': () => this.showNotification('Frontend', 'Frontend overview coming soon!'),
            'open frontend': () => this.showNotification('Frontend', 'Frontend overview coming soon!'),
            'html': () => this.navigateTo('/Frontend/html.html'),
            'open html': () => this.navigateTo('/Frontend/html.html'),
            'learn html': () => this.navigateTo('/Frontend/html.html'),
            'css': () => this.showNotification('CSS', 'CSS course page coming soon!'),
            'open css': () => this.showNotification('CSS', 'CSS course page coming soon!'),
            'javascript': () => this.showNotification('JavaScript', 'JavaScript course page coming soon!'),
            'open javascript': () => this.showNotification('JavaScript', 'JavaScript course page coming soon!'),
            'react': () => this.showNotification('React', 'React course page coming soon!'),
            'open react': () => this.showNotification('React', 'React course page coming soon!'),

            // Backend navigation
            'backend': () => this.showNotification('Backend', 'Backend overview coming soon!'),
            'open backend': () => this.showNotification('Backend', 'Backend overview coming soon!'),
            'python': () => this.navigateTo('/Backend/python.html'),
            'open python': () => this.navigateTo('/Backend/python.html'),
            'learn python': () => this.navigateTo('/Backend/python.html'),
            'java': () => this.showNotification('Java', 'Java course page coming soon!'),
            'open java': () => this.showNotification('Java', 'Java course page coming soon!'),
            'node': () => this.showNotification('Node.js', 'Node.js course page coming soon!'),
            'open node': () => this.showNotification('Node.js', 'Node.js course page coming soon!'),
            'php': () => this.showNotification('PHP', 'PHP course page coming soon!'),
            'open php': () => this.showNotification('PHP', 'PHP course page coming soon!'),

            // Resources
            'resources': () => this.showNotification('Resources', 'Resources page coming soon!'),
            'open resources': () => this.showNotification('Resources', 'Resources page coming soon!'),

            // Code Editor
            'code editor': () => this.navigateTo('/compiler/editor.html'),
            'open editor': () => this.navigateTo('/compiler/editor.html'),
            'editor': () => this.navigateTo('/compiler/editor.html'),

            // Challenges
            'challenges': () => this.showNotification('Challenges', 'Challenges page coming soon!'),
            'open challenges': () => this.showNotification('Challenges', 'Challenges page coming soon!'),
            'start challenge': () => this.startChallenge(),
            'challenge friend': () => this.challengeFriend(),
            'share challenge': () => this.shareChallenge(),
            'open leaderboard': () => this.showNotification('Leaderboard', 'Leaderboard feature coming soon!'),

            // Lesson navigation
            'next lesson': () => this.showNotification('Next Lesson', 'Lesson navigation coming soon!'),
            'previous lesson': () => this.showNotification('Previous Lesson', 'Lesson navigation coming soon!'),

            // Dashboard
            'dashboard': () => this.showNotification('Dashboard', 'Dashboard feature coming soon!'),
            'open dashboard': () => this.showNotification('Dashboard', 'Dashboard feature coming soon!'),

            // Submit code
            'submit code': () => this.showNotification('Submit Code', 'Code submission feature coming soon!'),

            // Authentication
            'login': () => this.navigateTo('/auth/login.html'),
            'sign up': () => this.navigateTo('/auth/signup.html'),
            'my profile': () => this.navigateTo('/auth/profile.html'),
            'logout': () => this.showNotification('Logout', 'Logout feature coming soon!'),

            // Theme commands
            'dark mode': () => this.toggleDarkMode(),
            'light mode': () => this.toggleLightMode(),
            'switch theme': () => this.toggleDarkMode(),

            // Help commands
            'help': () => this.showHelp(),
            'what can you do': () => this.showHelp(),
            'commands': () => this.showHelp(),

            // Stop listening
            'stop listening': () => this.stopListening(),
            'stop': () => this.stopListening(),
            'cancel': () => this.stopListening(),

            // General navigation
            'scroll up': () => this.scrollPage('up'),
            'scroll down': () => this.scrollPage('down'),
            'go back': () => window.history.back(),
            'go forward': () => window.history.forward(),
            'refresh': () => window.location.reload()
        };
    }

    processCommand(command) {
        console.log('Processing command:', command);
        
        // Find matching command
        for (const [key, action] of Object.entries(this.commands)) {
            if (command.includes(key)) {
                this.speak(`Executing ${key}`);
                action();
                // If user says stop/cancel, do not auto-restart
                if (["stop listening","stop","cancel"].some(k=>command.includes(k))) {
                    this.shouldAutoRestart = false;
                } else {
                    this.shouldAutoRestart = true;
                }
                return;
            }
        }
        
        // No match found
        this.speak('Command not recognized. Say help for available commands');
        this.shouldAutoRestart = true;
    }

    navigateTo(path) {
        window.location.href = path;
    }

    toggleDarkMode() {
        if (window.darkModeToggle) {
            window.darkModeToggle.toggle();
            const isDark = window.darkModeToggle.isDark();
            this.speak(`Switched to ${isDark ? 'dark' : 'light'} mode`);
        }
    }

    toggleLightMode() {
        if (window.darkModeToggle) {
            window.darkModeToggle.setTheme(false);
            this.speak('Switched to light mode');
        }
    }

    startChallenge() {
        // Navigate to a random challenge or the challenge page
        this.navigateTo('/challenges/sample-challenge.html');
    }

    challengeFriend() {
        // Open WhatsApp share dialog
        const challengeText = "Join me for a coding challenge on StackSmash!";
        const encodedText = encodeURIComponent(challengeText);
        window.open(`https://wa.me/?text=${encodedText}`, '_blank');
        this.speak('Opening WhatsApp to share challenge');
    }

    shareChallenge() {
        this.challengeFriend();
    }

    showHelp() {
        const helpText = `Available commands: Navigation - go home, open HTML, learn Python. 
        Editor - open editor, code editor. 
        Theme - dark mode, light mode. 
        Challenges - start challenge, challenge friend. 
        Help - help, what can you do. 
        Stop listening - stop, cancel.`;
        
        this.speak(helpText);
        
        // Show help modal or notification
        this.showNotification('Voice Commands', helpText);
    }

    scrollPage(direction) {
        const scrollAmount = 300;
        if (direction === 'up') {
            window.scrollBy(0, -scrollAmount);
            this.speak('Scrolled up');
        } else if (direction === 'down') {
            window.scrollBy(0, scrollAmount);
            this.speak('Scrolled down');
        }
    }

    toggleListening() {
        if (this.isListening) {
            this.shouldAutoRestart = false;
            this.stopListening();
        } else {
            this.shouldAutoRestart = true;
            this.startListening();
        }
    }

    startListening() {
        if (this.recognition && !this.isListening) {
            try {
                this.recognition.start();
            } catch (e) {
                // Already started
            }
        }
    }

    stopListening() {
        if (this.recognition && this.isListening) {
            try {
                this.recognition.stop();
            } catch (e) {}
        }
        this.isListening = false;
        this.updateVoiceButton();
    }

    updateVoiceButton() {
        const voiceBtn = document.getElementById('voice-toggle');
        if (voiceBtn) {
            const icon = voiceBtn.querySelector('i');
            if (icon) {
                icon.className = this.isListening ? 'fas fa-microphone-slash' : 'fas fa-microphone';
            }
            voiceBtn.classList.toggle('bg-red-500', this.isListening);
            voiceBtn.classList.toggle('bg-green-500', !this.isListening);
            voiceBtn.setAttribute('aria-label', 
                this.isListening ? 'Stop voice commands' : 'Start voice commands'
            );
        }
    }

    disableVoiceButton() {
        const voiceBtn = document.getElementById('voice-toggle');
        if (voiceBtn) {
            voiceBtn.disabled = true;
            voiceBtn.classList.add('opacity-50', 'cursor-not-allowed');
            voiceBtn.setAttribute('aria-label', 'Voice commands not supported');
        }
    }

    showUnsupportedMessage(msg) {
        let el = document.getElementById('voice-unsupported-msg');
        if (!el) {
            el = document.createElement('div');
            el.id = 'voice-unsupported-msg';
            el.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
            document.body.appendChild(el);
        }
        el.textContent = msg || 'Voice navigation is not supported in this browser.';
        el.style.display = 'block';
        setTimeout(() => { el.style.display = 'none'; }, 6000);
    }

    speak(text) {
        if (this.synthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1;
            utterance.volume = 0.8;
            this.synthesis.speak(utterance);
        }
    }

    showNotification(title, message) {
        // Create a simple notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm';
        notification.innerHTML = `
            <h3 class="font-bold mb-2">${title}</h3>
            <p class="text-sm">${message}</p>
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }

    // Public methods
    getCommands() {
        return Object.keys(this.commands);
    }

    addCommand(phrase, action) {
        this.commands[phrase.toLowerCase()] = action;
    }
}

// Initialize voice assistant when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.voiceAssistant = new VoiceAssistant();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VoiceAssistant;
} 