import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'Preescoludi',
    category: 'EDUCATION · WEB',
    year: '2026',
    cover: './projects/preescoludi.png',
    screenshots: [
      './projects/preescoludi.png',
      './projects/preescoludi-menu.png',
      './projects/preescoludi-vocales.png',
      './projects/preescoludi-numeros.png',
      './projects/preescoludi-letras.png',
      './projects/preescoludi-colores.png',
      './projects/preescoludi-formas.png'
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://www.preescoludi.com.co/',
    content: {
      es: {
        title: 'Preescoludi',
        summary: 'Plataforma educativa interactiva para niños en edad preescolar.',
        challenge:
          'Una docente de preescolar enfrentaba dificultades para que los niños y niñas reforzaran lo visto en clase una vez salían del aula, ya que las dinámicas tradicionales perdían interés fuera del entorno escolar.',
        solution:
          'Se desarrolló una plataforma web interactiva con los temas solicitados por la docente, integrando menús visuales, juegos personalizados, instrucciones de voz paso a paso y recursos dinámicos para hacer el aprendizaje más entretenido y accesible desde casa.',
        details:
          'Recursos educativos interactivos y multimediales diseñados para que los niños y niñas naveguen de forma intuitiva y sepan qué hacer en cada módulo, junto con una adaptación responsiva a cualquier tamaño de pantalla para que no haya límites al momento de aprender.',
        imageAlt: 'Vista de la plataforma Preescoludi.',
      },
      en: {
        title: 'Preescoludi',
        summary: 'Interactive educational platform for preschool children.',
        challenge:
          'A preschool teacher faced difficulties in helping children reinforce what they learned in class once they left the classroom, as traditional activities lost their appeal outside the school environment.',
        solution:
          'An interactive web platform was developed with the topics requested by the teacher, integrating visual menus, personalized games, step-by-step voice instructions, and dynamic resources to make learning more engaging and accessible from home.',
        details:
          'Interactive and multimedia educational resources designed for children to navigate intuitively and know what to do in each module, along with a responsive adaptation to any screen size to ensure there are no limitations when learning.',
        imageAlt: 'Preescoludi platform overview',
      },
    },
  },
  {
    id: 'Delicias_Cataleya',
    category: 'BUSINESS · OPERATIONS',
    year: '2025',
    cover: './projects/delicias-inicio.png',
    screenshots: [
      './projects/delicias-inicio.png',
      './projects/delicias-catalogo.png',
      './projects/delicias-contacto.png',
      './projects/delicias-sesion.png',
      './projects/delicias-admin.png',
      './projects/delicias-inventario.png',
      './projects/delicias-ventas.png',
      './projects/delicias-inform.png',
      './projects/delicias-usuarios.png',
      './projects/delicias-perfil.png'
    ],
    stack: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'Oracle SQL', 'JSON'],
    githubUrl: 'https://deliciasdecataleya.ibatecthtec.com/index.php',
    content: {
      es: {
        title: 'Delicias de Cataleya',
        summary: 'Una plataforma web adaptada a las necesidades de la empresa.',
        challenge:
          'La empresa operaba mediante procesos manuales y desconectados entre sí, lo que provocaba pérdida de información, descontrol en el inventario y desconocimiento del estado real de sus cuentas.',
        solution:
          'Se desarrolló una plataforma web que integra y centraliza todas las operaciones diarias de la panadería, ofreciendo una visión unificada del negocio con actualizaciones en tiempo real entre ventas, inventario y reportes.',
        details:
          'Incluye un portal inicial con información de la empresa y un sistema administrativo integral con separación de roles y permisos. Permite la gestión de inventario, registro e informes de ventas en tiempo real, administración de empleados con acceso a la plataforma y gestión del perfil personal. ',
        imageAlt: 'Vista a Delicias de Cataleya',
      },
      en: {
        title: 'Delicias de Cataleya',
        summary: 'A web platform adapted to the needs of the company.',
        challenge:
          'The company operated through manual and disconnected processes, leading to information loss, inventory mismanagement, and lack of awareness of the actual state of its accounts.',
        solution:
          'A web platform was developed that integrates and centralizes all daily operations of the bakery, providing a unified view of the business with real-time updates between sales, inventory, and reports.',
        details:
          'It includes an initial portal with company information and a comprehensive administrative system with role separation and permissions. It allows inventory management, real-time sales recording and reporting, employee administration with platform access, and personal profile management.',
        imageAlt: 'Delicias de Cataleya overview',
      },
    },
  },
  {
    id: 'PuppyShop',
    category: 'BUSINESS · OPERATIONS',
    year: '2025',
    cover: './projects/puppy-inicio.png',
    screenshots: [
      './projects/puppy-inicio.png',
      './projects/puppy-servicios.png',
      './projects/puppy-agendar.png',
      './projects/puppy-admin.png',
      './projects/puppy-citas.png',
      './projects/puppy-productos.png',
      './projects/puppy-gesServ.png',
      './projects/puppy-usuarios.png',
      './projects/puppy-pedidos.png'
    ],
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Oracle SQL'],
    githubUrl: 'https://github.com/Sam-And3s/veterinaria',
    content: {
      es: {
        title: 'PuppyShop',
        summary: 'Una plataforma web para la gestión de una Veterinaria.',
        challenge:
          'La veterinaria manejaba sus operaciones de forma fragmentada, lo que dificultaba llevar un control claro sobre el agendamiento de citas, las ventas y el flujo diario de clientes y pacientes.',
        solution:
          'Se desarrolló un ecosistema web todo en uno con dos entornos conectados: un portal para clientes con agendamiento de citas, compra de productos y seguimiento de pedidos, y un panel administrativo con estadísticas y gestión en tiempo real que actualiza dinámicamente el contenido del sitio público.',
        details:
          'Combina un sitio informativo autogestionable, un portal de clientes para agendar citas, comprar productos y revisar entregas pendientes, y un panel administrativo completo. Desde el panel se visualizan estadísticas en tiempo real y se gestionan horarios, citas, inventario, ventas, clientes y la información del equipo médico que se refleja en la página principal.',
        imageAlt: 'Vista general de PuppyShop',
      },
      en: {
        title: 'PuppyShop',
        summary: 'A web platform for managing a veterinary clinic.',
        challenge:
          'The veterinary clinic managed its operations in a fragmented manner, making it difficult to maintain clear control over appointment scheduling, sales, and the daily flow of clients and patients.',
        solution:
          'An all-in-one web ecosystem was developed with two connected environments: a client portal for appointment scheduling, product purchases, and order tracking, and an administrative panel with real-time statistics and management that dynamically updates the public site content.',
        details:
          'It combines a self-managed informational site, a client portal for scheduling appointments, purchasing products, and reviewing pending deliveries, and a comprehensive administrative panel. From the panel, real-time statistics can be viewed, and schedules, appointments, inventory, sales, clients, and medical team information reflected on the main page can be managed.',
        imageAlt: 'PuppyShop overview',
      },
    },
  },
  {
    id: 'HR-APEX',
    category: 'BUSINESS · OPERATIONS',
    year: '2026',
    cover: './projects/apex-inicio.png',
    screenshots: [
      './projects/apex-inicio.png',
      './projects/apex-dash.png',
      './projects/apex-empl.png',
      './projects/apex-nomina.png',
      './projects/apex-reportes.png',
      './projects/apex-audi.png',
      './projects/apex-users.png'
    ],
    stack: ['Oracle APEX', 'PL/SQL', 'DataModeler', 'SQL Developer'],
    githubUrl: 'https://oracleapex.com/ords/r/diplomado_oracle_ut_cipa_/hr-apex/login?session=10067523929615',
    content: {
      es: {
        title: 'HR-APEX',
        summary: 'Una plataforma web para la gestión de nomina y recursos humanos.',
        challenge:
          'La empresa manejaba sus procesos de nómina y gestión de talento humano de forma fragmentada, lo que dificultaba mantener la trazabilidad sobre el historial de los empleados, la liquidación de pagos y las novedades administrativas.',
        solution:
          'Se desarrolló una aplicación empresarial en Oracle APEX que centraliza la administración de recursos humanos y nómina en un solo entorno, garantizando integridad de datos y sincronización en tiempo real entre registros de personal, liquidaciones y auditoría.',
        details:
          'Sistema empresarial con división de roles y permisos que permite administrar la información de empleados activos e inactivos, gestionar el perfil personal de cada colaborador, procesar la nómina y los pagos del personal activo, y generar reportes detallados junto con registros de auditoría sobre las operaciones realizadas en la plataforma.',
        imageAlt: 'Vista general de HR-APEX',
      },
      en: {
        title: 'HR-APEX',
        summary: 'A web platform for managing payroll and human resources.',
        challenge:
          'The company managed its payroll and human resources processes in a fragmented manner, making it difficult to maintain traceability of employee history, payment settlements, and administrative updates.',
        solution:
          'An enterprise application was developed in Oracle APEX that centralizes human resources and payroll management in a single environment, ensuring data integrity and real-time synchronization between personnel records, settlements, and auditing.',
        details:
          'Enterprise system with role and permission division that allows managing information of active and inactive employees, managing each employee\'s personal profile, processing payroll and payments for active staff, and generating detailed reports along with audit records of operations performed on the platform.',
        imageAlt: 'HR-APEX overview',
      },
    },
  },
  {
    id: 'PequenosPoliglotas',
    category: 'EDUCATION · WEB',
    year: '2026',
    cover: './projects/peque-inicio.png',
    screenshots: [
      './projects/peque-inicio.png',
      './projects/peque-act1.png',
      './projects/peque-act2.png',
      './projects/peque-act3.png',
      './projects/peque-act4.png'
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://sam-and3s.github.io/PequenosPoliglotas/',
    content: {
      es: {
        title: 'Pequeños Políglotas',
        summary: 'Una plataforma web educativa enfocada en el aprendizaje de animales en el idioma de italiano para niños y niñas de todas las edades.',
        challenge:
          'La cliente necesitaba presentar un proyecto educativo de forma lúdica y diferenciadora, centrado en una temática específica que captara la atención de un público infantil.',
        solution:
          'Se desarrolló una plataforma web interactiva diseñada para que niños y niñas de distintas edades aprendan el vocabulario de los animales en italiano a través de dinámicas visuales, auditivas y juegos integrados en un mismo entorno.',
        details:
          'Combina actividades lúdicas propias con recursos visuales y pronunciación en audio, junto con la integración fluida mediante iframes de juegos interactivos externos, logrando una experiencia web dinámica e intuitiva para aprender italiano.',
        imageAlt: 'Vista general de Pequeños Políglotas',
      },
      en: {
        title: 'Pequeños Políglotas',
        summary: 'An educational web platform focused on learning animals in Italian for children of all ages.',
        challenge:
          'The client needed to present an educational project in a playful and distinctive way, centered on a specific theme that would capture the attention of a young audience.',
        solution:
          'An interactive web platform was developed, designed for children of different ages to learn animal vocabulary in Italian through visual and auditory dynamics, as well as integrated games within the same environment.',
        details:
          'It combines its own playful activities with visual resources and audio pronunciation, along with seamless integration of external interactive games through iframes, creating a dynamic and intuitive web experience for learning Italian.',
        imageAlt: 'Pequeños Políglotas overview',
      },
    },
  },
  {
    id: 'Aprendiendojuntos',
    category: 'EDUCATION · WEB',
    year: '2026',
    cover: './projects/apren-inicio.png',
    screenshots: [
      './projects/apren-inicio.png',
      './projects/apren-videos.png',
      './projects/apren-cuentos.png',
      './projects/apren-pract.png',
      './projects/apren-participa.png'
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://sam-and3s.github.io/AprendiendoYCreciendoJuntos/',
    content: {
      es: {
        title: 'Aprendiendo Y Creciendo Juntos',
        summary: 'Una plataforma web educativa enfocada en el aprendizaje y refuerzo de ortografía para niños y niñas de todas las edades.',
        challenge:
          'Los clientes necesitaban presentar un recurso educativo atractivo y diferente, enfocado en la ortografía e integrando dinámicas variadas para despertar el interés de los niños y niñas por escribir y leer bien.',
        solution:
          'Se desarrolló una plataforma web interactiva para aprender y reforzar la ortografía básica mediante cuentos con preguntas al cierre, videos explicativos de creadores y actividades lúdicas.',
        details:
          'Integra cuentos con preguntas al final, videos de creadores y juegos externos embebidos mediante iframes, todo enfocado en practicar ortografía básica dentro de una interfaz dinámica e intuitiva.',
        imageAlt: 'Vista general de Aprendiendo Y Creciendo Juntos',
      },
      en: {
        title: 'Aprendiendo Y Creciendo Juntos',
        summary: 'An educational web platform focused on learning and reinforcing spelling for children of all ages.',
        challenge:
          'The clients needed to present an attractive and different educational resource, focused on spelling and integrating varied dynamics to spark children´s interest in writing and reading well.',
        solution:
          'An interactive web platform was developed to learn and reinforce basic spelling through stories with questions at the end, explanatory videos from creators, and playful activities.',
        details:
          'It integrates stories with questions at the end, creator videos, and external games embedded through iframes, all focused on practicing basic spelling within a dynamic and intuitive interface.',
        imageAlt: 'Aprendiendo Y Creciendo Juntos overview',
      },
    },
  },
  {
    id: 'FabricaPalabras',
    category: 'EDUCATION · WEB',
    year: '2026',
    cover: './projects/fabri-inicio.png',
    screenshots: [
      './projects/fabri-inicio.png',
      './projects/fabri-act1.png',
      './projects/fabri-act2.png',
      './projects/fabri-act3.png',
      './projects/fabri-act4.png',
      './projects/fabri-act5.png',
      './projects/fabri-OVA.png'
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://sam-and3s.github.io/FabricaDePalabras/',
    content: {
      es: {
        title: 'La Fábrica Mágica de las Palabras',
        summary: 'Una plataforma web educativa enfocada en el aprendizaje de palabras nuevas para niños y niñas de todas las edades.',
        challenge:
          'Los clientes necesitaban un Objeto Virtual de Aprendizaje (OVA) atractivo y diferente, enfocado en el aprendizaje de palabras e integrando dinámicas variadas para despertar el interés de los niños y niñas por aprender.',
        solution:
          'Se desarrolló una OVA web interactiva con guía de voz en cada paso para aprender palabras de forma dinámica, combinando un avance secuencial por botones con la libertad de saltar a cualquier módulo desde el navbar.',
        details:
          'Incluye una sección de descripción general de la OVA y cinco actividades propias centradas en relacionar cada palabra con su descripción, cómo suena y cómo se escribe.',
        imageAlt: 'Vista general de La Fábrica Mágica de las Palabras',
      },
      en: {
        title: 'La Fábrica Mágica de las Palabras',
        summary: 'An educational web platform focused on learning and reinforcing spelling for children of all ages.',
        challenge:
          'The clients needed an engaging and unique Virtual Learning Object (VLO) focused on vocabulary learning and incorporating a variety of activities to spark children´s interest in learning.',
        solution:
          'An interactive web VLO was developed with voice guidance at each step to learn words dynamically, combining sequential navigation through buttons with the freedom to jump to any module from the navbar.',
        details:
          'It includes an overview section of the VLO and five custom activities focused on associating each word with its description, sound, and spelling.',
        imageAlt: 'La Fábrica Mágica de las Palabras overview',
      },
    },
  },
  {
    id: 'blog-personalizado',
    category: 'BLOG · WEB',
    year: '2026',
    cover: './projects/blog-inicio.png',
    screenshots: [
      './projects/blog-inicio.png',
      './projects/blog-vista1.png',
      './projects/blog-vista2.png',
      './projects/blog-vista3.png'
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://sam-and3s.github.io/BlogProyecto/index.html',
    content: {
      es: {
        title: 'Blog Personalizado',
        summary: 'Una web informativa a modo de expocición de un tema específico.',
        challenge:
          'La cliente necesitaba presentar un tema específico de manera diferenciadora y atractiva, evitando el formato tradicional de texto plano y estático.',
        solution:
          'Se desarrolló una página web estática organizada por módulos interactivos que estructura los contenidos de forma clara y directa, apoyada en recursos visuales.',
        details:
          'Organiza los contenidos en módulos interactivos con apoyo gráfico y visual para exponer cada tema de forma clara, dinámica e intuitiva, evitando bloques extensos de texto plano.',
        imageAlt: 'Vista general de Blog Personalizado',
      },
      en: {
        title: 'Personalized Blog',
        summary: 'An informative website designed to showcase a specific topic.',
        challenge:
          'The client needed to present a specific topic in a distinctive and engaging manner, avoiding the traditional format of plain and static text.',
        solution:
          'A static web page was developed, organized into interactive modules that structure the content clearly and directly, supported by visual resources.',
        details:
          'It organizes the content into interactive modules with graphic and visual support to present each topic clearly, dynamically, and intuitively, avoiding long blocks of plain text.',
        imageAlt: 'Personalized Blog overview',
      },
    },
  },
];
