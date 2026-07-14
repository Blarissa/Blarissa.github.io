import type { ExperienceId, ProjectId } from "../data/curriculo.data";

const projectItems: Record<ProjectId, { name: string; description: string }> = {
  "regex-to-enfa": {
    name: "Conversor de Expressão Regular para ε-NFA",
    description:
      "Projeto de Teoria da Computação que implementa a conversão " +
      "de Expressões Regulares para Autômatos Finitos Não-Determinísticos com " +
      "transições epsilon usando a Construção de Thompson.",
  },
  "nft-art-dapp": {
    name: "DApp de Tokenização de Arte NFT",
    description:
      "Aplicação Descentralizada para tokenização da obra de arte " +
      "'Amendoeira em Flor' de Van Gogh. Demonstra como um ativo físico pode ser representado como um NFT na " +
      "blockchain Ethereum com operações de cunhagem e transferência.",
  },
  "dorothy-website": {
    name: "Site do Projeto Dorothy Piauí",
    description:
      "Site informativo sobre o projeto Dorothy Piauí, que promove a inclusão de " +
      "mulheres na tecnologia através de cursos, oficinas e eventos.",
  },
  "library-system": {
    name: "Sistema de Biblioteca",
    description:
      "Aplicação console em C# para gestão completa de biblioteca, incluindo " +
      "cadastro de livros e leitores, controle de empréstimo e devolução com sistema de busca.",
  },
  "dental-clinic-system": {
    name: "Sistema de Consultório Odontológico",
    description:
      "Sistema de gerenciamento de consultório odontológico com persistência de dados " +
      "usando Entity Framework, implementando mapeamento objeto-relacional com LINQ e PostgreSQL.",
  },
};

export const pt = {
  seo: {
    title: "Larissa Brasil | Portfólio",
    description:
      "Portfólio de Larissa Brasil, desenvolvedora de software com experiência em React, Angular, Spring Boot, Java e C#.",
  },
  nav: {
    home: "início",
    about: "sobre",
    projects: "projetos",
    technologies: "tecnologias",
    resume: "currículo",
    primaryLabel: "Navegação principal",
    languageLabel: "Selecionar idioma",
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
  },
  home: {
    greeting: "olá, eu sou",
    name: "larissa brasil!",
  },
  about: {
    title: "sobre mim",
    text: [
      "Sou estudante de Ciência da Computação na UFPI e Técnica em Informática, atuando " +
        "como estagiária de desenvolvimento de software na Medsafe Brasil. Trabalho com " +
        "Spring Boot/Java no back-end e Angular no front-end, desenvolvendo " +
        "soluções web completas e integradas. Possuo formação complementar em computação em nuvem " +
        "pela Escola da Nuvem e experiência prática em bancos de dados relacionais, " +
        "integração de API REST, versionamento com Git e boas práticas de desenvolvimento.",
      "Sou apaixonada por tecnologia com propósito, buscando unir inovação, " +
        "aprendizado contínuo e impacto social. O projeto Dorothy Piauí, do qual sou " +
        "diretora geral, tem o compromisso de promover a inclusão de mulheres na " +
        "tecnologia. Acredito no poder da tecnologia para transformar realidades e " +
        "busco constantemente novos desafios que me permitam crescer profissionalmente e " +
        "contribuir significativamente para o avanço da área.",
    ],
  },
  projects: {
    title: "projetos",
    items: projectItems,
  },
  technologies: {
    title: "tecnologias",
  },
  resume: {
    professionalExperiences: {
      "medsafe-brasil": {
        role: "Estagiária de Desenvolvimento Full Stack",
        description: [
          "Desenvolvimento full stack utilizando Angular, Java e Spring Boot.",
          "Apoio na análise de requisitos, implementação de funcionalidades, testes de software, documentação técnica e manutenção de sistemas.",
        ],
      },
      "sti-ufpi": {
        role: "Bolsista de Desenvolvimento",
        description: [
          "Manutenção evolutiva e corretiva em sites institucionais da UFPI, desenvolvidos com diferentes linguagens e tecnologias.",
          "Apoio no desenvolvimento de novas funcionalidades, ajustes de layout, correção de bugs e melhorias de usabilidade, garantindo o funcionamento, a acessibilidade e a padronização dos sistemas web da universidade.",
        ],
      },
      focare: {
        role: "Desenvolvedora Full Stack",
        description: [
          "Atuação no desenvolvimento e na evolução de soluções web empresariais, participando de todas as etapas do ciclo de desenvolvimento de software.",
          "Responsável pela implementação de novas funcionalidades, correção de bugs, manutenção evolutiva e corretiva, criação e otimização de consultas SQL e melhoria contínua dos sistemas.",
        ],
      },
    } satisfies Record<ExperienceId, { role: string; description: string[] }>,
  },
  footer: {
    rights: "Todos os direitos reservados.",
  },
};
