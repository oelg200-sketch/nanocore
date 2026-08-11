// ===================== COLORES DE HOVER =====================
const BTN_CART_COLOR = '#0d2b45';
const BTN_CART_HOVER = '#134074';
const BTN_BUY_COLOR = '#2563eb';
const BTN_BUY_HOVER = '#1d4ed8';

const MIN_QTY = 1;
const MAX_QTY = 99;

document.addEventListener('DOMContentLoaded', () => {

  // ===================== 1. CARGAR PRODUCTO SEGÚN ?id= =====================
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = (window.PRODUCTS || []).find(p => p.id === productId);

  const titleEl = document.getElementById('product-title');
  const imageEl = document.getElementById('product-image');
  const currentPriceEl = document.getElementById('current-price');
  const oldPriceEl = document.getElementById('old-price');
  const featuresListEl = document.getElementById('features-list');
  const cartBtn = document.getElementById('btn-add-cart');
  const buyBtn = document.getElementById('btn-buy-now');

  if (!product) {
    // No se encontró el producto (id ausente o inválido)
    titleEl.textContent = 'Producto no encontrado';
    document.getElementById('product-detail').innerHTML =
      '<p>No pudimos encontrar el producto solicitado. Regresa al <a href="catalogo.html">catálogo</a>.</p>';
    return;
  }

  // Título de la pestaña y del producto
  document.title = product.name + ' | NanoCore';
  titleEl.textContent = product.name;

  // Imagen
  imageEl.src = product.image;
  imageEl.alt = product.name;

  // Precio (con descuento si aplica)
  const unitPrice = product.price;
  if (product.discount) {
    const oldPrice = unitPrice / (1 - product.discount / 100);
    oldPriceEl.textContent = formatPrice(oldPrice);
    oldPriceEl.style.display = 'inline';
  }

  // Características: usa las definidas en el producto, o genera desde "desc"
  const features = product.features && product.features.length
    ? product.features
    : product.desc.split(',').map(s => s.trim()).filter(Boolean);

  featuresListEl.innerHTML = '';
  features.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    featuresListEl.appendChild(li);
  });

  // Precio unitario disponible para los botones de acción
  cartBtn.dataset.price = unitPrice;
  buyBtn.dataset.price = unitPrice;

  // ===================== 2. HOVER EN BOTONES =====================
  cartBtn.style.backgroundColor = BTN_CART_COLOR;
  cartBtn.addEventListener('mouseenter', () => { cartBtn.style.backgroundColor = BTN_CART_HOVER; });
  cartBtn.addEventListener('mouseleave', () => { cartBtn.style.backgroundColor = BTN_CART_COLOR; });

  buyBtn.style.backgroundColor = BTN_BUY_COLOR;
  buyBtn.addEventListener('mouseenter', () => { buyBtn.style.backgroundColor = BTN_BUY_HOVER; });
  buyBtn.addEventListener('mouseleave', () => { buyBtn.style.backgroundColor = BTN_BUY_COLOR; });

  // ===================== 3. ZOOM EN LA IMAGEN =====================
  imageEl.style.transition = 'transform 0.3s ease';
  imageEl.addEventListener('mouseenter', () => { imageEl.style.transform = 'scale(1.12)'; });
  imageEl.addEventListener('mouseleave', () => { imageEl.style.transform = 'scale(1)'; });

  // ===================== 4. CANTIDAD Y PRECIO DINÁMICO =====================
  const qtyInput = document.getElementById('qty-input');
  const qtyIncrease = document.getElementById('qty-increase');
  const qtyDecrease = document.getElementById('qty-decrease');

  function updatePrice() {
    const qty = parseInt(qtyInput.value, 10) || MIN_QTY;
    currentPriceEl.textContent = formatPrice(unitPrice * qty);
  }

  qtyIncrease.addEventListener('click', () => {
    let qty = parseInt(qtyInput.value, 10) || MIN_QTY;
    if (qty < MAX_QTY) { qtyInput.value = qty + 1; updatePrice(); }
  });

  qtyDecrease.addEventListener('click', () => {
    let qty = parseInt(qtyInput.value, 10) || MIN_QTY;
    if (qty > MIN_QTY) { qtyInput.value = qty - 1; updatePrice(); }
  });

  updatePrice();
});

function formatPrice(amount) {
  return '$' + amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}