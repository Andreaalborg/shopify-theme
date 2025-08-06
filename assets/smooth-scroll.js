class SmoothScroll {
  constructor() {
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.animateScroll();
  }
  
  bindEvents() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            this.scrollToElement(targetElement);
          }
        }
      });
    });
  }
  
  scrollToElement(element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
    
    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = this.ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    
    requestAnimationFrame(animation);
  }
  
  ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  animateScroll() {
    let currentScrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    let ease = 0.1;
    
    const updateScroll = () => {
      const diff = targetScrollY - currentScrollY;
      currentScrollY += diff * ease;
      
      document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const offset = currentScrollY * speed;
        element.style.transform = `translateY(${offset}px)`;
      });
      
      requestAnimationFrame(updateScroll);
    };
    
    window.addEventListener('scroll', () => {
      targetScrollY = window.scrollY;
    });
    
    updateScroll();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll();
});

// Lenis smooth scroll integration (optional - for even smoother scrolling)
if (typeof Lenis !== 'undefined') {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
}