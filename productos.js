const productos = {
  "laptop-hp-a1ud1la": {
    nombre: "Laptop HP A1UD1LA",
    precio: "$579.00",
    precioAnterior: "",
    imagen: "./assets/hp-15-fc0043la-laptop-15-6-amd-ryzen-3-7320u-8gb-ram-512gb-ssd-w11-home-teclado-espa-ol-gold-a1ud1la-abm-4.jpg",
    descuento: "",
    caracteristicas: [
      "<b>Procesador:</b> AMD Ryzen 3 7320U.",
      "<b>Memoria RAM:</b> 8GB LPDDR5.",
      "<b>Almacenamiento:</b> 512GB SSD PCIe NVMe M.2.",
      "<b>Pantalla:</b> 15.6\" FHD (1920 x 1080).",
      "<b>Sistema Operativo:</b> Windows 11 Home."
    ]
  },
  "acer-nitro-v15": {
    nombre: "Notebook Gamer Acer Nitro V15 Intel",
    precio: "$1,000.00",
    precioAnterior: "",
    imagen: "./assets/images.jpg",
    descuento: "",
    caracteristicas: [
      "<b>Procesador:</b> Intel Core i5-13420H.",
      "<b>Tarjeta Gráfica:</b> NVIDIA GeForce RTX 3050 4GB.",
      "<b>Memoria RAM:</b> 16GB DDR5.",
      "<b>Almacenamiento:</b> 512GB SSD.",
      "<b>Pantalla:</b> 15.6\" FHD 144Hz."
    ]
  },
  "asus-zenbook-14": {
    nombre: "Asus Zenbook 14",
    precio: "$1,000.00",
    precioAnterior: "",
    imagen: "./assets/images..jpg",
    descuento: "",
    caracteristicas: [
      "<b>Procesador:</b> Snapdragon / Qualcomm Adreno.",
      "<b>Memoria RAM:</b> 16GB.",
      "<b>Almacenamiento:</b> 512GB SSD.",
      "<b>Pantalla:</b> 14.0\" OLED Touch."
    ]
  },
  "dell-latitude-7480": {
    nombre: "Dell Latitude 7480 Core i5 6300U",
    precio: "$1,000.00",
    precioAnterior: "",
    imagen: "./assets/imag.jpg",
    descuento: "",
    caracteristicas: [
      "<b>Procesador:</b> Intel Core i5 6300U 2.4GHz.",
      "<b>Memoria RAM:</b> 8GB DDR4.",
      "<b>Almacenamiento:</b> 256GB SSD.",
      "<b>Pantalla:</b> 14\" HD."
    ]
  },
  "laptop-dell-rdkow": {
    nombre: "Laptop Dell RDK0W",
    precio: "$561.96",
    precioAnterior: "",
    imagen: "./assets/ima...jpg",
    descuento: "",
    caracteristicas: [
      "<b>Procesador:</b> Intel Core i5.",
      "<b>Memoria RAM:</b> 8GB.",
      "<b>Almacenamiento:</b> 512GB SSD.",
      "<b>Pantalla:</b> 15.6\" FHD."
    ]
  },
  "monitor-tcl-mini-led-238": {
    nombre: "Monitor Gaming Acer",
    precio: "$129.00",
    precioAnterior: "$184.00",
    imagen: "./assets/images (3).jpg",
    descuento: "-30%",
    caracteristicas: [
      "<b>Tamaño:</b> 27 Pulgadas.",
      "<b>Tecnología:</b> LED FHD Negro.",
      "<b>Modelo:</b> VG270P6BIP."
    ]
  },
  "xiaomi-redmi-note-15": {
    nombre: "Xiaomi Redmi Note 15",
    precio: "$279.00",
    precioAnterior: "",
    imagen: "./assets/WhatsApp Image 2026-07-28 at 4.40.16 PM.jpeg",
    descuento: "",
    caracteristicas: [
      "<b>Conectividad:</b> 5G Red.",
      "<b>Memoria RAM:</b> 8GB RAM.",
      "<b>Almacenamiento:</b> 256GB Interno."
    ]
  },
  "iphone-17-pro": {
    nombre: "iPhone 17 Pro",
    precio: "$1,000.00",
    precioAnterior: "",
    imagen: "./assets/img.jpg",
    descuento: "",
    caracteristicas: [
      "<b>Memoria RAM:</b> 12GB.",
      "<b>Almacenamiento:</b> 256GB.",
      "<b>Color:</b> Blanco."
    ]
  },
  "samsung-galaxy-a55": {
    nombre: "Samsung Galaxy A55",
    precio: "$375.00",
    precioAnterior: "",
    imagen: "./assets/images...jpg",
    descuento: "",
    caracteristicas: [
      "<b>Memoria RAM:</b> 12GB.",
      "<b>Almacenamiento:</b> 256GB.",
      "<b>Color:</b> Blanco."
    ]
  },
  "teclado-mouse": {
    nombre: "Combo Teclado Mouse",
    precio: "$629.30",
    precioAnterior: "$899.00",
    imagen: "./assets/images (5).jpg",
    descuento: "-30%",
    caracteristicas: [
      "<b>Accesorios incluidos:</b> Tira de luces RGB.",
      "<b>Incluye:</b> Mousepad antideslizante.",
      "<b>Conexión:</b> USB Plug & Play."
    ]
  }
};

// Lógica de carga
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productoId = params.get("id");

  if (productoId && productos[productoId]) {
    const p = productos[productoId];

    const elNombre = document.getElementById("prod-nombre");
    const elPrecio = document.getElementById("prod-precio");
    const elPrecioAnterior = document.getElementById("prod-precio-anterior");
    const elImagen = document.getElementById("prod-imagen");
    const elDescuento = document.getElementById("prod-descuento");
    const elLista = document.getElementById("prod-caracteristicas");

    if (elNombre) elNombre.textContent = p.nombre;
    if (elPrecio) elPrecio.textContent = p.precio;
    if (elImagen) {
      elImagen.src = p.imagen;
      elImagen.alt = p.nombre;
    }

    if (elPrecioAnterior) {
      if (p.precioAnterior) {
        elPrecioAnterior.textContent = p.precioAnterior;
        elPrecioAnterior.style.display = "inline";
      } else {
        elPrecioAnterior.style.display = "none";
      }
    }

    if (elDescuento) {
      if (p.descuento) {
        elDescuento.textContent = p.descuento;
        elDescuento.style.display = "inline-block";
      } else {
        elDescuento.style.display = "none";
      }
    }

    if (elLista && p.caracteristicas) {
      elLista.innerHTML = "";
      p.caracteristicas.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        elLista.appendChild(li);
      });
    }
  }
});