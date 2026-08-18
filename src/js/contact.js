// Contact Page Interactive Logic & WhatsApp Redirection

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const toastClose = document.getElementById('toast-close');

  const showToast = (message) => {
    if (toast && toastMessage) {
      toastMessage.textContent = message;
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }
  };

  if (toastClose && toast) {
    toastClose.addEventListener('click', () => {
      toast.classList.add('hidden');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Validate required fields
      if (!name || !message) {
        showToast('Please fill in both your Name and Message before submitting.');
        return;
      }

      // Format WhatsApp Message
      const formattedText = `Hello Manpreet,\n\n*Name:* ${name}\n*Email:* ${email || 'N/A'}\n*Subject:* ${subject || 'N/A'}\n*Message:* ${message}`;
      const whatsappUrl = `https://wa.me/916283758448?text=${encodeURIComponent(formattedText)}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      showToast(`Opening WhatsApp chat for ${name}...`);
    });
  }

  // --- Copy to Clipboard Buttons ---
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('bg-indigo-600', 'text-white');
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('bg-indigo-600', 'text-white');
        }, 2000);
      }
    });
  });
});
