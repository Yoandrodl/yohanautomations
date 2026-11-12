// FlowPOS Landing Page Script — Yohan Automations
document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });

    // Close menu when link is clicked
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  }

  // Smooth scroll offset calculation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Dynamic Year in Footer
  const yearElement = document.querySelector('.footer-bottom p');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = `&copy; ${currentYear} Yohan Automations. All rights reserved.`;
  }
});
