document.addEventListener('DOMContentLoaded', function() {
  
  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Animate on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        if (entry.target.classList.contains('stagger-animation')) {
          entry.target.classList.add('animated');
        }
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll, .stagger-animation').forEach(el => {
    observer.observe(el);
  });
  
  // Parallax effect
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
  
  // Magnetic buttons
  const magneticButtons = document.querySelectorAll('.magnetic-button');
  
  magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
  
  // Reveal text animation
  const revealTexts = document.querySelectorAll('.reveal-text');
  
  revealTexts.forEach(text => {
    const content = text.textContent;
    text.innerHTML = '';
    
    content.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${index * 0.05}s`;
      text.appendChild(span);
    });
  });
  
  // Cursor effect
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  // Add cursor styles
  const style = document.createElement('style');
  style.textContent = `
    .custom-cursor {
      width: 20px;
      height: 20px;
      border: 2px solid var(--primary-color);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      transition: transform 0.1s ease;
      z-index: 10000;
      mix-blend-mode: difference;
    }
    
    a:hover ~ .custom-cursor,
    button:hover ~ .custom-cursor {
      transform: scale(1.5);
    }
  `;
  document.head.appendChild(style);
  
});

// Page transitions
function initPageTransitions() {
  const links = document.querySelectorAll('a[href^="/"]');
  const transition = document.querySelector('.page-transition');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      
      transition.classList.add('active');
      
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
}

// Initialize on page load
window.addEventListener('load', () => {
  initPageTransitions();
});