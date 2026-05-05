/* contact.js — Kontaktformular via Formspree */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet …';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        showStatus('success', 'Vielen Dank — ich melde mich innerhalb von 1–2 Werktagen persönlich bei Ihnen.');
        form.reset();
      } else {
        const json = await response.json();
        const message = json?.errors?.map((e) => e.message).join(', ') || 'Etwas ist schiefgelaufen. Bitte schreiben Sie mir direkt per E-Mail.';
        showStatus('error', message);
      }
    } catch {
      showStatus('error', 'Ihre Nachricht konnte nicht gesendet werden. Bitte schreiben Sie mir direkt an ulrike@huse-mediation.de.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

function showStatus(type, message) {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.className = `form-status form-status--${type}`;
  statusEl.removeAttribute('hidden');
  statusEl.focus();
}
