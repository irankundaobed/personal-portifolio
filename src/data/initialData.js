// Initial data for the portfolio

export const initialProjects = [
  // Live Projects
  {
    id: 1,
    title: 'Church Attendance System',
    description: 'Full-stack Samuduha SDA chucrh , attendance system that record the availability of worshipers . currently still updating some features',
    status: 'live',
    technologies: ['javascript', 'css', 'html', 'SQL'],
    image: '📖',
    github: 'https://github.com/irankundaobed',
    live: 'https://samuduha-sda-attendance.vercel.app',
    // Detailed information
    overview: 'a web application that help the church to correct the worshiper attendance records remotely , in order to save time and stress.',
    keyFeatures: [
      'recording user data',
      'secure the worshiper data',
      'Secure user authentication with JWT tokens',
      'Payment gateway integration (MoMo)',
      'store recorded history',
      'Admin dashboard for creating and managing the recorders',
      'Responsive design optimized for all devices',
      'Email notifications for order confirmations',
      'Product reviews and ratings system'
    ],
    challenges: [
      {
        title: 'Payment Security',
        description: 'Implementing secure payment processing while maintaining PCI compliance and protecting sensitive customer data.',
        solution: 'Integrated MoMo API with server-side validation and encryption. All payment data is tokenized and never stored in our database.'
      },
      {
        title: 'Real-time Inventory',
        description: 'Managing product inventory across multiple users to prevent overselling.',
        solution: 'Implemented database transactions with row-level locking and real-time WebSocket updates to sync inventory across all sessions.'
      },
      {
        title: 'Performance Optimization',
        description: 'Handling large product catalogs and high-resolution images without sacrificing load times.',
        solution: 'Implemented lazy loading, image optimization with WebP format, CDN integration, and database query optimization with proper indexing.'
      }
    ],
    techDetails: [
      {
        name: 'React',
        purpose: 'Building dynamic and interactive user interface components with efficient state management using Context API and custom hooks.'
      },
      {
        name: 'Node.js & Express',
        purpose: 'Creating robust RESTful API endpoints for product management, user authentication, and order processing with middleware for security.'
      },
      {
        name: 'SQL Database',
        purpose: 'Storing product data, user information, and order history with optimized queries and proper indexing for fast retrieval.'
      },
      {
        name: 'TailwindCSS',
        purpose: 'Implementing responsive design with utility-first CSS approach, ensuring consistent styling across all pages.'
      }
    ],
    impact: 'Targeting to support the church elders to record worhiper availability , and save time for other programs to run effectively.'
  },
  // Upcoming Projects
  {
    id: 2,
    title: 'Blog CMS',
    description: 'Content management system for blogging with admin panel, rich text editor, and media management. Currently in development with core features being implemented.',
    status: 'upcoming',
    technologies: ['React', 'Node.js', 'SQL', 'Express'],
    image: '📝',
    github: 'https://github.com/yourusername/blog-cms',
    live: '',
    expectedLaunch: 'Q3 2026',
    // Detailed information
    overview: 'A powerful content management system designed for bloggers and content creators. The platform provides an intuitive interface for creating, managing, and publishing blog posts with advanced features like SEO optimization, media management, and analytics.',
    keyFeatures: [
      'Rich text editor with Markdown support',
      'Drag-and-drop media upload and management',
      'SEO optimization tools (meta tags, sitemap generation)',
      'Multi-author support with role-based permissions',
      'Post scheduling and draft management',
      'Comment moderation system',
      'Built-in analytics dashboard',
      'Customizable themes and templates',
      'Category and tag management',
      'Social media sharing integration'
    ],
    challenges: [
      {
        title: 'Rich Text Editing',
        description: 'Creating a user-friendly editor that supports various content types while maintaining clean HTML output.',
        solution: 'Implementing a custom editor based on Draft.js with custom plugins for embedded media, code highlighting, and responsive image handling.'
      },
      {
        title: 'Media Management',
        description: 'Handling large media files efficiently with automatic optimization and CDN integration.',
        solution: 'Building an upload pipeline with automatic image compression, format conversion, and cloud storage integration using AWS S3.'
      },
      {
        title: 'SEO Implementation',
        description: 'Ensuring blog posts are properly optimized for search engines without requiring technical knowledge from users.',
        solution: 'Developing automated SEO tools that generate meta tags, analyze content readability, and suggest improvements based on best practices.'
      }
    ],
    techDetails: [
      {
        name: 'React',
        purpose: 'Building a dynamic admin panel with real-time preview, component-based architecture for reusable UI elements.'
      },
      {
        name: 'Node.js & Express',
        purpose: 'Creating RESTful API for content management, authentication system, and file upload handling with multer middleware.'
      },
      {
        name: 'SQL Database',
        purpose: 'Storing blog posts, user data, and media metadata with full-text search capabilities for content discovery.'
      }
    ],
    impact: 'Targeting to support 1000+ bloggers with streamlined content creation workflow, reducing publishing time by 40%.'
  },
  {
    id: 3,
    title: 'Magic Paper Illusion',
    description: 'simple javascript crazy paper game that help to relax .',
    status: 'upcoming',
    technologies: ['javascript', 'React', 'tailwind css', 'vite'],
    image: '🔌',
    github: 'https://github.com/irankundaobed/crazy-paper',
    live: '',
    expectedLaunch: 'Early 2027',
    // Detailed information
    overview: 'this game is built using javascript and react to creaete a simmple moving paper project, to help people to relax.',
    keyFeatures: [
      'endless moving paper',
      'flowing water',
      'wild ecosystem'
    ],
    challenges: [
      {
        title: 'Scalability',
        description: 'Designing an API that can handle increasing load without performance degradation.',
        solution: 'Implementing horizontal scaling with load balancers, Redis caching for frequent queries, and database connection pooling.'
      },
      {
        title: 'Security',
        description: 'Protecting the API from common vulnerabilities and unauthorized access.',
        solution: 'Implementing JWT tokens with refresh mechanism, request rate limiting, input validation, SQL injection prevention, and CORS configuration.'
      },
      {
        title: 'Performance Optimization',
        description: 'Ensuring fast response times even with complex database queries.',
        solution: 'Using Redis for caching, implementing database indexing, query optimization, and pagination for large datasets.'
      }
    ],
    techDetails: [
      {
        name: 'Node.js & Express',
        purpose: 'Building the API server with Express framework, implementing middleware for authentication, validation, and error handling.'
      },
      {
        name: 'PHP',
        purpose: 'Creating additional microservices for specific operations like image processing and legacy system integration.'
      },
      {
        name: 'SQL Database',
        purpose: 'Managing relational data with PostgreSQL, implementing complex queries, transactions, and proper indexing strategies.'
      },
      {
        name: 'Redis',
        purpose: 'Implementing caching layer for frequently accessed data, session management, and rate limiting counters.'
      }
    ],
    impact: 'Designed to handle 10,000+ requests per minute with sub-100ms response times for cached queries and 99.99% uptime.'
  }
];

export const initialBlogs = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components. A comprehensive guide for beginners.',
    content: 'Full content here...',
    category: 'React',
    date: '2026-07-20',
    readTime: '5 min',
    image: '⚛️'
  },
  {
    id: 2,
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'A comprehensive guide to creating robust REST APIs using Node.js and Express. Learn best practices and security measures.',
    content: 'Full content here...',
    category: 'Backend',
    date: '2026-07-15',
    readTime: '8 min',
    image: '🔌'
  },
  {
    id: 3,
    title: 'TailwindCSS: Utility-First CSS Framework',
    excerpt: 'Discover the power of utility-first CSS and why TailwindCSS is gaining popularity among developers.',
    content: 'Full content here...',
    category: 'CSS',
    date: '2026-07-10',
    readTime: '6 min',
    image: '🎨'
  },
  {
    id: 4,
    title: 'JavaScript ES6+ Features You Should Know',
    excerpt: 'Explore modern JavaScript features that will make your code cleaner and more efficient. Essential knowledge for every developer.',
    content: 'Full content here...',
    category: 'JavaScript',
    date: '2026-07-05',
    readTime: '10 min',
    image: '📜'
  },
  {
    id: 5,
    title: 'Database Design Best Practices',
    excerpt: 'Learn essential principles for designing efficient and scalable database schemas. From normalization to indexing strategies.',
    content: 'Full content here...',
    category: 'Database',
    date: '2026-07-01',
    readTime: '7 min',
    image: '💾'
  },
  {
    id: 6,
    title: 'Git Workflow for Teams',
    excerpt: 'Master Git branching strategies and collaboration workflows for team projects. Learn about GitFlow, trunk-based development, and more.',
    content: 'Full content here...',
    category: 'Tools',
    date: '2026-06-25',
    readTime: '9 min',
    image: '🔀'
  }
];

export const personalInfo = {
  name: 'IRANKUNDA Obed',
  title: 'Full Stack Developer',
  email: 'iobed157@gmail.com',
  phone: '+250 783 724 951',
  location: 'Kigali, Rwanda',
  github: 'https://github.com/irankundaobed',
  linkedin: 'https://www.linkedin.com/in/irankunda-obed-a7520a402/',
  twitter: 'https://x.com/ObedIranku34744'
};
