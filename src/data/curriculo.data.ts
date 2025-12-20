export interface Contact {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface TechnicalCompetence {
  technology: string;
  icon: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  activities: string[];
}

export interface Education {
  course: string;
  institution: string;
  period: string;
}

export interface Course {
  title: string;
  institution: string;
  date?: string;
  period?: string;
  workload?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  icon: string;
}

export interface Resume {
  contact: Contact;
  about: string[];
  technical_skills: TechnicalCompetence[];
  projects: Project[];
}

export const curriculoLarissa: Resume = {
  contact: {
    name: "Larissa dos Santos Brasil",
    location: "Teresina - PI",
    phone: "+55 86 9 8182-2169",
    email: "larissabrasil009@gmail.com",
    linkedin: "https://www.linkedin.com/in/brasil-larissa/",
    github: "https://github.com/Blarissa",
  },
  about: [
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
  technical_skills: [
    { technology: "C#", icon: "c-sharp.png" },
    { technology: "Java", icon: "java.png" },
    { technology: "Python", icon: "python.png" },
    { technology: "JavaScript", icon: "javascript.png" },
    { technology: "Typescript", icon: "typescript.png" },
    { technology: "Angular", icon: "angular.png" },
    { technology: "React", icon: "react.png" },
    { technology: ".NET", icon: "dotnet.png" },
    { technology: "Spring Boot", icon: "spring-boot.png" },
    { technology: "PostgreSQL", icon: "postgresql.png" },
    { technology: "MySQL", icon: "mysql.png" },
    { technology: "Git", icon: "git.png" },
    {
      technology: "Amazon Web Services (AWS)",
      icon: "aws.png",
    },
    { technology: "Tailwind CSS", icon: "tailwind-css.png" },
    { technology: "Bootstrap", icon: "bootstrap.png" },
    { technology: "HTML", icon: "html5.png" },
    { technology: "CSS", icon: "css3.png" },
    { technology: "Figma", icon: "figma.png" },
  ],

  projects: [
    {
      name: "Regular Expression to ε-NFA Converter",
      description:
        "Theory of Computation project that implements the conversion " +
        "from Regular Expressions to Non-Deterministic Finite Automata with " +
        "epsilon transitions using Thompson's Construction.",
      technologies: [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
      ],
      link: "[https://github.com/Blarissa/trabalho-final-larissa-brasil](https://github.com/Blarissa/trabalho-final-larissa-brasil)",
      icon: "setas.png",
    },
    {
      name: "NFT Art Tokenization DApp",
      description:
        "Decentralized Application for the tokenization of Van Gogh's " +
        "'Almond Blossom' artwork. It demonstrates how a physical asset can be represented as an NFT on the " +
        "Ethereum blockchain with minting and transfer operations.",
      technologies: [
        "Solidity",
        "JavaScript",
        "Ethers.js",
        "HTML",
        "Tailwind CSS",
        "MetaMask",
        "Ethereum",
        ],
        link: "https://github.com/Blarissa/DApp-Tokenizacao-Arte-AmendoeiraEmFlor",
      icon: "arte.png",
    },
    {
      name: "Dorothy Piauí Project Website",
      description:
        "Informative website about the Dorothy Piauí project, which promotes the inclusion of " +
        "women in technology through courses, workshops, and events.",
      technologies: ["HTML", "CSS", "JavaScript", "Angular"],
      link: "https://github.com/Dorothy-Piaui/Dorothy-Piaui.github.io",
      icon: "logo_dorothy.png",
    },
    {
      name: "Library System",
      description:
        "Console application in C# for complete library management, including " +
        "registration of books and readers, loan and return control with a search system.",
      technologies: ["C#", ".NET"],
      link: "https://github.com/Blarissa/Biblioteca",
      icon: "biblioteca.png",
    },
    {
      name: "Dental Clinic System",
      description:
        "Dental clinic management system with data persistence " +
        "using Entity Framework, implementing object-relational mapping with LINQ and PostgreSQL.",
      technologies: ["C#", ".NET", "Entity Framework", "PostgreSQL", "LINQ"],
      link: "https://github.com/Blarissa/PersistenciaConsultorioOdontologico",
      icon: "dente.png",
    },
  ],
};
