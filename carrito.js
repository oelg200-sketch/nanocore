// ===================== CARRITO DE COMPRAS NANOCORE =====================
// Guarda el carrito en localStorage para que persista entre páginas y
// aunque se cierre la pestaña. Estructura guardada:
// [ { id: "laptop-hp-a1ud1la", qty: 2 }, ... ]

const CART_KEY = 'nanocore_cart';

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty = 1) {
  if (!id) return;
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

function setQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, Math.min(99, qty));
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  const products = window.PRODUCTS || [];
  return getCart().reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function formatPrice(amount) {
  return '$' + amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// ===================== MODALES DE CONFIRMACIÓN =====================
function closeModal() {
  const existing = document.querySelector('.modal-overlay');
  if (existing) existing.remove();
}

function showConfirmModal(onAccept) {
  closeModal();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <p>¿Seguro que quieres agregar al carrito?</p>
      <div class="modal-actions">
        <button type="button" id="modal-cancel">Cancelar</button>
        <button type="button" id="modal-accept">Aceptár</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector('#modal-cancel').addEventListener('click', closeModal);
  overlay.querySelector('#modal-accept').addEventListener('click', () => {
    closeModal();
    onAccept();
  });

  // Cerrar si se hace clic fuera del cuadro
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
}

function showSuccessModal() {
  closeModal();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <p>Se agrego al carrito</p>
      <div class="modal-actions modal-actions-center">
        <button type="button" id="modal-ok">Aceptár</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector('#modal-ok').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
}

// Modal genérico reutilizable (lo usa por ejemplo pago.js para la
// advertencia final antes de confirmar la compra).
function showGenericConfirmModal(message, acceptLabel, onAccept) {
  closeModal();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <p>${message}</p>
      <div class="modal-actions">
        <button type="button" id="modal-cancel">Cancelar</button>
        <button type="button" id="modal-accept">${acceptLabel || 'Aceptár'}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector('#modal-cancel').addEventListener('click', closeModal);
  overlay.querySelector('#modal-accept').addEventListener('click', () => {
    closeModal();
    onAccept();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
}

// ===================== BADGE (número rojo sobre el ícono del carrito) =====================
function updateCartBadge() {
  const cartBtn = document.querySelector('[aria-label="Carrito"]');
  if (!cartBtn) return;

  let badge = cartBtn.querySelector('.cart-badge');
  const count = getCartCount();

  if (count > 0) {
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'cart-badge';
      badge.style.cssText =
        'position:absolute; top:-6px; right:-6px; background:#e63946; color:#fff;' +
        'font-size:10px; font-weight:700; min-width:16px; height:16px; border-radius:50%;' +
        'display:flex; align-items:center; justify-content:center; padding:0 3px;';
      cartBtn.style.position = 'relative';
      cartBtn.appendChild(badge);
    }
    badge.textContent = count > 99 ? '99+' : count;
  } else if (badge) {
    badge.remove();
  }
}

// ===================== RENDER DE LA PÁGINA carrito.html =====================
function renderCartPage() {
  const listEl = document.getElementById('cart-list');
  if (!listEl) return; // no estamos en carrito.html

  const summaryEl = document.getElementById('cart-summary');
  const totalEl = document.getElementById('cart-total-amount');
  const cart = getCart();
  const products = window.PRODUCTS || [];

  listEl.innerHTML = '';

  if (!cart.length) {
    listEl.innerHTML =
      '<div class="cart-empty"><p>Tu carrito está vacío.</p>' +
      '<p><a href="catalogo.html">Ver catálogo de productos →</a></p></div>';
    if (summaryEl) summaryEl.style.display = 'none';
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return; // producto ya no existe en la base de datos

    const subtotal = product.price * item.qty;
    total += subtotal;

    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <a href="producto.html?id=${product.id}" class="cart-img-box">
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="cart-info">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
      </div>
      <div class="cart-actions">
        <span class="cart-price">${formatPrice(subtotal)}</span>
        <div class="cart-qty">
          <button type="button" class="qty-minus" data-id="${product.id}">−</button>
          <span>${item.qty}</span>
          <button type="button" class="qty-plus" data-id="${product.id}">+</button>
        </div>
        <button type="button" class="cart-delete-btn" aria-label="Eliminar producto" data-id="${product.id}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>
        </button>
      </div>
    `;
    listEl.appendChild(row);
  });

  if (summaryEl && totalEl) {
    summaryEl.style.display = 'flex';
    totalEl.textContent = formatPrice(total);
  }

  // ===================== EVENTOS DE LA PÁGINA DEL CARRITO =====================
  listEl.querySelectorAll('.cart-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(btn.dataset.id);
      renderCartPage();
    });
  });

  listEl.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = getCart().find(i => i.id === btn.dataset.id);
      if (item) setQty(item.id, item.qty + 1);
      renderCartPage();
    });
  });

  listEl.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = getCart().find(i => i.id === btn.dataset.id);
      if (!item) return;
      if (item.qty <= 1) {
        removeFromCart(item.id);
      } else {
        setQty(item.id, item.qty - 1);
      }
      renderCartPage();
    });
  });
}

// ===================== WIRING GENERAL (todas las páginas) =====================
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  // Ícono del carrito en el navbar -> ir a carrito.html
  const cartIconBtn = document.querySelector('[aria-label="Carrito"]');
  if (cartIconBtn) {
    cartIconBtn.addEventListener('click', () => {
      window.location.href = 'carrito.html';
    });
  }

  // Botones "Agregar al carrito" en las tarjetas de producto (catalogo/nanocore/ofertas).
  // Se usa delegación de eventos en document para que también funcione con
  // tarjetas creadas dinámicamente por el buscador (buscador.js), sin
  // importar cuándo se agregan al DOM.
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-card .cart-btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    const card = btn.closest('.product-card');
    const link = card?.querySelector('.product-card-link');
    const href = link?.getAttribute('href') || '';
    const id = new URLSearchParams(href.split('?')[1] || '').get('id');
    if (!id) return;

    showConfirmModal(() => {
      addToCart(id, 1);
      showSuccessModal();
    });
  });

  // Botón "Agregar al carrito" en producto.html
  const detailAddBtn = document.getElementById('btn-add-cart');
  if (detailAddBtn) {
    detailAddBtn.addEventListener('click', () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      const qtyInput = document.getElementById('qty-input');
      const qty = parseInt(qtyInput?.value, 10) || 1;
      if (!id) return;

      showConfirmModal(() => {
        addToCart(id, qty);
        showSuccessModal();
      });
    });
  }

  // Botón "Comprar ahora" en producto.html: agrega el producto y va
  // directo a la página de pago (checkout), sin pasar por el carrito.
  const buyNowBtn = document.getElementById('btn-buy-now');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      const qtyInput = document.getElementById('qty-input');
      const qty = parseInt(qtyInput?.value, 10) || 1;
      if (id) addToCart(id, qty);
      window.location.href = 'pago.html';
    });
  }

  // Botón "Proceder al pago" en carrito.html
  const checkoutBtn = document.querySelector('.btn-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (getCartCount() === 0) return;
      window.location.href = 'pago.html';
    });
  }

  renderCartPage();
});