// Dark Mode Toggle Component for StackSmash
class DarkModeToggle {
    constructor() {
        this.isDarkMode = this.getStoredPreference();
        this.init();
    }

    init() {
        // Apply initial theme
        this.applyTheme();
        
        // Add event listener to toggle button
        const toggleBtn = document.getElementById('dark-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }

        // Listen for system preference changes
        this.watchSystemPreference();
    }

    getStoredPreference() {
        const stored = localStorage.getItem('stacksmash-dark-mode');
        if (stored !== null) {
            return stored === 'true';
        }
        // Default to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    toggle() {
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        this.savePreference();
        this.updateToggleButton();
    }

    applyTheme() {
        const root = document.documentElement;
        const body = document.body;

        if (this.isDarkMode) {
            root.classList.add('dark');
            body.classList.add('dark');
            this.updateMetaThemeColor('#1f2937'); // Dark gray
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
            this.updateMetaThemeColor('#ffffff'); // White
        }

        // Update Monaco Editor theme if available
        this.updateMonacoTheme();
    }

    updateMetaThemeColor(color) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.content = color;
    }

    updateMonacoTheme() {
        if (window.monaco && window.monaco.editor) {
            const theme = this.isDarkMode ? 'vs-dark' : 'vs';
            window.monaco.editor.setTheme(theme);
        }
    }

    updateToggleButton() {
        const toggleBtn = document.getElementById('dark-toggle');
        if (toggleBtn) {
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                icon.className = this.isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
            }
            toggleBtn.setAttribute('aria-label', 
                this.isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    }

    savePreference() {
        localStorage.setItem('stacksmash-dark-mode', this.isDarkMode.toString());
    }

    watchSystemPreference() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            // Only update if user hasn't set a preference
            if (localStorage.getItem('stacksmash-dark-mode') === null) {
                this.isDarkMode = e.matches;
                this.applyTheme();
                this.updateToggleButton();
            }
        });
    }

    // Public method to get current state
    isDark() {
        return this.isDarkMode;
    }

    // Public method to set theme programmatically
    setTheme(isDark) {
        this.isDarkMode = isDark;
        this.applyTheme();
        this.savePreference();
        this.updateToggleButton();
    }
}

// Initialize dark mode toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.darkModeToggle = new DarkModeToggle();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DarkModeToggle;
} 