/* ==========================================================================
   theme.js
   Handles dark/light theme switching, persistence (localStorage), and
   respecting the user's system color-scheme preference on first visit.
   ========================================================================== */

(function () {
  const STORAGE_KEY = 'portfolio-theme';
  const root = document.documentElement;

  /**
   * Determine which theme to use on load:
   * 1. A previously saved preference in localStorage, or
   * 2. The user's OS-level color-scheme preference, or
   * 3. Dark (default for this portfolio).
   */
  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) toggleBtn.setAttribute('aria-pressed', String(theme === 'light'));
  }

  // Apply theme as early as possible to avoid a flash of the wrong theme.
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', function () {
      const isLight = root.getAttribute('data-theme') === 'light';
      const nextTheme = isLight ? 'dark' : 'light';
      applyTheme(nextTheme);
      localStorage.setItem(STORAGE_KEY, nextTheme);
    });
  });
})();
