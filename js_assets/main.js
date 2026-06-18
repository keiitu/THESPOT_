// Global functions
document.addEventListener('DOMContentLoaded', function(){


    // ----- 1. SCROLL-REVEAL ANIMATIONS (Intersection Observer) -----
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.2 });

        revealElements.forEach(function(el) {
            observer.observe(el);
        });
    }

    // ----- 2. STICKY NAV SHRINK ON SCROLL -----
    const header = document.querySelector('header.header');

    if (header) {
        window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        });
    }

    // ----- 3. 3D TILT HOVER EFFECT (Cards) -----
  const tiltCards = document.querySelectorAll('.realmgallerycta, .realm-card, .art-card');

  tiltCards.forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    });
  });


    // ----- 4. MOUSE-TRACKED GLOW (Background Light) -----
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', function(e) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // ----- 5. SMOOTH SCROLL FOR ANCHOR LINKS (if any) -----
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

   // ----- 6. FLOATING BLOBS (Background Orbs) -----
  const blobContainer = document.createElement('div');
  blobContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; overflow: hidden;';
  document.body.appendChild(blobContainer);

  const colors = ['rgba(124, 58, 237, 0.04)', 'rgba(74, 74, 106, 0.06)', 'rgba(224, 224, 255, 0.02)'];

  for (let i = 0; i < 4; i++) {
    const blob = document.createElement('div');
    const size = 200 + Math.random() * 300;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    blob.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${colors[i % colors.length]};
      top: ${yPos}%;
      left: ${xPos}%;
      filter: blur(60px);
      animation: blobFloat ${15 + i * 5}s ease-in-out infinite alternate;
      animation-delay: ${i * 2}s;
    `;
    blobContainer.appendChild(blob);
  }

  // Add keyframes dynamically (only once)
  if (!document.getElementById('blob-keyframes')) {
    const style = document.createElement('style');
    style.id = 'blob-keyframes';
    style.textContent = `
      @keyframes blobFloat {
        0% { transform: translate(0, 0) scale(1); }
        100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1.2); }
      }
    `;
    document.head.appendChild(style);
  }
});
