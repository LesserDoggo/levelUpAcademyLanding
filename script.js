// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── ACTIVE NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--accent2)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// ── CONTACT FORM ──
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const original = btn.textContent;
    btn.textContent = 'Enviado! ✦';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

// ── HAMBURGER MENU ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinksList = document.querySelector('.nav-links');

if (hamburger && navLinksList) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinksList.style.display === 'flex';
    navLinksList.style.display = isOpen ? 'none' : 'flex';
    navLinksList.style.flexDirection = 'column';
    navLinksList.style.position = 'absolute';
    navLinksList.style.top = '64px';
    navLinksList.style.left = '0';
    navLinksList.style.right = '0';
    navLinksList.style.background = 'rgba(10,11,15,0.98)';
    navLinksList.style.padding = '20px 5%';
    navLinksList.style.borderBottom = '1px solid rgba(124,92,191,0.25)';
    navLinksList.style.gap = '20px';
  });

  // Close menu when a link is clicked (only on mobile)
  navLinksList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinksList.style.display = 'none';
      }
    });
  });
}
