export const site = {
  url: 'https://joshmonreal.com',
  meta: {
    title: 'Josh Monreal | .NET Developer & Software Architect',
    description:
      '.NET Developer and software architect with over 10 years of experience building scalable, high-quality applications.',
    ogImage: '/og-image.png',
  },
  hero: {
    name: 'Josh Monreal',
    role: '.NET Developer & Software Architect',
    tagline: 'From architecture to code — Building scalable, high-quality software that lasts.',
    contact: 'Open to collaborations, architecture consulting, and technical leadership roles.',
  },
  about: {
    paragraphs: [
      {
        text: "I'm a .NET Developer and software architect with over 10 years of experience building scalable, high-quality applications. My career began in the services department of HP (now ",
        link: { text: 'DXC Technology', href: 'https://dxc.com' },
        textAfter: "), where I worked on a web application powered by AngularJS on the front end and the .NET Framework on the back end. Since then, I've worked with clients across diverse industries, gaining broad technical expertise and a deep appreciation for clean, pragmatic code.",
      },
      "I truly believe that software must be reliable, secure, and maintainable. It must be ensured that every solution meets the highest standards. That's why I emphasize best practices such as designing the best architectural solution for the application, writing clean code and automated tests, and implementing DevOps practices.",
      {
        text: "Currently, I'm at ",
        link: { text: 'Avanade', href: 'https://www.avanade.com/en-us' },
        textAfter: ', focusing on software architecture and DevOps engineering, in addition to software development.',
        heading: 'My work includes:',
        bullets: [
          'Developing software applications using the .NET technology',
          'Designing application architectures (monolithic, service-based, microservices)',
          'Implementing API-led integration strategies',
          'Defining cross-cutting concerns like security, fault tolerance, monitoring, and logging',
          'Embedding DevOps practices into the SDLC such as creating CI/CD pipelines with security scanning and performance tests',
        ],
      },
      "Outside of work, you'll find me running, hiking, or enjoying the beach with my wife — staying active and inspired beyond the keyboard.",
      {
        heading: 'Technology Stack',
        techItems: ['.NET', 'C#', 'GitHub Copilot', 'Microsoft Azure', 'Azure DevOps', 'Dapr', 'nUnit', 'Moq'],
      },
    ],
  },
  techStack: [
    {
      category: 'Technology Stack',
      items: ['.NET', 'C#', 'GitHub Copilot', 'Microsoft Azure', 'Azure DevOps', 'Dapr', 'nUnit', 'Moq'],
    },
  ],
  featuredProjects: [
    {
      title: 'Oracle Service Bus Migration to Azure',
      period: '08.2024 – 07.2025',
      summary: "To reduce licensing costs and streamline infrastructure, the client initiated a migration of its services from Oracle Service Bus (OSB) to Microsoft Azure—specifically Azure Kubernetes Services (AKS). Leveraging their existing Azure environment and the consultant's .NET expertise, this move consolidated their API ecosystem and simplified long-term maintenance.",
      solution: 'I led the planning and execution of the migration strategy, with a strong focus on minimizing disruption to client applications already integrated with OSB. I co-developed the new services using .NET and Dapr and built automated release pipelines in Azure DevOps to deploy them seamlessly to AKS.',
      impact: 'This migration enabled significant cost savings and operational efficiency by centralizing services within Azure. It also empowered the client to leverage their in-house .NET capabilities, eliminating the need for a separate OSB support team. This project reinforced the importance of precision and risk mitigation in migration efforts—where even minor missteps can have wide-reaching impact across integrated systems and users.',
      techCategories: [
        {
          category: 'Server-side',
          items: ['.NET 8', 'C# / REST APIs', 'Dapr', 'nUnit / Moq for automated tests', 'Oracle Service Bus'],
        },
        {
          category: 'Other',
          items: ['Microsoft Azure', 'Azure DevOps'],
        },
      ],
      image: 'osb-migration.png',
      imageAlt: 'Architecture diagram: SAP, OutSystems API, and Oracle DB integrating with Azure services via API Management and Kubernetes',
    },
    {
      title: 'Integration Architecture w/ PoC',
      period: '04.2024 – 07.2024',
      summary: "As part of the client’s broader digital transformation efforts, a key initiative focused on establishing a standardized integration architecture. Core cross-cutting concerns—including application security, observability, error handling, and data validation—were defined to enhance consistency and quality across systems. To demonstrate these standards in action, our team developed a proof-of-concept application using .NET and Dapr, which successfully implemented the identified CCCs. This solution was showcased to the client to illustrate the practical benefits and scalability of the approach.",
      solution: 'My contributions included leading the definition of standards for cross-cutting concerns across multiple applications. Collaborating closely with my team, I co-developed the proof-of-concept solution that embodied these practices. I also authored the Integration Architecture Document to capture our methodology, technical decisions, and implementation details—ensuring knowledge was transferable and repeatable.',
      impact: 'The delivery of both the PoC and comprehensive documentation provided the client with a reusable standard for applying cross-cutting concerns in current and future integrations. This project deepened my appreciation for the critical role a well-structured integration architecture plays in enabling scalable, secure, and maintainable systems—especially within organizations managing diverse internal and external applications.',
      techCategories: [
        {
          category: 'Server-side',
          items: ['.NET 6', 'C# / REST APIs', 'Dapr'],
        },
        {
          category: 'Other',
          items: ['Microsoft Azure', 'Azure DevOps'],
        },
      ],
      image: 'integration-architecture.png',
      imageAlt: 'Architecture diagram: Integration Architecture w/ PoC',
    },
    {
      title: 'PostVenta Portal',
      period: '04.2023 – 03.2024',
      summary: "The client aimed to launch a platform allowing customers to rent mobile devices—such as iPhones and Samsung Galaxy phones—for a set period, with the option to return or purchase them afterwards. To support this, we developed the PostVenta Portal, a web application offering key services like contract viewing, resolution processing, and device claim reporting. The portal also enabled the client’s support team to assist customers with inquiries and contract-related issues.",
      solution: 'As the software architect, I led the analysis and design of the application’s core components. I defined the architectural structure and key non-functional requirements—including security, performance, and scalability. I also implemented DevOps best practices: establishing a branching strategy, building CI/CD pipelines with automated unit and security testing, and integrating ChatOps to streamline collaboration and deployment. We built the solution using Microsoft Azure as the cloud platform, Angular for the frontend, and .NET for the backend REST APIs. This project was my first in an architectural role, and it deepened my understanding of system design decisions—such as choosing between monolithic and microservice architectures—and how to plan for disaster recovery, performance optimization, and secure operations.',
      impact: 'This experience expanded my perspective beyond software development into strategic planning and architectural foresight. It reinforced the importance of aligning technical decisions with business goals, especially in customer-facing platforms that require reliability, scalability, and seamless support integration.',
      techCategories: [
        {
          category: 'Server-side',
          items: ['.NET 6', 'C# / REST APIs', 'nUnit / Moq for automated tests',],
        },
        {
          category: 'Other',
          items: ['Microsoft Azure', 'Azure DevOps'],
        },
      ],
      image: 'post-venta-portal.png',
      imageAlt: 'Architecture diagram:  post-venta-portal',
    },
  ],
  projectArchive: [
    {
      date: '08.2025 – 12.2025',
      project: 'Integration APIs for Housing Simulation',
      role: '.NET Developer',
      techStack: 'C#, .NET, Dapr, Azure',
    },
    {
      date: '06.2019 – 03.2023',
      project: 'PSD2',
      role: '.NET Developer',
      techStack: 'C#, .NET, Entity Framework Core, Azure DevOps, Azure',
    },
    {
      date: '02.2020 – 07.2020',
      project: 'FPS',
      role: '.NET Developer',
      techStack: 'C#, .NET Framework, ASMX Web Services, Azure',
    },
    {
      date: '01.2019 – 03.2019',
      project: 'Pain Alert',
      role: '.NET Developer',
      techStack: 'C#, .NET Core, Entity Framework Core, TFS, Azure',
    },
    {
      date: '11.2018 – 12.2018',
      project: 'HR System',
      role: '.NET Developer',
      techStack: 'C#, .NET Framework, ASP.NET Web Forms, SQL Server, Entity Framework, Azure DevOps',
    },
    {
      date: '10.2018 – 10.2018',
      project: 'Workflow Document Processor',
      role: 'Angular Developer',
      techStack: 'Angular, HTML, Sass, Azure DevOps',
    },
    {
      date: '08.2018 – 08.2018',
      project: 'Resource Tracking System',
      role: '.NET Developer',
      techStack: 'C#, .NET Framework, SQL Server, Entity Framework, TFS, IIS',
    },
    {
      date: '04.2018 – 07.2018',
      project: 'Training Management System',
      role: 'Full-stack .NET Developer',
      techStack: 'C#, .NET Framework, SQL Server, Entity Framework, HTML',
    },
    {
      date: '11.2017 – 03.2018',
      project: 'ODS (v2.x)',
      role: '.NET Developer',
      techStack: 'C#, .NET Framework, SQL Server, Entity Framework, HTML',
    },
    {
      date: '07.2016 – 10.2017',
      project: 'Consumer Research Center',
      role: 'Full-stack .NET Developer',
      techStack: 'C#, .NET Framework, SQL Server, Entity Framework, HTML',
    },
    {
      date: '03.2016 – 11.2016',
      project: 'Asia Galleria',
      role: 'VBA Developer',
      techStack: 'VBA',
    },
  ],
  contact: {
    line: 'Open to collaborations, architecture consulting, and technical leadership roles.',
    email: 'josh.monreal@outlook.com',
    linkedin: 'https://www.linkedin.com/in/joshmonreal',
  },
} as const;

export type FeaturedProject = (typeof site.featuredProjects)[number];
export type ProjectArchiveRow = (typeof site.projectArchive)[number];
