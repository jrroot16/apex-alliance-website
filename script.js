// ============================================
// Apex Alliance LLC — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Sticky nav shadow on scroll ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // --- Mobile hamburger menu ---
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__menu');
  const overlay = document.querySelector('.mobile-overlay');

  function closeMenu() {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    hamburger?.classList.add('open');
    mobileMenu?.classList.add('open');
    overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  hamburger?.addEventListener('click', () => {
    if (mobileMenu?.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay?.addEventListener('click', closeMenu);

  // Close menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // --- Project filter (projects page) ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.projects-grid .project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // --- Contact form handling ---
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.disabled = true;
      btn.style.background = '#22c55e';
      btn.style.borderColor = '#22c55e';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
        contactForm.reset();
      }, 3000);
    });
  }
});
