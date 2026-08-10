const productos = {
  "dell-latitude-7480": {
    nombre: "Dell Latitude 7480 Core i5 6300U",
    precio: "$1,000.00",
    precioAnterior: "",
    descuento: "",
    imagen: "imagenes/dell-latitude.jpg",
    caracteristicas: [
      "<b>Perfil:</b> Laptop empresarial de alta durabilidad (*tanque*).",
      "<b>Procesador:</b> Intel Core i5 / i7 de 6ª o 7ª Gen (algo antiguo para 2026).",
      "<b>Memoria:</b> Hasta 32GB RAM (es ampliable, a diferencia de las modernas).",
      "<b>Pantalla:</b> 14\" (disponible en HD o Full HD).",
      "<b>Lo mejor:</b> Excelente teclado, construcción en fibra de carbono y muchos puertos (USB-A, HDMI, Ethernet, USB-C)."
    ]
  },
  "xiaomi-redmi-note-15": {
    nombre: "Xiaomi Redmi Note 15",
    precio: "$279.00",
    precioAnterior: "",
    descuento: "",
    imagen: "imagenes/xiaomi-redmi-15.jpg",
    caracteristicas: [
      "<b>Pantalla:</b> AMOLED 6.7\" a 120Hz con brillo extremo para exteriores.",
      "<b>Rendimiento:</b> Procesador eficiente con 8GB de RAM, ideal para multitarea y juegos intermedios.",
      "<b>Cámaras:</b> Principal de 108 MP con OIS (estabilización óptica) para fotos nítidas y video sin temblores.",
      "<b>Resistencia:</b> Certificación IP66 (soporta chorros de agua y polvo) y alta resistencia a caídas.",
      "<b>Batería:</b> 5,500 mAh con carga rápida de 45W (llega al 50% en unos 25 min).",
      "<b>Software:</b> HyperOS 2 (Android 15) con funciones de IA para edición de fotos."
    ]
  },
  "iphone-17-pro": {
    nombre: "iPhone 17 Pro",
    precio: "$1,000.00",
    precioAnterior: "",
    descuento: "",
    imagen: "imagenes/iphone-17-pro.jpg",
    caracteristicas: [
      "<b>RAM Histórica:</b> Es el primer iPhone con 12GB de RAM, diseñado específicamente para potenciar la IA de Apple.",
      "<b>Pantalla:</b> 6.3\" OLED con 120Hz (ProMotion) y un nuevo recubrimiento antirreflejos ultra resistente.",
      "<b>Cámaras:</b> Triple sensor de 48 MP (Principal, Teleobjetivo y Gran Angular). Selfies mejoradas a 24 MP.",
      "<b>Potencia:</b> Chip A19 Pro; el más rápido y eficiente del mercado actual (3nm).",
      "<b>Diseño:</b> Acabado en Titanio Blanco (o Silver), más ligero y con bordes más redondeados.",
      "<b>Conectividad:</b> USB-C de alta velocidad y Wi-Fi 7."
    ]
  },
  "laptop-dell-rdkow": {
    nombre: "Laptop Dell RDKOW",
    precio: "$561.96",
    precioAnterior: "$668.00",
    descuento: "-16%",
    imagen: "imagenes/dell-rdkow.jpg",
    caracteristicas: [
      "<b>Pantalla Amplia:</b> Es de 15.6 pulgadas Full HD. Su gran ventaja es que ofrece 120Hz, lo que da una fluidez visual superior a la mayoría de laptops de su rango.",
      "<b>Rendimiento Equilibrado:</b> Con un Intel i5 y 512 GB SSD, es rápida para abrir programas de oficina (Word, Excel), navegar con muchas pestañas y videollamadas.",
      "<b>Enfoque Práctico:</b> Hecha de plástico duradero con teclado numérico completo. Es una herramienta de trabajo funcional, menos lujosa que la Zenbook pero muy resistente.",
      "<b>Relación Calidad-Precio:</b> Es más pesada (aprox. 1.6 kg) y su batería dura menos que una Zenbook, pero es mucho más barata y fácil de reparar o ampliar."
    ]
  },
  "monitor-tcl-mini-led-238": {
    nombre: "Monitor TCL Mini LED 23.8\" FHD Blanco 24G54",
    precio: "$129.00",
    precioAnterior: "$799.00",
    descuento: "-16%",
    imagen: "imagenes/monitor-tcl-238.jpg",
    caracteristicas: [
      "<b>Tecnología Mini LED:</b> Negros más profundos y mejor contraste que un monitor normal (84 zonas de control de luz).",
      "<b>Estética:</b> Diseño elegante en color blanco con bordes ultra delgados.",
      "<b>Color fiel:</b> Cubre el 99% sRGB, ideal para diseño básico y videos.",
      "<b>Pantalla:</b> 23.8\" Full HD (1080p).",
      "<b>Fluidez:</b> 100 Hz (más suave que los 60 Hz estándar).",
      "<b>Brillo:</b> 450 nits (Certificado HDR 400).",
      "<b>Puertos:</b> HDMI 1.4 y VGA (no tiene DisplayPort ni bocinas)."
    ]
  },
  "samsung-galaxy-a55": {
    nombre: "Samsung Galaxy A55",
    precio: "$375.00",
    precioAnterior: "",
    descuento: "",
    imagen: "imagenes/samsung-a55.jpg",
    caracteristicas: [
      "<b>Diseño:</b> Construcción premium con marcos de metal y cristal (muy similar al S24).",
      "<b>Pantalla:</b> Super AMOLED de 6.6\" a 120Hz, protegida por Gorilla Glass Victus+.",
      "<b>Cámaras:</b> Principal de 50 MP con OIS (estabilización óptica) y selfies nítidas de 32 MP.",
      "<b>Potencia:</b> Procesador Exynos 1480 (con gráficos AMD), equilibrado para juegos y multitarea.",
      "<b>Batería:</b> 5,000 mAh con carga de 25W (dura todo el día).",
      "<b>Extra:</b> Resistencia al agua y polvo IP67."
    ]
  },
  "laptop-hp-a1ud1la": {
    nombre: "Laptop HP A1UD1LA AMD Ryzen 3 7320U 8 GB 512 GB SSD 15.6",
    precio: "$579.00",
    precioAnterior: "",
    descuento: "",
    imagen: "imagenes/hp-ryzen3.jpg",
    caracteristicas: [
      "<b>Procesador:</b> AMD Ryzen™ 3 7320U (4 núcleos). Ideal para oficina, tareas escolares y navegación fluida.",
      "<b>Memoria:</b> 8 GB RAM LPDDR5 (tecnología rápida y eficiente).",
      "<b>Almacenamiento:</b> 512 GB SSD (inicio y carga de programas ultrarrápida).",
      "<b>Panel:</b> 15.6\" Full HD (1920 x 1080) con bordes delgados y acabado antirreflejante.",
      "<b>Portabilidad:</b> Pesa solo 1.59 kg, muy ligera para su tamaño.",
      "<b>Batería:</b> Carga rápida (50% en unos 45 minutos).",
      "<b>Puertos:</b> 1 USB-C, 2 USB-A, HDMI y jack de audio.",
      "<b>Extras:</b> Cámara HD con reducción de ruido y Wi-Fi 6."
    ]
  },
  "acer-nitro-v15": {
    nombre: "Notebook Gamer Acer Nitro V15 Intel® Core™ i5-13420H, RTX 3050",
    precio: "$1,000.00",
    precioAnterior: "",
    descuento: "",
    imagen: "imagenes/acer-nitro-v15.jpg",
    caracteristicas: [
      "<b>Procesador:</b> Intel Core i5-13420H (13ª Gen). Potencia de sobra para juegos y tareas pesadas como edición.",
      "<b>Gráficos:</b> NVIDIA RTX 3050 (6GB). Versión mejorada que soporta DLSS 3 para más FPS en juegos modernos.",
      "<b>Pantalla:</b> 15.6\" Full HD a 144Hz. Fluidez total, ideal para shooters y acción.",
      "<b>Más portátil:</b> Cuerpo más delgado y ligero que los Nitro anteriores (2.1 kg).",
      "<b>Puertos Top:</b> Incluye Thunderbolt 4 (USB-C ultra rápido) y HDMI 2.1.",
      "<b>Teclado:</b> Retroiluminado en blanco con teclado numérico."
    ]
  },
  "asus-zenbook-14": {
    nombre: "Asus Zenbook 14",
    precio: "$1,000.00",
    precioAnterior: "",
    descuento: "",
    imagen: "imagenes/asus-zenbook-14.jpg",
    caracteristicas: [
      "<b>Pantalla Élite:</b> OLED de 14 pulgadas. Ofrece negros perfectos, colores vibrantes y tiene una resolución alta (2.8K) con gran fluidez (120Hz).",
      "<b>Ultraportátil:</b> Pesa solo 1.2 kg y es extremadamente delgada (1.5 cm). Es ideal para llevar en la mochila todo el día sin esfuerzo.",
      "<b>Rendimiento Moderno:</b> Equipada con los últimos procesadores Intel Core Ultra o AMD Ryzen. Maneja tareas de oficina, multitarea pesada y edición creativa ligera con solidez.",
      "<b>Batería y Extras:</b> Autonomía que ronda las 10-15 horas. Incluye el NumberPad (teclado numérico táctil en el touchpad) y durabilidad de grado militar."
    ]
  },
  "monitor-tcl-qd-mini-led-245": {
    nombre: "Monitor TCL QD-Mini LED 24.5\" FHD Gris 25G64",
    precio: "$167.00",
    precioAnterior: "$199.00",
    descuento: "-16%",
    imagen: "imagenes/monitor-tcl-245.jpg",
    caracteristicas: [
      "<b>180 Hz y 1 ms:</b> Ultra fluido, diseñado para juegos competitivos (Shooters).",
      "<b>QD-Mini LED:</b> Combina colores vibrantes (Quantum Dot) con negros profundos (96 zonas de luz).",
      "<b>HDR 1000:</b> Brillo espectacular, muy superior a la media de su categoría.",
      "<b>Pantalla:</b> 24.5\" Full HD.",
      "<b>Puertos:</b> 2x HDMI 2.0 y DisplayPort 1.4 (incluye lo que al modelo blanco le falta).",
      "<b>Ergonómico:</b> Soporte que permite ajustar la altura."
    ]
  }
};