// ── script.js ──────────────────────────────────────────
// Minimal vanilla JS. No libraries. No dependencies.

// 1. Auto-fill current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Smooth-scroll polyfill for Safari (already handled by CSS scroll-behavior,
//    but this ensures the CTA buttons work on older iOS Safari)
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
