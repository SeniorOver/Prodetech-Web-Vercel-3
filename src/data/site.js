export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Máquinas', href: '#maquinas' },
  { label: 'Aplicaciones', href: '#aplicaciones' },
  { label: 'Repuestos', href: '#repuestos' },
  { label: 'Soporte', href: '#soporte' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export const stats = [
  { value: '03', label: 'Tecnologías láser', detail: 'Diodo · CO₂ · Fibra' },
  { value: '06', label: 'Pasos de acompañamiento', detail: 'De la asesoría al soporte' },
  { value: '100%', label: 'Asesoría personalizada', detail: 'Según tu material y objetivo' },
  { value: 'EC', label: 'Cobertura nacional', detail: 'Desde Quito a todo Ecuador' },
]

export const benefits = [
  {
    icon: 'compass',
    number: '01',
    title: 'Asesoría antes de vender',
    text: 'Revisamos qué quieres fabricar, qué material usarás y cuánto necesitas producir antes de recomendarte un equipo.',
  },
  {
    icon: 'ship',
    number: '02',
    title: 'Importación y configuración',
    text: 'Importamos equipos y componentes desde EE. UU. y China. Configuramos la máquina según tu operación y presupuesto.',
  },
  {
    icon: 'graduation',
    number: '03',
    title: 'Capacitación práctica',
    text: 'Aprendes a usar el equipo, configurar el software y trabajar tus primeras piezas con acompañamiento real.',
  },
  {
    icon: 'wrench',
    number: '04',
    title: 'Soporte y repuestos',
    text: 'Lentes, rotativos, air assist, boquillas y componentes. Respuesta técnica de personas que conocen la tecnología.',
  },
  {
    icon: 'layers',
    number: '05',
    title: 'Configuración a medida',
    text: 'Potencia, área de trabajo, controlador y accesorios: armamos la combinación que se ajusta a tu producción.',
  },
  {
    icon: 'handshake',
    number: '06',
    title: 'Acompañamiento postventa',
    text: 'La compra no termina en la entrega. Seguimos cerca para que tu equipo produzca y tu negocio avance.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Conversamos tu proyecto',
    text: 'Nos cuentas qué quieres fabricar, en qué material y con qué presupuesto. Sin compromiso.',
  },
  {
    number: '02',
    title: 'Definimos el equipo',
    text: 'Comparamos tecnologías, potencias y áreas de trabajo para recomendarte la opción correcta.',
  },
  {
    number: '03',
    title: 'Cotizamos y coordinamos',
    text: 'Recibes una propuesta clara con configuración, accesorios, tiempos y forma de entrega.',
  },
  {
    number: '04',
    title: 'Preparamos tu máquina',
    text: 'Importamos, revisamos y configuramos el equipo antes de que llegue a tus manos.',
  },
  {
    number: '05',
    title: 'Entregamos y capacitamos',
    text: 'Instalación, puesta en marcha y capacitación para que empieces a producir con confianza.',
  },
  {
    number: '06',
    title: 'Seguimos contigo',
    text: 'Soporte técnico, repuestos y orientación para que tu operación no se detenga.',
  },
]

export const applications = [
  {
    id: 'madera',
    number: '01',
    title: 'Madera y MDF',
    description:
      'Señalética, decoración, cajas, llaveros, maquetas y piezas a medida. El CO₂ entrega cortes limpios y el diodo es ideal para empezar.',
    tech: ['CO₂', 'Diodo'],
    examples: ['Letreros decorativos', 'Cajas y empaques', 'Llaveros', 'Cuadros y mapas', 'Maquetas', 'Mobiliario'],
    sample: 'plaque',
  },
  {
    id: 'acrilico',
    number: '02',
    title: 'Acrílico y plásticos',
    description:
      'Letreros luminosos, exhibidores, señalética, reconocimientos y displays. El corte CO₂ deja bordes pulidos y listos para iluminar.',
    tech: ['CO₂'],
    examples: ['Letreros luminosos', 'Exhibidores', 'Reconocimientos', 'Señalética', 'Displays', 'Accesorios'],
    sample: 'sign',
  },
  {
    id: 'metal',
    number: '03',
    title: 'Metal y herramientas',
    description:
      'Marcado permanente sobre acero, aluminio, latón e inoxidable. Placas, herramientas, termos y piezas industriales con acabado profesional.',
    tech: ['Fibra', 'MOPA'],
    examples: ['Placas metálicas', 'Herramientas', 'Termos', 'Joyería', 'Piezas industriales', 'Medallas'],
    sample: 'tag',
  },
  {
    id: 'cuero',
    number: '04',
    title: 'Cuero y textiles',
    description:
      'Grabado y corte de cuero, denim, fieltro y telas compatibles. Parches, cinturones, carteras y detalles personalizados.',
    tech: ['Diodo', 'CO₂'],
    examples: ['Parches', 'Cinturones', 'Carteras', 'Gorras', 'Denim', 'Etiquetas'],
    sample: 'patch',
  },
  {
    id: 'personalizacion',
    number: '05',
    title: 'Personalización y regalos',
    description:
      'Convierte objetos cotidianos en productos únicos: termos, tablas, agendas, medallas y regalos corporativos con tu marca.',
    tech: ['Diodo', 'CO₂', 'Fibra'],
    examples: ['Termos', 'Tablas', 'Agendas', 'Regalos corporativos', 'Medallas', 'Accesorios'],
    sample: 'tumbler',
  },
]

export const parts = [
  {
    title: 'Lentes y óptica',
    text: 'Lentes ZnSe de distintos diámetros y distancias focales para CO₂.',
  },
  {
    title: 'Rotativos',
    text: 'Para grabar termos, tazas, tubos y piezas cilíndricas en fibra.',
  },
  {
    title: 'Air Assist',
    text: 'Sistemas de aire para cortes más limpios y mayor vida de la lente.',
  },
  {
    title: 'Electrónica',
    text: 'Drivers, controladores, fuentes y componentes de reposición.',
  },
  {
    title: 'Consumibles',
    text: 'Boquillas, espejos, correas y elementos de mantenimiento.',
  },
  {
    title: 'Asesoría de repuesto',
    text: 'Te ayudamos a identificar la pieza exacta con fotos y modelo.',
  },
]

export const faqs = [
  {
    question: '¿Qué máquina láser necesito para mi proyecto?',
    answer:
      'Depende del material, el tamaño de las piezas y el volumen de producción. Si nos cuentas qué quieres fabricar y cuánto necesitas producir, te orientamos sobre la tecnología, potencia y área de trabajo adecuadas.',
  },
  {
    question: '¿Venden e instalan en todo Ecuador?',
    answer:
      'Sí. Trabajamos desde Quito y coordinamos entregas a distintas ciudades del país. Las condiciones de envío, instalación y capacitación se definen según el equipo y tu ubicación.',
  },
  {
    question: '¿La máquina incluye capacitación?',
    answer:
      'Sí. Acompañamos la puesta en marcha y te orientamos en el uso del equipo, la configuración del software y tus primeras aplicaciones. La modalidad se coordina según tu ciudad y disponibilidad.',
  },
  {
    question: '¿Qué incluye la cotización?',
    answer:
      'La cotización detalla el equipo, la configuración, los accesorios incluidos, los tiempos estimados y las condiciones de entrega. Si necesitas un accesorio adicional, lo agregamos antes de cerrar la compra.',
  },
  {
    question: '¿Tienen repuestos y accesorios?',
    answer:
      'Sí. Manejamos lentes, rotativos, sistemas de aire, boquillas, componentes electrónicos y consumibles para las líneas de diodo, CO₂ y fibra. Si no tienes el dato exacto de la pieza, ayúdanos con una foto y el modelo del equipo.',
  },
  {
    question: '¿Cómo funciona la garantía y el soporte?',
    answer:
      'La garantía depende del equipo y la configuración; se detalla por escrito en la cotización. El soporte técnico y la disponibilidad de repuestos se coordinan directamente con nuestro equipo.',
  },
  {
    question: '¿Puedo ver una demostración antes de comprar?',
    answer:
      'Sí. Podemos coordinar una demostración en Quito o una videollamada para mostrarte el equipo, resolver dudas y revisar muestras de corte o grabado según la tecnología.',
  },
  {
    question: '¿Ofrecen opciones de pago?',
    answer:
      'Coordinamos las opciones disponibles según el equipo, la configuración y el monto de la operación. Escríbenos con el modelo que te interesa y te compartimos las alternativas vigentes.',
  },
]
