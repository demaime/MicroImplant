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
    descripcion:
      "Se utiliza para brindar una estabilidad considerable a la columna vertebral después de la cirugía y puede incluir placas cervicales anteriores, placas cervical posteriores, cableado cervical posterior, cajetines de fusión intervertebral cervical anterior y elementos ortóticos cervicales posoperatorios",
    medidas: {
      titulo: "Medidas",
      tamano: ["de 18 mm a 72 mm"],
    },
    imagenes: [
      "instrumentacion_cervical1.png",
      "instrumentacion_cervical2.png",
      "instrumentacion_cervical3.jpeg",
    ],
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
  {
    id: "reemplazo_total",
    categoria: "Rodilla",
    nombre: "Reemplazo total",
    descripcion: "NO INFO",
    medidas: {
      titulo: "Medidas",
      tamano: ["NO INFO"],
    },
    imagenes: ["NO INFO", "NO INFO", "NO INFO"],
  },
  {
    id: "reemplazo_ligamentos",
    categoria: "Rodilla",
    nombre: "Reemplazo de ligamentos",
    descripcion: "NO INFO",
    medidas: {
      titulo: "Medidas",
      tamano: ["NO INFO"],
    },
    imagenes: ["NO INFO", "NO INFO", "NO INFO"],
  },
  {
    id: "placas_titanio",
    categoria: "Neuro",
    nombre: "Placas de Titanio",
    descripcion:
      "Altamente biocompatibles, utilizados para cirugías craneofaciales en adultos y niños, tratamiento de fracturas en la región maxilofacial, cirugías reconstructivas, osteosíntesis de huesos faciales, cirugías correctivas de deformaciones dento-faciales",
    medidas: [{ titulo: "Diámetros", tamano: ["1.5 mm", "2 mm", "2.4 mm"] }],
    imagenes: [
      "placas_titanio1.png",
      "placas_titanio2.png",
      "placas_titanio3.png",
    ],
  },
  {
    id: "placas_burr",
    categoria: "Neuro",
    nombre: "Placas burr hole",
    descripcion:
      "Microplacas de fijación craneal. Utilizadas para cierre de orificios de trepanación.",
    medidas: [{ titulo: "Diámetros", tamano: ["12 mm", "16 mm", "20 mm"] }],
    imagenes: ["placas_burr1.png", "placas_burr2.png", "placas_burr3.png"],
  },
  {
    id: "mallas",
    categoria: "Neuro",
    nombre: "Mallas",
    descripcion:
      "Fabricadas en titanio, las mallas para craneoplastía se ofrecen en una amplia gama de tamaños, orbitales, simples y dinámicas. Pueden recortarse para obtener un tamaño preciso",
    medidas: [
      { titulo: "Medidas", tamano: ["10 cm x 10 cm", "15 cm x 15 cm"] },
    ],
    imagenes: ["malla1.png", "malla2.png", "malla3.png"],
  },
  {
    id: "tornillos",
    categoria: "Neuro",
    nombre: "Tornillos IMF",
    descripcion:
      "Tornillos autoperforantes diseñados específicamente para la fijación intermaxilar. Indicados en fijación de segmentos óseos o reducción de luxaciones intermaxilares, fracturas condilares, restitución de la oclusión en cirugía ortognática.",
    medidas: [
      {
        titulo: "Diámetro",
        tamano: [
          "1.5 x 6 mm",
          "1.5 x 7 mm",
          "1.5 x 8 mm",
          "1.5 x 9 mm",
          "1.5 x 10 mm",
        ],
      },
    ],
    imagenes: ["tornillo1.jpg", "tornillo2.jpg", "tornillo3.jpg"],
  },
  {
    id: "sistema_metil",
    categoria: "Neuro",
    nombre: "Sistema reconstrucción 3D",
    descripcion: "Confeccionado en metil metacrilato",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["Diseñado a medida"],
      },
    ],
    imagenes: ["NO-INFO"],
  },
  {
    id: "parche",
    categoria: "Neuro",
    nombre: "Parche Dural",
    descripcion:
      "Implante de colágeno indicado como sustituto de la duramadre para su reparación.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["6 cm x 4 cm", "7 cm x 5 cm"],
      },
    ],
    imagenes: ["parche1.jpg", "parche2.png", "parche3.jpg"],
  },
  {
    id: "protesis_charnley",
    categoria: "Cadera",
    nombre: "Prótesis tipo Charnley",
    descripcion:
      "Reemplazo total de Cadera: son producidas en acero inoxidable austenínico y responden a especificaciones internacionales relativas a los aceros usados en implantes para huesos. El diámtro standard y universal de las cabezas es de 22,22mm y su esfericidad es virtualmente perfecta debido a su rectificado y su pulido final.",
    medidas: [
      { titulo: "Tipo", tamano: ["Standard", "Reforzado", "Ultrafino"] },
      { titulo: "Cuello", tamano: ["Corto", "Medio", "Largo", "Extra largo"] },
    ],
    imagenes: [
      "protesis_charnley1.jpg",
      "protesis_charnley2.jpg",
      "protesis_charnley3.jpg",
    ],
  },
  {
    id: "protesis_muller",
    categoria: "Cadera",
    nombre: "Prótesis tipo Muller",
    descripcion:
      "Reemplazo total de Cadera: Prótesis para reemplazo de tallo y acetábulo femoral y cabeza con dispositivo de cemento.",
    medidas: [
      {
        titulo: "Diámetro",
        tamano: ["7.5 mm", "10 mm", "12.5 mm", "15 mm", "17.5 mm"],
      },
    ],
    imagenes: [
      "protesis_muller1.jpg",
      "protesis_muller2.jpg",
      "protesis_muller3.jpg",
    ],
  },
  {
    id: "cotilo_muller",
    categoria: "Cadera",
    nombre: "Cotilos tipo Muller",
    descripcion:
      "Su superficie externa convexa presentan un diseño ranurado especial destinado a mejorar la fijación primaria del cotilo. Esta fijación primaria tiene lugar al impactar el cotilo sobre la cavidad acetabular, la cual previamente habrá sido rellenada de cemento óseo.",
    medidas: [
      {
        titulo: "Diámetro",
        tamano: ["De 40 mm a 60 mm"],
      },
    ],
    imagenes: [
      "cotilo_muller1.jpg",
      "cotilo_muller2.jpg",
      "cotilo_muller3.jpg",
    ],
  },
  {
    id: "cotilo_judet",
    categoria: "Cadera",
    nombre: "Cotilos tipo Judet",
    descripcion: "NO INFO",
    medidas: [
      {
        titulo: "NO INFO",
        tamano: ["NO INFO"],
      },
    ],
    imagenes: ["NO INFO"],
  },
  {
    id: "cupula_bipolar",
    categoria: "Cadera",
    nombre: "Cúpula Bipolar",
    descripcion:
      "Hemi-prótesis de cadera de doble acción, adaptable a cualquier tallo. Es una solución óptima para los procesos de artroplastia parcial de cadera.",
    medidas: [
      {
        titulo: "Diámetro",
        tamano: ["De 41 mm a 53 mm"],
      },
    ],
    imagenes: [
      "cupula_bipolar1.jpg",
      "cupula_bipolar2.jpg",
      "cupula_bipolar3.jpg",
    ],
  },
];
