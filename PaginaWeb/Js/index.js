

window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 2500,
    origin: 'bottom',
    distance: '-100px'
  });

  sr.reveal('.header-content-right', {
    duration: 2500,
    origin: 'right',
    distance: '300px'
  });

  sr.reveal('.header-btn', {
    duration: 2500,
    delay: 1000, 
    origin: 'bottom'
  });

 

  sr.reveal('.header-content-left', {
    duration: 2500,
    origin: 'left',
    distance: '300px'
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



  