// Form enhancements
document.addEventListener('DOMContentLoaded', function() {

  // ----- 1. AUTO-RESIZE TEXTAREAS -----
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(function(textarea) {
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  });

  // ----- 2. LIVE VALIDATION -----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
      input.addEventListener('blur', function() { validateField(this); });
      input.addEventListener('input', function() { validateField(this); });
    });
  }

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';

    switch (field.id) {
      case 'name':
        if (value.length < 2) {
          isValid = false;
          message = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.includes('@') || !value.includes('.')) {
          isValid = false;
          message = 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (value.length < 10) {
          isValid = false;
          message = 'Message must be at least 10 characters';
        }
        break;
    }

    field.classList.remove('is-valid', 'is-invalid');
    field.classList.add(isValid ? 'is-valid' : 'is-invalid');

    let msg = field.parentElement.querySelector('.validation-message');
    if (!msg) {
      msg = document.createElement('span');
      msg.className = 'validation-message';
      field.parentElement.appendChild(msg);
    }
    msg.textContent = message;
    msg.className = 'validation-message ' + (isValid ? 'valid' : 'invalid');

    return isValid;
  }

  // ----- 3. LOADING SPINNER ON SUBMIT -----
  const submitBtns = document.querySelectorAll('.btn[type="submit"], .formsec div button, .becomeapartorvolunteer button');
  submitBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const form = this.closest('form');
      if (form && form.checkValidity()) {
        this.classList.add('btn-loading');
        this.textContent = 'Sending...';
        this.disabled = true;

        // Re-enable after timeout (simulate AJAX)
        setTimeout(() => {
          this.classList.remove('btn-loading');
          this.textContent = this.dataset.originalText || 'Send';
          this.disabled = false;
        }, 1500);
      }
    });
  });
});