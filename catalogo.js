const productos = [
  {
    id: "fijacion_titanio",
    categoria: "Columna",
    nombre: "Sistema de Fijación",
    descripcion:
      "El Sistema de Fijación ofrece una amplia solucion para los procesos quirúrgicos toracolumbares tales como procesos degenerativos discales o cirugías mínimamente invasivas.",
    medidas: [
      { titulo: "Largos Poliaxiales", tamano: ["30-45 mm", "30-50 mm"] },
      { titulo: "Diámetro", tamano: ["4.5 mm", "5.5 mm", "6.5 mm", "7.5 mm"] },
    ],
    imagenes: [
      "fijacion_titanio1.jpeg",
      "fijacion_titanio2.jpg",
      "fijacion_titanio3.jpg",
    ],
  },
  {
    id: "interespinoso_titanio",
    categoria: "Columna",
    nombre: "Sistema Interespinoso - Titanio",
    descripcion:
      "Se utiliza en el tratamiento de la enfermedad degenerativa discal. Presenta un mecanismo de implantación por la vía lateral del espacio interespinoso preservando el ligamento supraespinoso.",
    medidas: { titulo: "Medidas", tamano: ["8 mm", "10 mm", "12 mm", "14 mm"] },
    imagenes: [
      "interespinoso_titanio1.png",
      "interespinoso_titanio2.png",
      "interespinoso_titanio3.png",
    ],
  },
  {
    id: "interespinoso_peek",
    categoria: "Columna",
    nombre: "Sistema Interespinoso - Peek",
    descripcion:
      "Este dispositivo funciona como soporte del espacio afectado y protege principalmente los elementos posteriores al mantener la altura del agujero foraminal, abrir hacia arriba la superficie del canal vertebral, reducir la tensión sobre las carillas articulares y aliviar la presión sobre el anillo posterior.",
    medidas: { titulo: "Medidas", tamano: ["8 mm", "10 mm", "12 mm", "14 mm"] },
    imagenes: [
      "interespinoso_peek1.jpg",
      "interespinoso_peek2.jpg",
      "interespinoso_peek3.jpg",
    ],
  },
  {
    id: "fijacion_cage",
    categoria: "Columna",
    nombre: "Sistema de fijación cervical Cage",
    descripcion:
      "Sistema autosustentable cervical en Peek con una angulación de 6º. Combina la funcionalidad de un dispositivo intersomático y las ventajas de una placa cervical",
    medidas: {
      titulo: "Medidas",
      tamano: ["4.5 mm", "5 mm", "6 mm", "7 mm", "8 mm"],
    },
    imagenes: [
      "fijacion_cage1.jpg",
      "fijacion_cage2.jpg",
      "fijacion_cage3.png",
    ],
  },
  {
    id: "instrumentacion_cervical",
    categoria: "Columna",
    nombre: "Sistema de instrumentación p/ columna",
    descripcion: "NO INFO",
    medidas: {
      titulo: "Medidas",
      tamano: ["NO INFO"],
    },
    imagenes: ["NO INFO", "NO INFO", "NO INFO"],
  },
  {
    id: "fijacion_peek",
    categoria: "Columna",
    nombre: "Sistema de fijación posterior - Peek",
    descripcion:
      " Sistema de cajas intersomáticas en Peek con 2 marcadores en los extremos anterior y posterior. La forma geométrica hueca de los implantes permite el relleno de injerto óseo",
    medidas: [
      {
        titulo: "Alturas",
        tamano: ["7 mm", "8 mm", "9 mm", "10 mm", "11 mm", "12 mm"],
      },
      {
        titulo: "Angulaciones",
        tamano: ["0°", "4°", "8°"],
      },
    ],
    imagenes: [
      "fijacion_peek1.jpg",
      "fijacion_peek2.jpg",
      "fijacion_peek3.png",
    ],
  },
  {
    id: "celda",
    categoria: "Columna",
    nombre: "Celda Mesh - Reemplazo Vertical",
    descripcion:
      "Realizadas en titanio quirúrgico en una sola pieza, destinadas a reemplazo de cuerpo vertebral cervical, dorsal ó lumbar.",
    medidas: {
      titulo: "Medidas",
      tamano: ["Varias"],
    },
    imagenes: ["celda1.png", "celda2.jpg", "celda3.jpg"],
  },
  {
    id: "sustituto_oseo",
    categoria: "Columna",
    nombre: "Sustituto Óseo en granulos",
    descripcion: "NO INFO",
    medidas: {
      titulo: "Medidas",
      tamano: ["NO INFO"],
    },
    imagenes: ["NO INFO", "NO INFO", "NO INFO"],
  },
];
