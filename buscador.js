// ===================== BUSCADOR GLOBAL NANOCORE =====================
// Ahora busca en TODA la base de productos (window.PRODUCTS), sin
// importar en qué página esté el usuario ni si ese producto normalmente
// se muestra ahí (ej: buscar un producto "de ofertas" mientras estás
// parado en Catálogo, o buscar cualquier producto desde Inicio).
//
// 1) Mientras se escribe, aparece un dropdown con sugerencias (imagen,
//    nombre y precio) que llevan directo a producto.html.
// 2) Al presionar Enter, o dar clic en "Ver todos los resultados",
//    se navega a catalogo.html?q=... y ahí el grid se reconstruye
//    dinámicamente con TODOS los productos que coincidan (incluyendo
//    los que normalmente solo aparecen en Ofertas o en Inicio).

document.addEventListener('DOMContentLoaded', () => {
  // ===================== BOTÓN DE CUENTA -> NOSOTROS =====================
  const accountBtn = document.querySelector('[aria-label="Cuenta"]');
  if (accountBtn) {
    accountBtn.addEventListener('click', () => {
      window.location.href = 'nosotros.html';
    });
  }

  const searchInput = document.querySelector('.search-box input');
  if (!searchInput) return;

  const searchBox = searchInput.closest('.search-box');
  const products = window.PRODUCTS || [];

  function normalize(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // quita acentos: á->a, é->e, etc.
  }

  function formatPriceLocal(amount) {
    return '$' + amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function searchProducts(query) {
    const q = normalize(query);
    if (!q) return [];
    return products.filter(p =>
      normalize(p.name).includes(q) || normalize(p.desc).includes(q)
    );
  }

  // ===================== DROPDOWN DE SUGERENCIAS (todas las páginas) =====================
  let dropdown = null;

  function closeDropdown() {
    if (dropdown) {
      dropdown.remove();
      dropdown = null;
    }
  }

  function buildDropdown(query) {
    closeDropdown();
    const matches = searchProducts(query);
    if (!matches.length) return;

    dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';

    matches.slice(0, 6).forEach(p => {
      const item = document.createElement('a');
      item.href = 'producto.html?id=' + encodeURIComponent(p.id);
      item.className = 'search-dropdown-item';
      item.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <span class="search-dropdown-info">
          <span class="search-dropdown-name">${p.name}</span>
          <span class="search-dropdown-price">${formatPriceLocal(p.price)}</span>
        </span>
      `;
      dropdown.appendChild(item);
    });

    const seeAll = document.createElement('a');
    seeAll.href = 'catalogo.html?q=' + encodeURIComponent(query);
    seeAll.className = 'search-dropdown-seeall';
    seeAll.textContent = `Ver los ${matches.length} resultados para "${query}"`;
    dropdown.appendChild(seeAll);

    searchBox.appendChild(dropdown);
  }

  if (searchBox) searchBox.style.position = 'relative';

  document.addEventListener('click', (e) => {
    if (dropdown && searchBox && !searchBox.contains(e.target)) closeDropdown();
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (!query) return;
      closeDropdown();
      window.location.href = 'catalogo.html?q=' + encodeURIComponent(query);
    } else if (e.key === 'Escape') {
      closeDropdown();
      searchInput.blur();
    }
  });

  // ===================== FILTRO LOCAL: tarjetas ya presentes en la página =====================
  // Complementa la vista actual (inicio/ofertas/catálogo estático) ocultando
  // las tarjetas que no coinciden, mientras el dropdown de arriba ya te
  // permite saltar a cualquier producto del catálogo completo.
  const staticCards = Array.from(document.querySelectorAll('.product-card'));

  function toggleEmptyMessage(grid, visibleCount, query) {
    if (!grid) return;
    let emptyMsg = grid.parentElement.querySelector('#search-empty-msg');

    if (visibleCount === 0 && query.trim()) {
      if (!emptyMsg) {
        emptyMsg = document.createElement('p');
        emptyMsg.id = 'search-empty-msg';
        emptyMsg.style.cssText =
          'grid-column: 1 / -1; text-align:center; padding:50px 0; color:#6b6b6b; font-size:15px;';
        grid.appendChild(emptyMsg);
      }
      emptyMsg.textContent = 'No encontramos productos para "' + query.trim() + '".';
      emptyMsg.style.display = 'block';
      grid.appendChild(emptyMsg);
    } else if (emptyMsg) {
      emptyMsg.style.display = 'none';
    }
  }

  function filterStaticCards(query) {
    const q = normalize(query);
    let visibleCount = 0;
    const grid = document.querySelector('.product-grid');

    staticCards.forEach(card => {
      const title = card.querySelector('h3')?.textContent || '';
      const desc = card.querySelector('.desc')?.textContent || '';
      const matches = !q || normalize(title).includes(q) || normalize(desc).includes(q);
      card.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    toggleEmptyMessage(grid, visibleCount, query);
  }

  // ===================== CATÁLOGO: búsqueda cruzada en TODA la base =====================
  // Solo en catalogo.html: cuando hay una búsqueda activa, el grid se
  // reconstruye a partir de window.PRODUCTS completo (no solo las
  // tarjetas fijas del HTML), así aparecen también productos que
  // normalmente solo se listan en Ofertas o en Inicio.
  const isCatalogPage = /catalogo\.html$/.test(window.location.pathname);
  const catalogGrid = document.querySelector('#catalogo .product-grid');

  function cardHTML(p) {
    const discountBadge = p.discount ? `<span class="discount-badge">-${p.discount}%</span>` : '';
    return `
      <div class="product-card">
        <a href="producto.html?id=${encodeURIComponent(p.id)}" class="product-card-link">
          ${discountBadge}
          <div class="product-img"><img src="${p.image}" alt="${p.name}"></div>
          <h3>${p.name}</h3>
          <p class="desc">${p.desc}</p>
        </a>
        <div class="product-footer">
          <span class="price">${formatPriceLocal(p.price)}</span>
          <button class="cart-btn" type="button" aria-label="Agregar al carrito">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
        </div>
      </div>
    `;
  }

  let originalCatalogHTML = null;

  function renderGlobalResults(query) {
    if (!catalogGrid) return;

    if (originalCatalogHTML === null) originalCatalogHTML = catalogGrid.innerHTML;

    const q = query.trim();
    if (!q) {
      catalogGrid.innerHTML = originalCatalogHTML;
      return;
    }

    const matches = searchProducts(q);
    catalogGrid.innerHTML = matches.map(cardHTML).join('');
    toggleEmptyMessage(catalogGrid, matches.length, q);
  }

  // Si llegamos desde otra página con ?q=texto (ej: catalogo.html?q=iphone),
  // precargamos el buscador y mostramos los resultados de todo el catálogo.
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q');
  if (initialQuery) {
    searchInput.value = initialQuery;
    if (isCatalogPage && catalogGrid) {
      renderGlobalResults(initialQuery);
    } else if (staticCards.length) {
      filterStaticCards(initialQuery);
    }
  }

  // Filtrado / búsqueda en vivo mientras se escribe
  searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    buildDropdown(query);

    if (isCatalogPage && catalogGrid) {
      renderGlobalResults(query);
    } else if (staticCards.length) {
      filterStaticCards(query);
    }
  });
});