// Enquiries form - Validation and Ajax submission (+"Other" toggle)
$(document).ready(function() {

  const form = $('.becomeapartorvolunteer form');
  if (form.length === 0) return;

  //  Show/Hide "Other" Text Input
  const dropdown = form.find('select');
  const otherInput = form.find('input[placeholder="Specify if chosen other"]');

  // Initially hide the "Other" input
  otherInput.hide();

  dropdown.on('change', function() {
    if ($(this).val() === 'Other') {
      otherInput.slideDown(200);
      otherInput.prop('required', true);
    } else {
      otherInput.slideUp(200);
      otherInput.prop('required', false);
      otherInput.val('');
    }
  });

  // Form Validation
  form.validate({
    rules: {
      'Full name': {
        required: true,
        minlength: 2
      },
      'Email Address': {
        required: true,
        email: true
      },
      'I am interested in': {
        required: true
      },
      'other_specify': {
        required: {
          depends: function() {
            return dropdown.val() === 'Other';
          }
        }
      }
    },
    messages: {
      'Full name': {
        required: 'Please enter your full name',
        minlength: 'Name must be at least 2 characters'
      },
      'Email Address': {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      'I am interested in': {
        required: 'Please select an option'
      },
      'other_specify': {
        required: 'Please specify your interest'
      }
    },
    errorElement: 'span',
    errorPlacement: function(error, element) {
      error.addClass('error-message');
      error.css({
        'color': '#f01717',
        'font-size': '0.85rem',
        'display': 'block',
        'margin-top': '4px'
      });
      element.after(error);
    },
    submitHandler: function(form) {
      // Create feedback element if it doesn't exist
      let feedback = $('#enquiryFeedback');
      if (feedback.length === 0) {
        feedback = $('<div id="enquiryFeedback"></div>');
        $(form).prepend(feedback);
      }

      // Disable submit button
      const submitBtn = $(form).find('button[type="submit"]');
      if (submitBtn.length === 0) {
        // If no submit button, use the one in the form
        const btn = $(form).find('button');
        if (btn.length > 0) btn.prop('disabled', true).text('Sending...');
      } else {
        submitBtn.prop('disabled', true).text('Sending...');
      }

      // Simulate AJAX submission
      setTimeout(function() {
        feedback
          .html(' Thank you! Your enquiry has been sent.')
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
        otherInput.hide();
        dropdown.val('--Please select--');

        // Re-enable submit button
        const btn = $(form).find('button');
        btn.prop('disabled', false).text('Submit');

        // Hide feedback after 10 seconds
        setTimeout(function() {
          feedback.fadeOut('slow');
        }, 10000);

      }, 1500);

      return false;
    }
  });
});