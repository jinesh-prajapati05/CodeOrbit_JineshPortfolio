/* ==========================================================================
   navigation.js
   Handles: sticky navbar background on scroll, mobile hamburger menu,
   active-link highlighting based on the visible section, and the
   back-to-top button.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTop');
  const sections = document.querySelectorAll('main section[id]');

  /* ---------- Navbar background on scroll ---------- */
  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Toggle back-to-top button visibility
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // run once on load

  /* ---------- Mobile hamburger menu ---------- */
  function toggleMobileMenu() {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  }

  function closeMobileMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
  }

  hamburger.addEventListener('click', toggleMobileMenu);

  // Close the mobile menu after a nav link is clicked
  navLinkItems.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ---------- Active nav link based on scroll position ---------- */
  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -55% 0px', // triggers when a section is roughly centered
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute('id');
      navLinkItems.forEach(function (link) {
        link.classList.toggle('active', link.dataset.section === id);
      });
    });
  }, observerOptions);

  sections.forEach(function (section) {
    // Only observe sections that also have a matching nav link
    if (document.querySelector('.nav-link[data-section="' + section.id + '"]')) {
      sectionObserver.observe(section);
    }
  });

  /* ---------- Back to top ---------- */
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
