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
];
