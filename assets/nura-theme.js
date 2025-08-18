// Nura Theme JS - minimal, fokus på UX
(function(){
  function qs(sel, ctx){ return (ctx||document).querySelector(sel); }
  function qsa(sel, ctx){ return Array.prototype.slice.call((ctx||document).querySelectorAll(sel)); }

  document.addEventListener('DOMContentLoaded', function(){
    // Sticky header shadow
    var header = qs('.site-header');
    if (header){
      var lastY = 0; var ticking = false;
      function onScroll(){
        if (!ticking){
          window.requestAnimationFrame(function(){
            var y = window.scrollY || window.pageYOffset;
            header.style.boxShadow = y > 2 ? '0 2px 12px rgba(0,0,0,0.35)' : 'none';
            lastY = y; ticking = false;
          });
          ticking = true;
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Mobile nav toggle
    var burger = qs('[data-nav-toggle]');
    var nav = qs('[data-nav]');
    if (burger && nav){
      burger.addEventListener('click', function(){
        var isOpen = nav.getAttribute('data-open') === 'true';
        nav.setAttribute('data-open', String(!isOpen));
        document.body.style.overflow = !isOpen ? 'hidden' : '';
      });
    }

    // Smooth anchors
    qsa('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){
        var id = a.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if (el){ e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  });
})();


