// form validation code below

document.addEventListener('DOMContentLoaded', () => {
  // search: index nav links
  const navLinks = Array.from(document.querySelectorAll('.nav-list a'))
    .map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') }));

  const searchInput = document.getElementById('siteSearch');
  const resultsBox = document.getElementById('searchResults');

  function renderResults(items) {
    if (!resultsBox) return;
    if (!items.length) {
      resultsBox.innerHTML = '<div class="no-results">No pages found</div>';
      return;
    }
    resultsBox.innerHTML = items.map(i => `
      <div class="search-item"><a href="${i.href}">${escapeHtml(i.text)}</a></div>
    `).join('');
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = (e.target.value || '').trim().toLowerCase();
      if (!q) {
        resultsBox.innerHTML = '';
        return;
      }
      const matches = navLinks.filter(l => l.text.toLowerCase().includes(q));
      renderResults(matches);
    });

    // close results when clicking outside
    document.addEventListener('click', (ev) => {
      if (!ev.target.closest('.site-search')) {
        resultsBox.innerHTML = '';
      }
    });
  }



  // Form validation
  const form = document.getElementById('contactForm');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  function showError(id, message) {
    const node = document.getElementById('error-' + id);
    if (node) node.textContent = message;
    const field = document.getElementById(id);
    if (field) field.setAttribute('aria-invalid', 'true');
  }

  function clearError(id) {
    const node = document.getElementById('error-' + id);
    if (node) node.textContent = '';
    const field = document.getElementById(id);
    if (field) field.removeAttribute('aria-invalid');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validate() {
    let ok = true;
    clearError('name');
    clearError('email');
    clearError('message');

    if (!nameField.value.trim()) {
      showError('name', 'Please enter your name');
      ok = false;
    }
    if (!emailField.value.trim()) {
      showError('email', 'Please enter your email');
      ok = false;
    } else if (!validateEmail(emailField.value.trim())) {
      showError('email', 'Please enter a valid email address');
      ok = false;
    }
    if (!messageField.value.trim()) {
      showError('message', 'Please enter a message');
      ok = false;
    }
    return ok;
  }

  if (form) {
    // inline validation
    [nameField, emailField, messageField].forEach(f => {
      if (!f) return;
      f.addEventListener('input', () => {
        if (f.value.trim()) clearError(f.id);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formStatus.textContent = '';
      if (!validate()) {
        formStatus.textContent = 'Please fix the errors above.';
        formStatus.classList.remove('success');
        formStatus.classList.add('error');
        // focus first invalid field
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // simulate sending form
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      // fake async send
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        formStatus.textContent = 'Message sent — thank you!';
        formStatus.classList.remove('error');
        formStatus.classList.add('success');
        form.reset();
      }, 900);
    });
  }
});
     // footer code below
      function updateDateTime() {
      const now = new Date();
      const formatted = now.toLocaleString();
      document.getElementById('currentDateTime').textContent = formatted;
  }
      setInterval(updateDateTime, 1000);
      updateDateTime();