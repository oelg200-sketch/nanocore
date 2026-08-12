// ===================== BUSCADOR NANOCORE =====================
// Filtra en vivo las tarjetas .product-card de la página actual según
// lo que el usuario escribe en el .search-box input.
// Si presiona Enter y no está en catalogo.html, lo manda ahí con
// ?q=... (catálogo tiene la mayor cantidad de productos, así que sirve
// como "buscador general" del sitio).

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

  const cards = Array.from(document.querySelectorAll('.product-card'));

  function normalize(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // quita acentos: á->a, é->e, etc.
  }

  function toggleEmptyMessage(visibleCount, query) {
    const grid = document.querySelector('.product-grid');
    if (!grid) return;

    let emptyMsg = document.getElementById('search-empty-msg');

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
    } else if (emptyMsg) {
      emptyMsg.style.display = 'none';
    }
  }

  function filterCards(query) {
    const q = normalize(query);
    let visibleCount = 0;

    cards.forEach(card => {
      const title = card.querySelector('h3')?.textContent || '';
      const desc = card.querySelector('.desc')?.textContent || '';
      const matches = !q || normalize(title).includes(q) || normalize(desc).includes(q);
      card.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    toggleEmptyMessage(visibleCount, query);
  }

  // Si llegamos desde otra página con ?q=texto (ej: catalogo.html?q=iphone),
  // precargamos el buscador y filtramos apenas carga la página.
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q');
  if (initialQuery && cards.length) {
    searchInput.value = initialQuery;
    filterCards(initialQuery);
  }

  // Filtrado en vivo mientras se escribe
  searchInput.addEventListener('input', () => filterCards(searchInput.value));

  // Enter: si no estamos en el catálogo, saltamos ahí con la búsqueda
  // (el catálogo tiene la mayor variedad de productos del sitio)
  searchInput.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    if (!window.location.pathname.endsWith('catalogo.html')) {
      window.location.href = 'catalogo.html?q=' + encodeURIComponent(query);
    }
  });
});