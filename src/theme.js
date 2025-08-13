/**
 * Theme management system with View Transitions API support
 * Handles theme persistence, system preference detection, and smooth transitions
 */

const THEME_KEY = 'th-site-theme';
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

/**
 * Get the initial theme based on stored preference or system preference
 */
export function getInitialTheme() {
  // Check if we're in the browser
  if (typeof window === 'undefined') return THEMES.LIGHT;
  
  // Check stored preference
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme && Object.values(THEMES).includes(storedTheme)) {
    return storedTheme;
  }
  
  // Fall back to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? THEMES.DARK 
    : THEMES.LIGHT;
}

/**
 * Apply theme to the document
 */
export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.content = theme === THEMES.DARK ? '#1f2937' : '#ffffff';
  }
}

/**
 * Toggle theme with View Transitions API support (graceful fallback)
 */
export async function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || getInitialTheme();
  const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  
  // Store preference
  localStorage.setItem(THEME_KEY, newTheme);
  
  // Use View Transitions API if supported
  if (document.startViewTransition) {
    const transition = document.startViewTransition(() => {
      applyTheme(newTheme);
    });
    
    try {
      await transition.finished;
    } catch (error) {
      // View Transitions API failed, but theme was still applied
      console.log('View transition failed, but theme was applied:', error);
    }
  } else {
    // Fallback: apply theme immediately
    applyTheme(newTheme);
  }
  
  return newTheme;
}

/**
 * Initialize theme system
 */
export function initializeTheme() {
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);
  
  // Listen for system theme changes
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      // Only apply system preference if no user preference is stored
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
      }
    });
  }
  
  return initialTheme;
}

export { THEMES };