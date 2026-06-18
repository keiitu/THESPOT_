// Contact form validation and Ajax sybmission
$(document).ready(function() {

  const form = $('#contactForm');
  if (form.length === 0) return;

  // jQuery Validation Rules
  form.validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 50
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true,
        minlength: 3,
        maxlength: 100
      },
      message: {
        required: true,
        minlength: 10,
        maxlength: 500
      }
    },
    messages: {
      name: {
        required: 'Please enter your name',
        minlength: 'Name must be at least 2 characters',
        maxlength: 'Name cannot exceed 50 characters'
      },
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      subject: {
        required: 'Please enter a subject',
        minlength: 'Subject must be at least 3 characters',
        maxlength: 'Subject cannot exceed 100 characters'
      },
      message: {
        required: 'Please enter your message',
        minlength: 'Message must be at least 10 characters',
        maxlength: 'Message cannot exceed 500 characters'
      }
    },
    errorElement: 'span',
    errorPlacement: function(error, element) {
      error.addClass('error-message');
      error.css({
        'color': '#ff6b6b',
        'font-size': '0.85rem',
        'display': 'block',
        'margin-top': '4px'
      });
      element.after(error);
    },
    submitHandler: function(form) {
      // Disable submit button to prevent double submission
      const submitBtn = $(form).find('button[type="submit"]');
      submitBtn.prop('disabled', true).text('Sending...');

      // Simulate AJAX submission (replace with actual fetch/AJAX)
      setTimeout(function() {
        // Success message
        const feedback = $('#formFeedback');
        if (feedback.length === 0) {
          // Create feedback element if it doesn't exist
          const feedbackEl = $('<div id="formFeedback"></div>');
          $(form).prepend(feedbackEl);
        }
        $('#formFeedback')
          .html('Thank you! Your message has been sent successfully.')
          .css({
            'color': '#51cf66',
            'padding': '12px',
            'background': 'rgba(81, 207, 102, 0.1)',
            'border-radius': '8px',
            'margin-bottom': '16px'
          })
          .show();

        // Reset form
        form.reset();

        // Re-enable submit button
        submitBtn.prop('disabled', false).text('Send Message');

        // Hide feedback after 10 seconds
        setTimeout(function() {
          $('#formFeedback').fadeOut('slow');
        }, 10000);

      }, 1500);

      return false;
    }
  });

  // Character Counter for Message Field
  const messageField = $('#message');
  if (messageField.length > 0) {
    const counter = $('<span class="char-counter" style="font-size:0.8rem; opacity:0.7; display:block; text-align:right;"></span>');
    messageField.after(counter);

    messageField.on('input', function() {
      const length = $(this).val().length;
      const max = 500;
      counter.text(length + '/' + max + ' characters');
      if (length > max) {
        counter.css('color', '#ff6b6b');
      } else {
        counter.css('color', '#e0e0ff');
      }
    });

    // Trigger on load
    messageField.trigger('input');
  }
});