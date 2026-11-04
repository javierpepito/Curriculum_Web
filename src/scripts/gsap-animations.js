import { gsap } from 'gsap';

function initAnimations() {
  gsap.from('.hero-text-content', {
    opacity: 0,
    y: 32,
    duration: 0.9,
    delay: 0.15,
    ease: 'power3.out',
  });

  gsap.from('.hero-graphic-content', {
    opacity: 0,
    scale: 0.94,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
  });

  gsap.from('.about-section, .missions-section, .contact-section', {
    opacity: 0,
    y: 28,
    duration: 0.8,
    stagger: 0.12,
    delay: 0.35,
    ease: 'power2.out',
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations, { once: true });
} else {
  initAnimations();
}
