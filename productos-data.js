// ===================== BASE DE DATOS DE PRODUCTOS =====================
// Cada producto tiene un "id" único que debe coincidir con el usado en
// los enlaces producto.html?id=... de catalogo.html / ofertas.html / nanocore.html
//
// discount (opcional): porcentaje de descuento. Si existe, se calcula
// automáticamente el precio anterior tachado a partir del precio actual.
// features (opcional): lista de viñetas para la sección "Características".
// Si no se define, se generan automáticamente a partir de "desc".

window.PRODUCTS = [
  {
    id: "laptop-hp-a1ud1la",
    name: "Laptop HP A1UD1LA",
    desc: "AMD Ryzen 3 7320U, 8GB RAM, 512GB SSD, 15.6\"",
    price: 579.00,
    image: "../nanocore-1/assets/hp-15-fc0043la-laptop-15-6-amd-ryzen-3-7320u-8gb-ram-512gb-ssd-w11-home-teclado-espa-ol-gold-a1ud1la-abm-4.jpg"
  },
  {
    id: "acer-nitro-v15",
    name: "Notebook Gamer Acer Nitro V15 Intel",
    desc: "Core i5-13420H, RTX 3050, pantalla 15.6\"",
    price: 1000.00,
    image: "../nanocore-1/assets/images.jpg"
  },
  {
    id: "asus-zenbook-14",
    name: "Asus Zenbook 14",
    desc: "16GB RAM, 512GB SSD, Qualcomm Adreno, 14.0\"",
    price: 1000.00,
    image: "../nanocore-1/assets/images..jpg"
  },
  {
    id: "dell-latitude-7480",
    name: "Dell Latitude 7480 Core i5 6300U",
    desc: "2.4GHz, 8GB RAM, 256GB SSD, 14\"",
    price: 1000.00,
    image: "../nanocore-1/assets/imag.jpg",
    features: [
      "Perfil: Laptop empresarial de alta durabilidad (\"tanque\").",
      "Procesador: Intel Core i5 / i7 de 6ª o 7ª Gen.",
      "Memoria: Hasta 32GB RAM (ampliable, a diferencia de las modernas).",
      "Pantalla: 14\" (disponible en HD o Full HD).",
      "Lo mejor: Excelente teclado, construcción en fibra de carbono y muchos puertos (USB-A, HDMI, Ethernet, USB-C)."
    ]
  },
  {
    id: "laptop-dell-rdkow",
    name: "Laptop Dell RDK0W",
    desc: "Intel Core i5, 8GB RAM, 512GB SSD, 15.6\"",
    price: 561.96,
    discount: 30,
    image: "../nanocore-1/assets/ima...jpg"
  },
  {
    id: "monitor-gaming-acer-fhd",
    name: "Monitor Gaming Acer",
    desc: "LED 27\" FHD Negro VG270P6BIP",
    price: 129.00,
    discount: 30,
    image: "../nanocore-1/assets/images (3).jpg"
  },
  {
    id: "monitor-tcl-mini",
    name: "Monitor TCL Mini",
    desc: "Monitor TCL Mini LED de alta calidad y brillo.",
    price: 167.00,
    discount: 30,
    image: "../nanocore-1/assets/images (2).jpg"
  },
  {
    id: "monitor-gaming-acer-2",
    name: "Monitor Gaming Acer",
    desc: "LED 27\" FHD Negro VG270P6BIP",
    price: 150.36,
    discount: 30,
    image: "../nanocore-1/assets/images (1).jpg"
  },
  {
    id: "xiaomi-redmi-note-15",
    name: "Xiaomi Redmi Note",
    desc: "15 5G, 8GB RAM + 256GB",
    price: 279.00,
    image: "../nanocore-1/assets/WhatsApp Image 2026-07-28 at 4.40.16 PM.jpeg"
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17",
    desc: "12GB + 256GB, Blanco",
    price: 1000.00,
    image: "../nanocore-1/assets/img.jpg"
  },
  {
    id: "samsung-galaxy-a55",
    name: "Samsung Galaxy A55",
    desc: "12GB RAM + 256GB, Blanco",
    price: 375.00,
    image: "../nanocore-1/assets/images...jpg"
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    desc: "8GB + 128GB, Azul",
    price: 1249.00,
    image: "../nanocore-1/assets/iphone 16.jpg"
  },
  {
    id: "combo-samsung-s26-ultra",
    name: "Combo Samsung S26 Ultra",
    desc: "12GB RAM, 512GB Almacenamiento, Negro + Tab A11",
    price: 1399.30,
    discount: 30,
    image: "../nanocore-1/assets/images (4).jpg"
  },
  {
    id: "combo-samsung-s26",
    name: "Combo Samsung S26",
    desc: "12GB RAM, 256GB Almacenamiento, Negro + Buds Fe",
    price: 1399.30,
    discount: 30,
    image: "../nanocore-1/assets/images (6).jpg"
  },
  {
    id: "teclado-mouse",
    name: "Combo Teclado Mouse",
    desc: "Incluye tira de luces y mousepad",
    price: 629.30,
    discount: 30,
    image: "../nanocore-1/assets/images (5).jpg"
  },
  {
    id: "jbl-over-ear",
    name: "Jbl Over Ear Azul Jblt720Btblu",
    desc: "Azul, batería hasta 76 horas, capacidad 500 mAh",
    price: 65.00,
    image: "../nanocore-1/assets/JBL.webp"
  },
  {
    id: "wh-ch520",
    name: "Inalámbricos WH-CH520 rosados",
    desc: "Rosados, 50 horas de batería, inalámbricos",
    price: 60.00,
    image: "../nanocore-1/assets/mgen.webp"
  },
  {
    id: "stylus-ipad",
    name: "Stylus para iPad y iPad pro",
    desc: "Lápiz digital preciso, ideal para dibujo y escritura",
    price: 100.00,
    image: "../nanocore-1/assets/imagenes.webp"
  },
  {
    id: "ipad-a16",
    name: "Ipad Apple A16",
    desc: "Gris, 11 pulgadas, batería hasta 10 horas",
    price: 349.00,
    image: "../nanocore-1/assets/ipad 16.webp"
  },
  {
    id: "galaxy-tab-s11-ultra",
    name: "Galaxy Tab S11 Ultra",
    desc: "Gris, 14.6 pulgadas, batería hasta 18 horas, 256GB",
    price: 1200.00,
    image: "../nanocore-1/assets/Captura de pantalla 2026-08-06 214033.png"
  },
  {
    id: "jbl-tune-beam",
    name: "JBL Tune Beam negro",
    desc: "Negro, batería hasta 48 horas, tamaño compacto",
    price: 100.00,
    image: "../nanocore-1/assets/images--.jpg"
  },
  {
    id: "samsung-camara-st66",
    name: "Samsung - Cámara digital ST66",
    desc: "Cámara compacta de 16MP, zoom 5x, diseño ultradelgado",
    price: 120.00,
    image: "../nanocore-1/assets/Samsung.jpg"
  },
  {
    id: "sony-pxw-z190",
    name: "Cámara Sony PXW-Z190",
    desc: "Videocámara profesional 4K, zoom 25x, tres sensores",
    price: 5300.00,
    image: "../nanocore-1/assets/sony.webp"
  },
  {
    id: "apple-watch-se",
    name: "Apple Watch SE 40mm",
    desc: "Batería con duración de hasta 18 horas de uso diario",
    price: 249.00,
    image: "../nanocore-1/assets/apple.jpg"
  },
  {
    id: "sony-handycam-4k",
    name: "Sony - Videocámara 4K Handycam",
    desc: "4K con lente ZEISS y estabilización avanzada",
    price: 900.00,
    image: "../nanocore-1/assets/images-sony.jpg"
  },
  {
    id: "ps5-control",
    name: "PlayStation 5",
    desc: "Mando de colección de PS5 inspirado en la invasión simbiótica",
    price: 110.00,
    image: "../nanocore-1/assets/images.control.jpg"
  },
  {
    id: "galaxy-ring",
    name: "Samsung Galaxy Ring Smart Ring mit Titan",
    desc: "Talla 10 disponible",
    price: 399.99,
    image: "../nanocore-1/assets/images-aanillo.jpg"
  },
  {
    id: "huawei-freebuds-se2",
    name: "Audífonos Huawei FreeBuds SE 2",
    desc: "Diseño ergonómico con estuche de carga, blanco y negro",
    price: 700.00,
    discount: 30,
    image: "../nanocore-1/assets/images (16).jpg"
  },

  // ===================== PRODUCTOS AGREGADOS (antes solo estaban en ofertas.html / nanocore.html sin id) =====================
  {
    id: "combo-pantalla-tcl",
    name: "Combo Pantalla TCL",
    desc: "75\" QLED 4K UHD 75P8K + Barra de Sonido TCL S55H",
    price: 874.30,
    discount: 30,
    image: "../nanocore-1/assets/Captura de pantalla 2026-08-06 222425.png"
  },
  {
    id: "iphone-17-oferta",
    name: "Iphone 17",
    desc: "Potente, elegante, pantalla 120Hz, cámara 48MP, chip A19, USB-C.",
    price: 1083.00,
    discount: 5,
    image: "../nanocore-1/assets/images (8).jpg"
  },
  {
    id: "motorola-moto-g24",
    name: "Motorola Moto G24 o G34 5G",
    desc: "Motorola negro y audífonos inalámbricos con pantalla digital.",
    price: 2100.00,
    discount: 40,
    image: "../nanocore-1/assets/Captura de pantalla 2026-08-06 222939.png"
  },
  {
    id: "setup-gamer",
    name: "Setup Gamer",
    desc: "Setup gamer completo con PC, monitor, periféricos y accesorios",
    price: 1550.00,
    discount: 30,
    image: "../nanocore-1/assets/Captura de pantalla 2026-08-06 223120.png"
  },
  {
    id: "combo-logitech-wave-keys",
    name: "Combo Logitech Wave Keys",
    desc: "Teclado ergonómico inalámbrico con reposamanos integrado y cámara web HD.",
    price: 1600.00,
    discount: 30,
    image: "../nanocore-1/assets/images (11).jpg"
  },
  {
    id: "laptop-hp-impresora",
    name: "Laptop HP y una Impresora Multifuncional HP",
    desc: "Memoria RAM: 4 GB o 8 GB. Almacenamiento: 128 GB",
    price: 349.00,
    discount: 30,
    image: "../nanocore-1/assets/images (12).jpg"
  },
  {
    id: "ps5-825gb",
    name: "Playstation 5 825 GB",
    desc: "Consola 4K, diseño exclusivo, carga ultra rápida y control háptico.",
    price: 550.00,
    discount: 30,
    image: "../nanocore-1/assets/play 5.jpg"
  },
  {
    id: "combo-xiaomi-14t-reloj",
    name: "Combo Xiaomi 14T y El Reloj",
    desc: "Teléfono inteligente de gama media-alta, color violeta, y reloj inteligente con correa negra.",
    price: 600.00,
    discount: 30,
    image: "../nanocore-1/assets/images (14).jpg"
  },
  {
    id: "samsung-freestyle",
    name: "Samsung The Freestyle",
    desc: "Proyector portátil inteligente Samsung con diseño giratorio de 180°",
    price: 699.30,
    discount: 30,
    image: "../nanocore-1/assets/images (15).jpg"
  },
  {
    id: "combo-iphone12pro",
    name: "iPhone 12 Pro + Audífonos iPhone + Smartwatch",
    desc: "iPhone 12 Pro 256GB, audífonos Bluetooth y smartwatch compatible.",
    price: 630.00,
    discount: 30,
    image: "../nanocore-1/assets/images (17).jpg"
  },
  {
    id: "combo-honor-smartwatch",
    name: "Combo Honor Smartphone + Smartwatch",
    desc: "Tono gris con triple cámara, acompañado de un reloj inteligente color negro",
    price: 380.00,
    discount: 30,
    image: "../nanocore-1/assets/images (18).jpg"
  },
  {
    id: "combo-logitech-pebble-keys2",
    name: "Combo Logitech Pebble Keys 2",
    desc: "Teclado inalámbrico compacto y mouse estilizado en tono azul lavanda, ideales para escritorio moderno.",
    price: 65.00,
    discount: 30,
    image: "../nanocore-1/assets/images (19).jpg"
  }
];