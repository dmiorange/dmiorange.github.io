const buildings = document.querySelectorAll('.building');

buildings.forEach((b, i) => {
  b.style.opacity = '0';
  b.style.transform = 'scaleY(0)';
  b.style.transition = `opacity 0.45s ease, transform 0.45s ease`;
  b.style.transitionDelay = `${0.08 + i * 0.055}s`;

  // Trigger after a short paint delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      b.style.opacity = '1';
      b.style.transform = 'scaleY(1)';
    }, 60);
  });
});


// ── Page navigation ──
const pages    = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('nav a[data-page]');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-page');

    pages.forEach(page => {
      page.classList.toggle('visible', page.id === target);
    });

    navLinks.forEach(l => l.classList.toggle('active', l === link));
  });
});