

window.addEventListener('scroll', function() {
    var menu = document.getElementById('top-menu');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });