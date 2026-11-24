import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'learning-insights',
    category: 'EDTECH · ANALYTICS',
    year: '2025',
    cover: './projects/learning-insights-overview.svg',
    screenshots: [
      './projects/learning-insights-overview.svg',
      './projects/learning-insights-courses.svg',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/tu-usuario/learning-insights',
    content: {
      es: {
        title: 'Learning Insights',
        summary: 'Analítica clara para equipos de aprendizaje digital.',
        challenge:
          'Los equipos LMS necesitaban entender la participación de sus estudiantes sin depender de reportes lentos y difíciles de interpretar.',
        solution:
          'Un panel accesible con métricas de avance, filtros por curso y visualizaciones que ayudan a encontrar tendencias de un vistazo.',
        details:
          'La estructura separa la experiencia del dashboard de la agregación de datos. Incluye vistas por curso, indicadores de finalización y una interfaz responsive pensada para uso diario.',
        imageAlt: 'Vista del panel de métricas de Learning Insights',
      },
      en: {
        title: 'Learning Insights',
        summary: 'Clear analytics for digital learning teams.',
        challenge:
          'LMS teams needed to understand student engagement without relying on slow, hard-to-read reports.',
        solution:
          'An accessible dashboard with progress metrics, course filters, and visualizations that make trends easy to spot.',
        details:
          'The architecture separates the dashboard experience from data aggregation. It includes course views, completion indicators, and a responsive interface designed for everyday use.',
        imageAlt: 'Learning Insights metrics dashboard view',
      },
    },
  },
  {
    id: 'course-flow',
    category: 'LMS · PRODUCT',
    year: '2024',
    cover: './projects/course-flow-overview.svg',
    screenshots: [
      './projects/course-flow-overview.svg',
      './projects/course-flow-learning.svg',
    ],
    stack: ['React', 'Tailwind CSS', 'Spring Boot', 'Oracle PL/SQL'],
    githubUrl: 'https://github.com/tu-usuario/course-flow',
    content: {
      es: {
        title: 'Course Flow',
        summary: 'Una experiencia LMS más simple para estudiantes.',
        challenge:
          'Encontrar la próxima clase y entender el avance del curso requería navegar por demasiadas pantallas.',
        solution:
          'Una experiencia de aprendizaje unificada que destaca el siguiente paso y hace visible el progreso personal.',
        details:
          'La experiencia organiza módulos, clases y avance alrededor de la tarea siguiente. El backend tipado expone recursos LMS y Oracle PL/SQL gestiona datos académicos estructurados.',
        imageAlt: 'Resumen del curso y progreso de Course Flow',
      },
      en: {
        title: 'Course Flow',
        summary: 'A simpler LMS experience for learners.',
        challenge:
          'Finding the next lesson and understanding course progress took too much navigation.',
        solution:
          'A unified learning experience that highlights the next step and makes personal progress easy to see.',
        details:
          'The experience organizes modules, lessons, and progress around the next task. A typed backend exposes LMS resources, while Oracle PL/SQL manages structured academic data.',
        imageAlt: 'Course Flow course overview and progress',
      },
    },
  },
  {
    id: 'data-studio',
    category: 'DATA · OPERATIONS',
    year: '2024',
    cover: './projects/data-studio-overview.svg',
    screenshots: [
      './projects/data-studio-overview.svg',
      './projects/data-studio-records.svg',
    ],
    stack: ['TypeScript', 'Node.js', 'MongoDB', 'Oracle PL/SQL'],
    githubUrl: 'https://github.com/tu-usuario/data-studio',
    content: {
      es: {
        title: 'Data Studio',
        summary: 'Una forma ordenada de explorar operaciones y registros.',
        challenge:
          'La información operativa estaba repartida entre consultas y reportes con formatos distintos.',
        solution:
          'Un espacio central de exploración con búsqueda rápida, estados legibles y una estructura preparada para varias fuentes.',
        details:
          'La solución reúne registros de distintos dominios en vistas consistentes. El modelado distingue entre documentos flexibles y datos relacionales, y permite filtrar rápidamente los registros recientes.',
        imageAlt: 'Vista general del espacio de operaciones Data Studio',
      },
      en: {
        title: 'Data Studio',
        summary: 'A more organized way to explore operations and records.',
        challenge:
          'Operational information was scattered across queries and reports with inconsistent formats.',
        solution:
          'A central exploration space with quick search, readable statuses, and a structure ready for multiple data sources.',
        details:
          'The solution brings records from different domains into consistent views. Its data model distinguishes flexible documents from relational data and makes recent records easy to filter.',
        imageAlt: 'Data Studio operations overview',
      },
    },
  },
];
