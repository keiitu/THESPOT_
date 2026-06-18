// Initialising libraries
// GSAP Scroll Trigger Registration
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ----- Lightbox2 Configuration -----
if (typeof lightbox !== 'undefined') {
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'albumLabel': 'Artwork %1 of %2',
    'positionFromTop': 50,
    'fadeDuration': 300,
    'imageFadeDuration': 400
  });
}

// Typed.js (Hero Typewriter Effect)
document.addEventListener('DOMContentLoaded', function() {
  const typedElement = document.querySelector('#typed-text');
  if (typedElement && typeof Typed !== 'undefined') {
    const typed = new Typed('#typed-text', {
      strings: [
        'Art is an experience.',
        'A manifestation of the mind\'s capacity.',
        'To traverse the unknown.'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true
    });
  }

  // GSAP Animations
  if (typeof gsap !== 'undefined') {
    // Hero quote animation (fade in from below)
    gsap.from('.hero-quote, .welcome_message, .intromessage', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.2
    });

    // Realm cards stagger animation (scroll-triggered)
    const realmCards = document.querySelectorAll('.realmgallerycta, .realm-card, .art-card');
    if (realmCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
      gsap.from(realmCards, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.realmgridcta, .realmsgallery',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Service cards stagger animation
    const serviceCards = document.querySelectorAll('.servicesgrid section');
    if (serviceCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
      gsap.from(serviceCards, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.servicesgrid',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Realm gallery images fade in (individual realm pages)
    const realmImages = document.querySelectorAll('.charcoaldepthsmain section img, .digitaldreamscapesmain section img, .pigmentfieldsmain section img, .inkcorridorsmain section img, .graphitepathwaysmain section img, .watercolormain section img');
    if (realmImages.length > 0 && typeof ScrollTrigger !== 'undefined') {
      gsap.from(realmImages, {
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.charcoaldepthsmain section, .digitaldreamscapesmain section, .pigmentfieldsmain section, .inkcorridorsmain section, .graphitepathwaysmain section, .watercolormain section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }

    // Aside sections fade in
    const asideElements = document.querySelectorAll('.resource_directorycta, .jointhespotcta, .usefullinkscta');
    if (asideElements.length > 0 && typeof ScrollTrigger !== 'undefined') {
      gsap.from(asideElements, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: asideElements[0],
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }
  }
});