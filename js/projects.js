/* ==========================================================================
   projects.js
   Handles filtering of project cards by category (All / Frontend /
   JavaScript / Web Apps). Filtering is purely client-side and works
   off each card's data-category attribute.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  function filterProjects(filter) {
    projectCards.forEach(function (card) {
      // The "coming soon" card has no category and always stays visible.
      const categories = card.dataset.category || '';
      const matches = filter === 'all' || categories.split(' ').includes(filter);
      card.classList.toggle('hidden', !matches);
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      filterProjects(button.dataset.filter);
    });
  });
});
