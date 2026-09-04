/**
 * Moustapha Daher Center - Water Technologies Experts
 * WOW Edition Interactive Script with Typewriter Header Effect by Menuba Creative
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Generate Clean Modern Background Container
  const wowBg = document.createElement('div');
  wowBg.className = 'wow-bg-container';
  document.body.prepend(wowBg);

  // 2. Typewriter Effect for "Mustapha Daher Center" Header Title
  const titleElement = document.querySelector('.brand-title-center h1');
  if (titleElement) {
    const originalText = titleElement.textContent;
    titleElement.textContent = '';
    titleElement.style.borderRight = '3px solid #0052cc'; // Blinking cursor effect
    titleElement.style.whiteSpace = 'nowrap';
    titleElement.style.overflow = 'hidden';
    titleElement.style.display = 'inline-block';
    
    let charIndex = 0;
    function typeWriter() {
      if (charIndex < originalText.length) {
        titleElement.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 70); // Speed of typing (78ms per letter)
      } else {
        // Remove cursor or keep blinking after typing finishes
        setTimeout(() => {
          titleElement.style.borderRight = 'none';
        }, 1000);
      }
    }

    // Start typing after a short sleek delay
    setTimeout(typeWriter, 300);
  }

  // 3. Mobile Responsive Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const menuContainer = document.querySelector('.menu-container');

  if (menuToggle && menuContainer) {
    menuToggle.addEventListener('click', () => {
      menuContainer.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });
  }

  // 4. Active Navigation Link Highlighting based on Current Page
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentLocation) {
      navLinks.forEach(el => el.classList.remove('active'));
      link.classList.add('active');
    }
  });

  // 5. Direct Form Validation & WhatsApp Instant Dispatcher
  const contactForms = document.querySelectorAll('.contact-form');
  contactForms.forEach(form => {
    const whatsappBtn = form.querySelector('button[type="button"]');
    
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        let message = "Hello Moustapha Daher Center, I would like to inquire about: %0a";
        
        formData.forEach((value, key) => {
          if (value.trim() !== "") {
            message += `- *${key}*: ${value}%0a`;
          }
        });

        const phoneNumber = "9613581180";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your request has been successfully processed by Moustapha Daher Center.');
      form.reset();
    });
  });
});