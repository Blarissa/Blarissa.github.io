export interface Contato {
  nome: string;
  localizacao: string;
  telefone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface CompetenciaTecnica {
  tecnologia: string;
  habilidade: string;
}

export interface Idioma {
  idioma: string;
  nivel: string;
}

export interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  atividades: string[];
}

export interface Formacao {
  curso: string;
  instituicao: string;
  periodo: string;
}

export interface Curso {
  titulo: string;
  instituicao: string;
  data?: string;
  periodo?: string;
  cargaHoraria?: string;
}

export interface Projeto {
  nome: string;
  descricao: string;
  tecnologias: string[];
  link: string;
  icone: string;
}

export interface Curriculo {
  contato: Contato;
  sobre: string[];
  resumo_profissional: string;
  competencias_comportamentais: string[];
  competencias_tecnicas: CompetenciaTecnica[];
  idiomas: Idioma[];
  experiencias: Experiencia[];
  formacao_academica: Formacao[];
  cursos_certificacoes: Curso[];
  projetos: Projeto[];
}

export const curriculoLarissa: Curriculo = {
  contato: {
    nome: "Larissa dos Santos Brasil",
    localizacao: "Teresina - PI",
    telefone: "+55 86 9 8182-2169",
    email: "larissabrasil009@gmail.com",
    linkedin: "https://www.linkedin.com/in/brasil-larissa/",
    github: "https://github.com/Blarissa",
  },
  sobre: [
    "Sou estudante de Ciência da Computação na UFPI e Técnica em Informática, atuando " + 
    "como estagiária de desenvolvimento de software na Medsafe Brasil. Trabalho com " +
    "Spring Boot/Java no back-end e Angular no front-end, desenvolvendo soluções web " +
    "completas e integradas. Tenho formação complementar em computação em nuvem pela " +
    "Escola da Nuvem e experiência prática em bancos de dados relacionais, integração de " +
    "APIs REST, versionamento com Git e boas práticas de desenvolvimento.",
    "Sou apaixonada por tecnologia com propósito, buscando unir inovação, aprendizado " +
    "contínuo e impacto social. O projeto Dorothy Piauí, no qual sou diretora geral, tem " +
    "o compromisso de promover inclusão de mulheres na tecnologia. Acredito no poder da " +
    "tecnologia para transformar realidades e busco constantemente novos desafios que me " +
    "permitam crescer profissionalmente e contribuir de forma significativa para o avanço da área.",
  ],
  resumo_profissional:
    "Técnica em Informática e estudante de Ciência da Computação, atualmente estagiando como " +
    "desenvolvedora full-stack na Medsafe Brasil, com foco em Angular, Java e Spring Boot. " +
    "Possuo experiência prática em desenvolvimento web, APIs e bancos de dados relacionais. " +
    "Atuei em projetos acadêmicos e sociais, como o Dorothy Piauí, promovendo a inclusão na " +
    "tecnologia. Tenho domínio de C#, Python, JavaScript e ferramentas como .NET, Angular e Git. " +
    "Tenho interesse por neurotecnologia e soluções com impacto social.",
  competencias_comportamentais: [
    "Aprendizado Contínuo",
    "Comunicação Eficaz",
    "Resolução de Problemas",
    "Empatia",
    "Trabalho em Equipe",
    "Organização",
    "Proatividade",
    "Flexibilidade",
    "Adaptação e Resiliência",
    "Pensamento Crítico",
    "Criatividade",
  ],
  competencias_tecnicas: [
    { tecnologia: "C#", habilidade: "Desenvolvimento Back-end" },
    { tecnologia: "Java", habilidade: "Desenvolvimento Back-end" },
    { tecnologia: "Python", habilidade: "Desenvolvimento Back-end" },
    { tecnologia: "JavaScript", habilidade: "Desenvolvimento Front-end" },
    { tecnologia: "Typescript", habilidade: "Desenvolvimento Front-end" },
    { tecnologia: "Angular", habilidade: "Desenvolvimento Front-end" },
    { tecnologia: "React", habilidade: "Desenvolvimento Front-end" },
    { tecnologia: ".NET", habilidade: "Desenvolvimento Back-end" },
    { tecnologia: ".NET Core", habilidade: "Desenvolvimento Back-end" },
    { tecnologia: "ASP.NET Core", habilidade: "Desenvolvimento Back-end" },
    { tecnologia: "Spring Boot", habilidade: "Desenvolvimento Back-end" },
    { tecnologia: "PostgreSQL", habilidade: "Gerenciamento de Banco de Dados" },
    { tecnologia: "MySQL", habilidade: "Gerenciamento de Banco de Dados" },
    { tecnologia: "SQL Server", habilidade: "Gerenciamento de Banco de Dados" },
    { tecnologia: "Git", habilidade: "Controle de Versão" },
    { tecnologia: "GitHub", habilidade: "Controle de Versão" },
    {
      tecnologia: "Amazon Web Services (AWS)",
      habilidade: "Computação em Nuvem",
    },
    {
      tecnologia: "Google Cloud Platform (GCP)",
      habilidade: "Computação em Nuvem",
    },
    { tecnologia: "RESTful APIs", habilidade: "Desenvolvimento de APIs" },
    { tecnologia: "Postman", habilidade: "Desenvolvimento de APIs" },
    { tecnologia: "Insomnia", habilidade: "Desenvolvimento de APIs" },
    { tecnologia: "Swagger UI", habilidade: "Desenvolvimento de APIs" },
    {
      tecnologia: "Programação Orientada a Objetos (POO)",
      habilidade: "Design de Software",
    },
    { tecnologia: "Entity Framework", habilidade: "ORM" },
    {
      tecnologia: "Metodologias Ágeis",
      habilidade: "Gerenciamento de Projetos",
    },
    { tecnologia: "Clean Code", habilidade: "Qualidade de Código" },
    { tecnologia: "Design Patterns", habilidade: "Arquitetura de Software" },
    { tecnologia: "Testes Unitários", habilidade: "Testes de Software" },
    { tecnologia: "Tailwind CSS", habilidade: "Desenvolvimento Front-end" },
    { tecnologia: "Bootstrap", habilidade: "Desenvolvimento Front-end" },
    { tecnologia: "SASS", habilidade: "Desenvolvimento Front-end" },
    { tecnologia: "HTML", habilidade: "Desenvolvimento Front-end" },
    { tecnologia: "JSON", habilidade: "Formatação de Dados" },
    { tecnologia: "CSV", habilidade: "Formatação de Dados" },
    { tecnologia: "CSS", habilidade: "Desenvolvimento Front-end" },
    { tecnologia: "Figma", habilidade: "Design de Interface de Usuário" },
  ],
  idiomas: [
    { idioma: "Inglês", nivel: "B1" },
    { idioma: "Espanhol", nivel: "A1" },
  ],
  experiencias: [
    {
      cargo: "Estagiária em Desenvolvimento Full Stack",
      empresa: "Medsafe Brasil",
      periodo: "26/02/2025 - Atual",
      atividades: [
        "Desenvolvimento de funcionalidades front-end com Angular, com foco em usabilidade e responsividade",
        "Implementação de APIs RESTful utilizando Java com Spring Boot",
        "Criação e manutenção de rotinas de banco de dados MySQL",
        "Correção de bugs e melhoria contínua de sistemas existentes",
        "Realização de testes locais e ajustes no ambiente de desenvolvimento",
        "Colaboração com a equipe técnica na análise de requisitos",
      ],
    },
    {
      cargo: "Estagiária de TI",
      empresa: "Hospital Veterinário Universitário",
      periodo: "27/01/2025 - 08/03/2025",
      atividades: [
        "Manutenção de computadores, formatação e instalação de softwares",
        "Suporte técnico",
      ],
    },
  ],
  formacao_academica: [
    {
      curso: "Bacharelado em Ciência da Computação",
      instituicao: "Universidade Federal do Piauí",
      periodo: "08/2018 - Cursando",
    },
    {
      curso: "Técnico em Informática",
      instituicao: "Instituto Federal do Piauí",
      periodo: "03/2015 - 01/2018",
    },
  ],
  cursos_certificacoes: [
    {
      titulo: "AWS re/Start AI Practitioner",
      instituicao: "Escola da Nuvem",
      periodo: "03/2025 - 08/2025",
    },
    {
      titulo: "Membro Organizadora: PYLADIES BR CONF 3",
      instituicao: "PyLadies Brasil",
      data: "19/06/2025",
      cargaHoraria: "40 horas",
    },
    {
      titulo: "Membro Organizadora da Python Nordeste 2025",
      instituicao: "Comunidade Python Nordeste",
      periodo: "20/06/2025 - 22/06/2025",
      cargaHoraria: "24 horas",
    },
    {
      titulo: "Membro Organizadora: Simpósio Acadêmico de Computação",
      instituicao: "Universidade Federal do Piauí",
      periodo: "14/05/2025 - 16/05/2025",
      cargaHoraria: "30 horas",
    },
    {
      titulo: "Membro Organizadora do Café com Tech (2º edição)",
      instituicao: "Universidade Federal do Piauí",
      data: "23/11/2024",
      cargaHoraria: "10 horas",
    },
    {
      titulo: "Programador Full-Stack",
      instituicao: "SENAI-PI",
      periodo: "01/2024 - 11/11/2024",
      cargaHoraria: "670 horas",
    },
    {
      titulo: "Fechamento do evento PrograMaria Summit 2024",
      instituicao: "PrograMaria",
      data: "09/11/2024",
      cargaHoraria: "12 horas",
    },
    {
      titulo:
        'Proferi a Palestra "Desbugando estereótipos: desmistificando o papel das mulheres no mundo tecnológico"',
      instituicao: "Faculdade Estácio Teresina",
      data: "17/08/2024",
    },
    {
      titulo:
        "Membro Organizadora do Ciclo de palestras de Desenvolvimento, Pesquisa e Inovação: Café com Tecnologia",
      instituicao: "Universidade Federal do Piauí",
      data: "16/03/2024",
      cargaHoraria: "5 horas",
    },
    {
      titulo: "Curso de Residência em Software: Formação Back-end C#.NET Core",
      instituicao:
        "Universidade Federal do Estado do Rio De Janeiro, Rio de Janeiro",
      data: "30/11/2022 - 05/04/2023",
      cargaHoraria: "240 horas",
    },
    {
      titulo: "Entity Framework Core: banco de dados de forma eficiente",
      instituicao: "Alura",
      data: "27/01/2023",
      cargaHoraria: "16 horas",
    },
    {
      titulo: "SOLID com C#: princípios da programação orientada a objetos",
      instituicao: "Alura",
      data: "25/01/2023",
      cargaHoraria: "8 horas",
    },
    {
      titulo:
        "C# Collections parte 2: Coleções ordenadas, arrays multidimensionais e LINQ",
      instituicao: "Alura",
      data: "21/01/2023",
      cargaHoraria: "20 horas",
    },
    {
      titulo:
        "C# Collections parte 1: Listas, arrays, listas ligadas, dicionários e conjuntos",
      instituicao: "Alura",
      data: "20/01/2023",
      cargaHoraria: "14 horas",
    },
    {
      titulo: "C# parte 4: entendendo exceções",
      instituicao: "Alura",
      data: "19/01/2023",
      cargaHoraria: "8 horas",
    },
    {
      titulo: "C# parte 3: entendendo herança e interface",
      instituicao: "Alura",
      data: "19/01/2023",
      cargaHoraria: "8 horas",
    },
    {
      titulo: "C# parte 1: primeiros passos",
      instituicao: "Alura",
      data: "17/01/2023",
      cargaHoraria: "8 horas",
    },
    {
      titulo: "HTTP: Entendendo a web por baixo dos panos",
      instituicao: "Alura",
      data: "14/01/2023",
      cargaHoraria: "14 horas",
    },
    {
      titulo: 'Curso de Extensão "Python"',
      instituicao: "Universidade Federal do Piauí",
      data: "19/03/2021",
      cargaHoraria: "20 horas",
    },
    {
      titulo: "Python para Processamento de tecnologia Natural",
      instituicao: "ICMC",
      data: "20/12/2021",
      cargaHoraria: "20 horas",
    },
  ],
  projetos: [
    {
      nome: "Conversor de Expressões Regulares para AFN-ε",
      descricao:
        "Projeto de Teoria da Computação que implementa a conversão " +
        "de Expressões Regulares para Autômatos Finitos Não Determinísticos com " +
        "transições epsilon utilizando a Construção de Thompson.",
      tecnologias: [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
      ],
      link: "https://github.com/Blarissa/trabalho-final-larissa-brasil",
      icone: "setas.png",
    },
    {
      nome: "DApp de Tokenização de Arte NFT",
      descricao:
        "Aplicação Descentralizada para tokenização da obra 'Amendoeira em Flor' " +
        "de Van Gogh. Demonstra como um ativo físico pode ser representado como NFT na " +
        "blockchain Ethereum com operações de cunhagem e transferência.",
      tecnologias: [
        "Solidity",
        "JavaScript",
        "Ethers.js",
        "HTML",
        "Tailwind CSS",
        "MetaMask",
        "Ethereum",
      ],
      link: "https://github.com/Blarissa/DApp-Tokenizacao-Arte-AmendoeiraEmFlor",
      icone: "arte.png",
    },
    {
      nome: "Site do projeto Dorothy Piauí",
      descricao:
        "Site informativo sobre o projeto Dorothy Piauí, que promove a inclusão de " +
        "mulheres na tecnologia por meio de cursos, workshops e eventos.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Angular"],
      link: "https://github.com/Dorothy-Piaui/Dorothy-Piaui.github.io",
      icone: "logo_dorothy.png",
    },
    {
      nome: "Sistema de Biblioteca",
      descricao:
        "Aplicação console em C# para gerenciamento completo de biblioteca, incluindo " +
        "cadastro de livros e leitores, controle de empréstimos e devoluções com sistema de pesquisa.",
      tecnologias: ["C#", ".NET"],
      link: "https://github.com/Blarissa/Biblioteca",
      icone: "biblioteca.png",
    },
    {
      nome: "Sistema de Consultório Odontológico",
      descricao:
        "Sistema de gerenciamento de consultório odontológico com persistência de dados " +
        "usando Entity Framework, implementando mapeamento objeto-relacional com LINQ e PostgreSQL.",
      tecnologias: ["C#", ".NET", "Entity Framework", "PostgreSQL", "LINQ"],
      link: "https://github.com/Blarissa/PersistenciaConsultorioOdontologico",
      icone: "dente.png",
    },
  ],
};
