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
    medidas: [
      { titulo: "Medidas", tamano: ["8 mm", "10 mm", "12 mm", "14 mm"] },
    ],
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
    medidas: [
      { titulo: "Medidas", tamano: ["8 mm", "10 mm", "12 mm", "14 mm"] },
    ],
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
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["4.5 mm", "5 mm", "6 mm", "7 mm", "8 mm"],
      },
    ],
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
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["de 18 mm a 72 mm"],
      },
    ],
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
    nombre: "Celda Mesh - Reemplazo Vertebral",
    descripcion:
      "Realizadas en titanio quirúrgico en una sola pieza, destinadas a reemplazo de cuerpo vertebral cervical, dorsal ó lumbar.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["Varias"],
      },
    ],
    imagenes: ["celda1.png", "celda2.jpg", "celda3.jpg"],
  },
  {
    id: "sustituto_oseo",
    categoria: "Columna",
    nombre: "Sustituto Óseo en granulos",
    descripcion: "NO INFO",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["NO INFO"],
      },
    ],
    imagenes: ["no_dispo.png"],
  },
  {
    id: "sistema_mis",
    categoria: "Columna",
    nombre: "Sistema MIS",
    descripcion:
      "Retractor tubular MIS para laminectomía. Instrumental ideal para la cirugía lumbar mínimamente invasiva.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["Varias"],
      },
    ],
    imagenes: ["sistema_mis1.png", "sistema_mis2.jpg", "sistema_mis3.jpg"],
  },
  {
    id: "reemplazo_total",
    categoria: "Rodilla",
    nombre: "Reemplazo total",
    descripcion: "NO INFO",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["NO INFO"],
      },
    ],
    imagenes: ["no_dispo.png"],
  },
  {
    id: "reemplazo_ligamentos",
    categoria: "Rodilla",
    nombre: "Reemplazo de ligamentos",
    descripcion: "NO INFO",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["NO INFO"],
      },
    ],
    imagenes: ["no_dispo.png"],
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
    imagenes: ["no_dispo.png"],
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
    id: "sonda_pic",
    categoria: "Neuro",
    nombre: "Sonda intraparenquimatosa de Pic",
    descripcion:
      "Mide la presión intraparenquimatosa. Se coloca en el parénquima mediante un agujero de trépano.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["Estándar", "Grande"],
      },
    ],
    imagenes: ["sonda_pic1.jpg", "sonda_pic2.jpg", "sonda_pic3.jpg"],
  },
  {
    id: "protesis_charnley",
    categoria: "Cadera",
    nombre: "Prótesis tipo Charnley",
    descripcion:
      "Reemplazo total de Cadera: son producidas en acero quirúrgico y responden a especificaciones internacionales relativas a los aceros usados en implantes para huesos. El diámtro standard y universal de las cabezas es de 22,22mm y su esfericidad es virtualmente perfecta debido a su rectificado y su pulido final.",
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
    descripcion:
      "Cúpula con cabeza incorporada retentiva para patologías especiales cementado.",
    medidas: [
      {
        titulo: "Diámetro",
        tamano: ["45 mm.", "50 mm.", "55 mm."],
      },
    ],
    imagenes: ["cotilo_judet1.jpg", "cotilo_judet2.jpg", "cotilo_judet3.png"],
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
  {
    id: "placa_clavicula",
    categoria: "Osteo",
    nombre: "Placa p/ Clavícula en Titanio",
    descripcion:
      "Placas para solucionar las fracturas del tercio medio y distal de la clavícula. Son placas de titanio de muy bajo perfil, estas pueden ser mediales, distales o anteriores. Son premoldeadas para semejar la S que forma la clavícula.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["de 5 a 7 orificios", "Largo: de 96mm. a 120mm."],
      },
    ],
    imagenes: [
      "placa_clavicula1.png",
      "placa_clavicula2.png",
      "placa_clavicula3.jpeg",
    ],
  },
  {
    id: "placas_ocho",
    categoria: "Osteo",
    nombre: "Placa pediátrica en 8",
    descripcion:
      "Placa pediátrica en 8 con dos orificios, utilizada en fracturas pediátricas de cóndilo femoral y tibial pediátrico.",
    medidas: [
      {
        titulo: "Largo",
        tamano: ["17 mm."],
      },
    ],
    imagenes: ["placa_ocho1.jpg", "placa_ocho2.jpeg", "placa_ocho3.jpg"],
  },
  {
    id: "placas_tibia",
    categoria: "Osteo",
    nombre: "Placa anatómica p/ tibia",
    descripcion:
      "Esta placa se fabrica en acero y titano; cuenta con un perfil de cuerpo de contacto limitado, agujeros combinados en el cuerpo y orificios para tornillos de bloqueo en la cabeza",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["de 4 a 16 orificios", "Largo: de 96mm. a 252mm."],
      },
    ],
    imagenes: ["placa_tibia1.jpg", "placa_tibia2.jpg", "placa_tibia3.png"],
  },
  {
    id: "placas_acromio",
    categoria: "Osteo",
    nombre: "Placa acromioclavicular",
    descripcion:
      "Sistema de fijación con estabilidad angular para fracturas de la clavícula lateral y lesiones de la articulación acromioclavicular.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["de 2 a 4 orificios", "de 59mm. a 79mm."],
      },
    ],
    imagenes: [
      "placa_acromio1.jpeg",
      "placa_acromio2.jpeg",
      "placa_acromio3.jpeg",
    ],
  },
  {
    id: "placas_dcp",
    categoria: "Osteo",
    nombre: "Placa DCP bloqueada - Titanio",
    descripcion:
      "Placa de Compresión Dinámica (DCP) para reducción de fracturas de miembro inferior y superior.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["de 4 a 14 orificios", "en Titanio o Acero"],
      },
    ],
    imagenes: ["placa_dcp1.jpg", "placa_dcp2.png", "placa_dcp3.png"],
  },
  {
    id: "placas_perone",
    categoria: "Osteo",
    nombre: "Placa peroné distal anatómica",
    descripcion:
      "Placa de titanio premoldeada de ajuste anatómico con agujeros combinados. Las muescas presentes en su cuerpo permiten doblarla lateralmente para adaptarla a las características anatómicas individuales del peroné.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["de 5 a 9 orificios", "de 90mm. a 140mm."],
      },
    ],
    imagenes: ["placa_perone1.jpg", "placa_perone2.jpg", "placa_perone3.png"],
  },
  {
    id: "placas_pilon",
    categoria: "Osteo",
    nombre: "Placa p/ pilón tibial",
    descripcion:
      "Placas utilizadas en fracturas del pilón tibial, que comprenden fracturas de la extremidad distal de la tibia, con progresión a la articulación del tobillo.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["de 4 a 16 orificios", "de 96mm. a 260mm."],
      },
    ],
    imagenes: ["placa_pilon1.png", "placa_pilon2.jpg", "placa_pilon3.jpg"],
  },
  {
    id: "placas_lambda",
    categoria: "Osteo",
    nombre: "Placa lambda p/ pie ",
    descripcion:
      "Placa lambda bloqueada con el uso de tornillos bloqueados. Los agujeros en ángulo y ascendentes soportan la apófisis menor del calcáneo y proporcionan un mejor apoyo de la superficie articular calcáneoastragalina.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["Chica", "Mediana", "Grande", "Izquierda y Derecha"],
      },
    ],
    imagenes: ["placa_lambda1.jpg", "placa_lambda2.jpeg", "placa_lambda3.jpg"],
  },
  {
    id: "placas_humero",
    categoria: "Osteo",
    nombre: "Placas miembro superior",
    descripcion:
      "Placas húmero distal, olecranón y paleta humeral. Están contorneadas anatómicamente para solucionar las fracturas de forma tal que permiten el montaje paralelo y perpendicular.",
    medidas: [
      {
        titulo: "Medidas",
        tamano: ["de 4 a 18 orificios"],
      },
    ],
    imagenes: ["placa_humero1.jpg", "placa_humero2.jpg", "placa_humero3.png"],
  },
  {
    id: "clavos_gamma",
    categoria: "Osteo",
    nombre: "Clavos gamma",
    descripcion:
      "En acero y titanio. Reduce el brazo de palanca entre las fuerzas que actúan a través de la cadera y el eje mecánico del implante, mejorando las condiciones de solicitación mecánica del mismo y, por tanto, su resistencia a la fatiga del material.",
    medidas: [
      {
        titulo: "Angulaciones",
        tamano: [
          "Cortos: 125°, 130° y 135°",
          "Largos: 130°",
          "de 340mm. a 400mm.",
        ],
      },
    ],
    imagenes: ["clavos_gamma1.jpg", "clavos_gamma2.jpg", "clavos_gamma3.jpg"],
  },
];
