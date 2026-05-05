/* main.js — Navigation, Scroll-Animationen, aktiver Nav-Link */

// ── Mobile Navigation ──
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── Aktiver Nav-Link ──
const currentPath = window.location.pathname;
document.querySelectorAll('.nav__links a').forEach((link) => {
  try {
    const linkPath = new URL(link.href).pathname;
    const isHome = (currentPath === '/' || currentPath.endsWith('/index.html')) && (linkPath === '/' || linkPath.endsWith('/index.html'));
    if (isHome || (linkPath !== '/' && currentPath.endsWith(linkPath.split('/').pop()))) {
      link.setAttribute('aria-current', 'page');
    }
  } catch {
    // relative links without full URL
  }
});

// ── Scroll-Animationen (fade-in) ──
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}
