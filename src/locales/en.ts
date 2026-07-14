import type { ExperienceId, ProjectId } from "../data/curriculo.data";

const projectItems: Record<ProjectId, { name: string; description: string }> = {
  "regex-to-enfa": {
    name: "Regular Expression to ε-NFA Converter",
    description:
      "Theory of Computation project that implements the conversion " +
      "from Regular Expressions to Non-Deterministic Finite Automata with " +
      "epsilon transitions using Thompson's Construction.",
  },
  "nft-art-dapp": {
    name: "NFT Art Tokenization DApp",
    description:
      "Decentralized Application for the tokenization of Van Gogh's " +
      "'Almond Blossom' artwork. It demonstrates how a physical asset can be represented as an NFT on the " +
      "Ethereum blockchain with minting and transfer operations.",
  },
  "dorothy-website": {
    name: "Dorothy Piauí Project Website",
    description:
      "Informative website about the Dorothy Piauí project, which promotes the inclusion of " +
      "women in technology through courses, workshops, and events.",
  },
  "library-system": {
    name: "Library System",
    description:
      "Console application in C# for complete library management, including " +
      "registration of books and readers, loan and return control with a search system.",
  },
  "dental-clinic-system": {
    name: "Dental Clinic System",
    description:
      "Dental clinic management system with data persistence " +
      "using Entity Framework, implementing object-relational mapping with LINQ and PostgreSQL.",
  },
};

export const en = {
  seo: {
    title: "Larissa Brasil | Portfolio",
    description:
      "Portfolio of Larissa Brasil, a software developer with experience in React, Angular, Spring Boot, Java, and C#.",
  },
  nav: {
    home: "home",
    about: "about",
    projects: "projects",
    technologies: "technologies",
    resume: "resume",
    primaryLabel: "Primary navigation",
    languageLabel: "Select language",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  home: {
    greeting: "hi, i'm",
    name: "larissa brasil!",
  },
  about: {
    title: "about me",
    text: [
      "I am a Computer Science student at UFPI and an IT Technician, working " +
        "as a software development intern at Medsafe Brasil. I work with " +
        "Spring Boot/Java on the back-end and Angular on the front-end, developing " +
        "complete and integrated web solutions. I have complementary training in cloud " +
        "computing from Escola da Nuvem and practical experience in relational databases, " +
        "REST API integration, versioning with Git, and development best practices.",
      "I am passionate about technology with a purpose, seeking to unite innovation, " +
        "continuous learning, and social impact. The Dorothy Piauí project, in which I am " +
        "the general director, is committed to promoting the inclusion of women in " +
        "technology. I believe in the power of technology to transform realities and " +
        "constantly seek new challenges that allow me to grow professionally and " +
        "contribute significantly to the advancement of the field.",
    ],
  },
  projects: {
    title: "projects",
    items: projectItems,
  },
  technologies: {
    title: "technologies",
  },
  resume: {
    professionalExperiences: {
      "medsafe-brasil": {
        role: "Full Stack Development Intern",
        description: [
          "Full-stack development using Angular, Java, and Spring Boot.",
          "Support in requirements analysis, feature implementation, software testing, technical documentation, and system maintenance.",
        ],
      },
      "sti-ufpi": {
        role: "Development Scholarship Holder",
        description: [
          "Performed evolutionary and corrective maintenance on UFPI's institutional websites, developed using various languages and technologies.",
          "Supported the development of new features, layout adjustments, bug fixes, and usability improvements, ensuring the proper functioning, accessibility, and standardization of the university's web systems.",
        ],
      },
      focare: {
        role: "Full Stack Developer",
        description: [
          "Involved in the development and evolution of enterprise web solutions, participating in all stages of the software development lifecycle.",
          "Responsible for implementing new features, fixing bugs, performing evolutionary and corrective maintenance, creating and optimizing SQL queries, and continuously improving systems.",
        ],
      },
    } satisfies Record<ExperienceId, { role: string; description: string[] }>,
  },
  footer: {
    rights: "All rights reserved.",
  },
};
