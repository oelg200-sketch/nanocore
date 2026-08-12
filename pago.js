// ===================== PAGO / CHECKOUT NANOCORE =====================
// Usa getCart(), formatPrice(), closeModal() etc. definidos en carrito.js
// (cargado antes que este archivo en pago.html).

document.addEventListener('DOMContentLoaded', () => {
  const checkoutView = document.getElementById('checkout-view');
  const emptyView = document.getElementById('checkout-empty');
  const successView = document.getElementById('checkout-success');

  const products = window.PRODUCTS || [];
  const cart = getCart();

  // ===================== CARRITO VACÍO =====================
  if (!cart.length) {
    if (checkoutView) checkoutView.style.display = 'none';
    if (emptyView) emptyView.style.display = 'block';
    return;
  }

  // ===================== RESUMEN DEL PEDIDO =====================
  const summaryListEl = document.getElementById('checkout-summary-list');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const totalEl = document.getElementById('checkout-total');

  let total = 0;
  summaryListEl.innerHTML = '';

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    const subtotal = product.price * item.qty;
    total += subtotal;

    const row = document.createElement('div');
    row.className = 'checkout-summary-item';
    row.innerHTML = `
      <div class="checkout-summary-img">
        <img src="${product.image}" alt="${product.name}">
        <span class="checkout-summary-qty">${item.qty}</span>
      </div>
      <div class="checkout-summary-info">
        <span class="checkout-summary-name">${product.name}</span>
      </div>
      <span class="checkout-summary-price">${formatPrice(subtotal)}</span>
    `;
    summaryListEl.appendChild(row);
  });

  subtotalEl.textContent = formatPrice(total);
  totalEl.textContent = formatPrice(total);

  // ===================== TARJETA ANIMADA (vista previa) =====================
  const nombreInput = document.getElementById('p-nombre');
  const numeroInput = document.getElementById('p-numero');
  const vencInput = document.getElementById('p-vencimiento');
  const cvvInput = document.getElementById('p-cvv');

  const previewNumber = document.getElementById('card-preview-number');
  const previewName = document.getElementById('card-preview-name');
  const previewExp = document.getElementById('card-preview-exp');
  const cardPreview = document.getElementById('card-preview');

  // Formatea el número de tarjeta en grupos de 4 mientras se escribe
  numeroInput.addEventListener('input', () => {
    let digits = numeroInput.value.replace(/\D/g, '').slice(0, 16);
    let formatted = digits.match(/.{1,4}/g)?.join(' ') || '';
    numeroInput.value = formatted;

    previewNumber.textContent = digits
      ? formatted.padEnd(19, '•').replace(/(.{4})(?=.)/g, '$1 ').slice(0, 19)
      : '•••• •••• •••• ••••';
  });

  nombreInput.addEventListener('input', () => {
    previewName.textContent = nombreInput.value.trim()
      ? nombreInput.value.toUpperCase()
      : 'NOMBRE APELLIDO';
  });

  // Inserta "/" automáticamente después de los primeros 2 dígitos
  vencInput.addEventListener('input', () => {
    let digits = vencInput.value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) {
      digits = digits.slice(0, 2) + '/' + digits.slice(2);
    }
    vencInput.value = digits;
    previewExp.textContent = digits || 'MM/AA';
  });

  cvvInput.addEventListener('input', () => {
    cvvInput.value = cvvInput.value.replace(/\D/g, '').slice(0, 4);
    cardPreview.classList.toggle('card-flip', document.activeElement === cvvInput);
  });
  cvvInput.addEventListener('focus', () => cardPreview.classList.add('card-flip'));
  cvvInput.addEventListener('blur', () => cardPreview.classList.remove('card-flip'));

  // ===================== VALIDACIÓN =====================
  function setError(id, message) {
    const errEl = document.getElementById('err-' + id);
    const inputEl = document.getElementById('p-' + id);
    if (errEl) errEl.textContent = message || '';
    if (inputEl) inputEl.classList.toggle('input-invalid', Boolean(message));
  }

  function validateForm() {
    let valid = true;

    if (!nombreInput.value.trim() || nombreInput.value.trim().length < 3) {
      setError('nombre', 'Escribe el nombre tal como aparece en la tarjeta.');
      valid = false;
    } else setError('nombre', '');

    const numDigits = numeroInput.value.replace(/\D/g, '');
    if (numDigits.length !== 16) {
      setError('numero', 'El número de tarjeta debe tener 16 dígitos.');
      valid = false;
    } else setError('numero', '');

    const vencMatch = vencInput.value.match(/^(\d{2})\/(\d{2})$/);
    if (!vencMatch) {
      setError('vencimiento', 'Usa el formato MM/AA.');
      valid = false;
    } else {
      const mm = parseInt(vencMatch[1], 10);
      const yy = parseInt(vencMatch[2], 10);
      const now = new Date();
      const currentYY = now.getFullYear() % 100;
      const currentMM = now.getMonth() + 1;
      if (mm < 1 || mm > 12) {
        setError('vencimiento', 'El mes debe estar entre 01 y 12.');
        valid = false;
      } else if (yy < currentYY || (yy === currentYY && mm < currentMM)) {
        setError('vencimiento', 'La tarjeta está vencida.');
        valid = false;
      } else {
        setError('vencimiento', '');
      }
    }

    if (!/^\d{3,4}$/.test(cvvInput.value)) {
      setError('cvv', 'CVV inválido.');
      valid = false;
    } else setError('cvv', '');

    const emailInput = document.getElementById('p-email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      setError('email', 'Ingresa un correo válido.');
      valid = false;
    } else setError('email', '');

    const direccionInput = document.getElementById('p-direccion');
    if (!direccionInput.value.trim()) {
      setError('direccion', 'Ingresa tu dirección de envío.');
      valid = false;
    } else setError('direccion', '');

    const ciudadInput = document.getElementById('p-ciudad');
    if (!ciudadInput.value.trim()) {
      setError('ciudad', 'Ingresa tu ciudad.');
      valid = false;
    } else setError('ciudad', '');

    return valid;
  }

  // ===================== ENVÍO DEL FORMULARIO =====================
  const form = document.getElementById('payment-form');
  const payBtn = document.getElementById('btn-pay');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // ===================== ADVERTENCIA FINAL ANTES DE PAGAR =====================
    showGenericConfirmModal(
      `¿Estás seguro de que deseas realizar esta compra por <strong>${formatPrice(total)}</strong>? Esta acción no se puede deshacer.`,
      'Sí, confirmar compra',
      () => {
        payBtn.disabled = true;
        payBtn.textContent = 'Procesando pago...';

        // Simula el procesamiento del pago
        setTimeout(() => {
          const orderNumber = 'NC-' + Date.now().toString().slice(-8);
          document.getElementById('order-number').textContent = orderNumber;

          clearCart();

          checkoutView.style.display = 'none';
          successView.style.display = 'block';
          successView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 900);
      }
    );
  });
});