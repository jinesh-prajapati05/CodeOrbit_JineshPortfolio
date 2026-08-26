/* ==========================================================================
   validation.js
   Client-side validation for the contact form. There is no backend or
   email service wired up here, so a successful submission simply shows
   a confirmation message. Replace handleSubmit's success branch with a
   real fetch() call to your backend / email service when one exists.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name: { input: document.getElementById('name'), error: document.getElementById('nameError') },
    email: { input: document.getElementById('email'), error: document.getElementById('emailError') },
    subject: { input: document.getElementById('subject'), error: document.getElementById('subjectError') },
    message: { input: document.getElementById('message'), error: document.getElementById('messageError') }
  };
  const statusEl = document.getElementById('formStatus');

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MIN_MESSAGE_LENGTH = 15;

  function setError(field, message) {
    field.input.classList.add('input-error');
    field.error.textContent = message;
  }

  function clearError(field) {
    field.input.classList.remove('input-error');
    field.error.textContent = '';
  }

  function validateField(key) {
    const field = fields[key];
    const value = field.input.value.trim();

    switch (key) {
      case 'name':
        if (!value) { setError(field, 'Please enter your name.'); return false; }
        break;

      case 'email':
        if (!value) { setError(field, 'Please enter your email.'); return false; }
        if (!EMAIL_REGEX.test(value)) { setError(field, 'Please enter a valid email address.'); return false; }
        break;

      case 'subject':
        if (!value) { setError(field, 'Please enter a subject.'); return false; }
        break;

      case 'message':
        if (!value) { setError(field, 'Please enter a message.'); return false; }
        if (value.length < MIN_MESSAGE_LENGTH) {
          setError(field, 'Message should be at least ' + MIN_MESSAGE_LENGTH + ' characters.');
          return false;
        }
        break;
    }

    clearError(field);
    return true;
  }

  // Validate a field as the user leaves it (better UX than only on submit)
  Object.keys(fields).forEach(function (key) {
    fields[key].input.addEventListener('blur', function () { validateField(key); });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const results = Object.keys(fields).map(validateField);
    const isValid = results.every(Boolean);

    if (!isValid) {
      statusEl.textContent = 'Please fix the errors above and try again.';
      statusEl.className = 'form-status error';
      return;
    }

    // NOTE: No backend/email service is connected yet. This is where you
    // would send the form data to an API, e.g.:
    //
    // fetch('YOUR_BACKEND_ENDPOINT', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });

    statusEl.textContent = "Thanks! Your message looks good. (Form is ready for backend integration.)";
    statusEl.className = 'form-status success';
    form.reset();
  });
});
