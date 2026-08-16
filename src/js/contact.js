// Contact Page Interactive Logic & Toast Notification

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
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Sending Message...</span>
        `;
      }

      setTimeout(() => {
        const userName = nameInput ? nameInput.value : 'friend';
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Send Message</span>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          `;
        }
        showToast(`Thank you, ${userName}! Your message has been received.`);
      }, 600);
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
