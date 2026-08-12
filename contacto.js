document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Aquí, más adelante, se puede conectar a un backend/servicio de correo
    // (ej. EmailJS, Formspree, o un endpoint propio) para enviar el mensaje real.

    successMsg.style.display = 'block';
    form.reset();

    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 5000);
  });
});