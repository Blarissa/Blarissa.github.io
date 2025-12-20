import reactIcon from "../assets/images/icons/react.png";
import typescriptIcon from "../assets/images/icons/typescript.png";
import javascriptIcon from "../assets/images/icons/javascript.png";
import htmlIcon from "../assets/images/icons/html5.png";
import cssIcon from "../assets/images/icons/css3.png";
import gitIcon from "../assets/images/icons/git.png";
import figmaIcon from "../assets/images/icons/figma.png";
import angularIcon from "../assets/images/icons/angular.png";
import bootstrapIcon from "../assets/images/icons/bootstrap.png";
import mysqlIcon from "../assets/images/icons/mysql.png";
import postgresqlIcon from "../assets/images/icons/postgresql.png";
import tailwindcssIcon from "../assets/images/icons/tailwindcss.png";
import springBootIcon from "../assets/images/icons/spring-boot.png";
import javaIcon from "../assets/images/icons/java.png";
import pythonIcon from "../assets/images/icons/python.png";
import dotnetIcon from "../assets/images/icons/dotnet.png";
import cSharpIcon from "../assets/images/icons/c-sharp.png";
import awsIcon from "../assets/images/icons/aws.png";


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
    { technology: "C#", icon: cSharpIcon },
    { technology: "Java", icon: javaIcon },
    { technology: "Python", icon: pythonIcon },
    { technology: "JavaScript", icon: javascriptIcon },
    { technology: "Typescript", icon: typescriptIcon },
    { technology: "Angular", icon: angularIcon },
    { technology: "React", icon: reactIcon },
    { technology: ".NET", icon: dotnetIcon },
    { technology: "Spring Boot", icon: springBootIcon },
    { technology: "PostgreSQL", icon: postgresqlIcon },
    { technology: "MySQL", icon: mysqlIcon },
    { technology: "Git", icon: gitIcon },
    {
      technology: "Amazon Web Services (AWS)",
      icon: awsIcon,
    },
    { technology: "Tailwind CSS", icon: tailwindcssIcon },
    { technology: "Bootstrap", icon: bootstrapIcon },
    { technology: "HTML", icon: htmlIcon },
    { technology: "CSS", icon: cssIcon },
    { technology: "Figma", icon: figmaIcon },
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
