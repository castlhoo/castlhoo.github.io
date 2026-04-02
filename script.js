// ===== Navbar scroll effect =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// ===== Mobile menu toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('open');
  });
});

// ===== Fade-in on scroll =====
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => observer.observe(el));
