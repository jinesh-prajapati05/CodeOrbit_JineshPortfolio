/* ==========================================================================
   main.js
   Entry-point script: wires up the hero "typed code" effect and the
   scroll-reveal animations used across the page. Other interactive
   features (theme, navigation, projects, form validation) live in
   their own dedicated files.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initTypedCode(prefersReducedMotion);
  initScrollReveal(prefersReducedMotion);
});

/**
 * Types out a short code snippet inside the hero's code-editor mockup,
 * with basic syntax-style coloring. Skips straight to the final text
 * if the user prefers reduced motion.
 */
function initTypedCode(prefersReducedMotion) {
  const target = document.getElementById('typedCode');
  if (!target) return;

  const snippetLines = [
    "const developer = {",
    "  name: \"Jinesh Prajapati\",",
    "  role: \"Web Developer\",",
    "  stack: [\"HTML5\", \"CSS3\", \"JavaScript\"],",
    "  learning: true,",
    "  status: \"Building something new\"",
    "};"
  ];
  const fullText = snippetLines.join('\n');

  if (prefersReducedMotion) {
    target.textContent = fullText;
    return;
  }

  let index = 0;
  const typingSpeedMs = 28;

  function typeNextChar() {
    if (index <= fullText.length) {
      target.textContent = fullText.slice(0, index);
      index++;
      setTimeout(typeNextChar, typingSpeedMs);
    }
  }

  typeNextChar();
}

/**
 * Reveals elements with the `.reveal` class as they scroll into view,
 * using IntersectionObserver so it stays cheap on scroll performance.
 */
function initScrollReveal(prefersReducedMotion) {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  if (prefersReducedMotion) {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(function (el) { observer.observe(el); });
}
