window.ConectaData = window.ConectaData || {};

window.ConectaData.projects = [
  // FRONT-END
  {
    t: "Landing Page SaaS",
    area: "front-end",
    level: "iniciante",
    type: "landing-page",
    icon: "lucide:layout-template",
    txt: "Crie uma landing page moderna para um produto digital, com hero, benefícios, planos, depoimentos e CTA.",
    techs: ["HTML", "CSS", "Responsivo"]
  },
  {
    t: "Catálogo de Cursos",
    area: "front-end",
    level: "iniciante",
    type: "dashboard",
    icon: "lucide:graduation-cap",
    txt: "Monte uma página com cards de cursos, filtros por área, nível e botões para links externos.",
    techs: ["HTML", "CSS", "JavaScript"]
  },
  {
    t: "Lista de Tarefas com LocalStorage",
    area: "front-end",
    level: "iniciante",
    type: "crud",
    icon: "lucide:list-checks",
    txt: "Crie uma lista de tarefas com adicionar, editar, concluir, excluir e salvar dados no navegador.",
    techs: ["JavaScript", "DOM", "LocalStorage"]
  },
  {
    t: "Buscador de Vagas",
    area: "front-end",
    level: "intermediario",
    type: "portfolio",
    icon: "lucide:briefcase-business",
    txt: "Desenvolva uma interface de vagas com filtros por área, nível, modelo de trabalho e palavra-chave.",
    techs: ["HTML", "CSS", "Filtros JS"]
  },
  {
    t: "Dashboard de Estudos",
    area: "front-end",
    level: "intermediario",
    type: "dashboard",
    icon: "lucide:layout-dashboard",
    txt: "Crie um painel para acompanhar metas, progresso semanal, cursos em andamento e tarefas de estudo.",
    techs: ["HTML", "CSS", "JavaScript"]
  },

  // BACK-END
  {
    t: "API de Currículos",
    area: "back-end",
    level: "intermediario",
    type: "api",
    icon: "lucide:file-user",
    txt: "Crie uma API para cadastrar, listar, atualizar e remover currículos de candidatos.",
    techs: ["Node.js", "Express", "REST"]
  },
  {
    t: "API de Vagas",
    area: "back-end",
    level: "intermediario",
    type: "api",
    icon: "lucide:server",
    txt: "Construa uma API para gerenciar vagas, empresas, requisitos, níveis e candidaturas.",
    techs: ["Node.js", "Express", "SQL"]
  },
  {
    t: "Sistema de Login",
    area: "back-end",
    level: "intermediario",
    type: "auth",
    icon: "lucide:lock-keyhole",
    txt: "Implemente cadastro, login, validação de dados, autenticação e proteção de rotas.",
    techs: ["Node.js", "JWT", "Bcrypt"]
  },

  // FULL-STACK
  {
    t: "Sistema de Biblioteca",
    area: "full-stack",
    level: "intermediario",
    type: "crud",
    icon: "lucide:library-big",
    txt: "Desenvolva um sistema para cadastrar livros, autores, categorias e controlar empréstimos.",
    techs: ["HTML", "CSS", "Node.js", "SQL"]
  },
  {
    t: "Controle Financeiro",
    area: "full-stack",
    level: "intermediario",
    type: "dashboard",
    icon: "lucide:wallet",
    txt: "Crie um painel para registrar entradas, saídas, categorias e resumo financeiro mensal.",
    techs: ["JavaScript", "CRUD", "Gráficos"]
  },
  {
    t: "Sistema de Clínica Pet",
    area: "full-stack",
    level: "intermediario",
    type: "crud",
    icon: "lucide:paw-print",
    txt: "Crie um sistema com cadastro de tutores, pets, veterinários, agendamentos e prontuário.",
    techs: ["HTML", "CSS", "JavaScript", "SQL"]
  },
  {
    t: "Plataforma de Estudos Tech",
    area: "full-stack",
    level: "avancado",
    type: "portfolio",
    icon: "lucide:rocket",
    txt: "Desenvolva uma plataforma com cursos, ferramentas, oportunidades, projetos e trilhas de estudo.",
    techs: ["JavaScript", "Node.js", "API", "UI/UX"]
  },

  // DADOS
  {
    t: "Dashboard de Dados de Vendas",
    area: "dados",
    level: "iniciante",
    type: "dashboard",
    icon: "lucide:bar-chart-3",
    txt: "Crie um painel com indicadores de vendas, filtros por período e gráficos de desempenho.",
    techs: ["Excel", "Power BI", "Dashboard"]
  },
  {
    t: "Análise de Dados com Python",
    area: "dados",
    level: "intermediario",
    type: "analise",
    icon: "lucide:chart-line",
    txt: "Analise uma base de dados, trate informações e gere insights com gráficos e conclusões.",
    techs: ["Python", "Pandas", "Matplotlib"]
  },
  {
    t: "Consulta SQL para Relatórios",
    area: "dados",
    level: "iniciante",
    type: "database",
    icon: "lucide:database",
    txt: "Monte consultas SQL para listar, filtrar, agrupar e gerar relatórios a partir de tabelas.",
    techs: ["SQL", "MySQL", "PostgreSQL"]
  },

  // IA E AUTOMAÇÃO
  {
    t: "Analisador ATS com IA",
    area: "ia",
    level: "avancado",
    type: "api",
    icon: "lucide:brain-circuit",
    txt: "Construa uma aplicação que recebe currículo, envia para IA e retorna score ATS com melhorias.",
    techs: ["Node.js", "Multer", "Groq API"]
  },
  {
    t: "Gerador de Resumo com IA",
    area: "ia",
    level: "intermediario",
    type: "api",
    icon: "lucide:sparkles",
    txt: "Crie uma ferramenta que recebe um texto longo e gera resumo, tópicos principais e sugestões.",
    techs: ["JavaScript", "API IA", "Prompt"]
  },
  {
    t: "Automação de Candidaturas",
    area: "automacao",
    level: "intermediario",
    type: "workflow",
    icon: "lucide:workflow",
    txt: "Crie um fluxo para organizar vagas, salvar status de candidatura e enviar lembretes.",
    techs: ["n8n", "Google Sheets", "Webhooks"]
  },

  // MOBILE
  {
    t: "App de Hábitos",
    area: "mobile",
    level: "intermediario",
    type: "app",
    icon: "lucide:calendar-check",
    txt: "Crie um aplicativo para registrar hábitos, acompanhar frequência e visualizar progresso semanal.",
    techs: ["React Native", "Storage", "UI Mobile"]
  },
  {
    t: "App de Estudos",
    area: "mobile",
    level: "iniciante",
    type: "app",
    icon: "lucide:smartphone",
    txt: "Monte um app simples com lista de conteúdos, metas de estudo e progresso por categoria.",
    techs: ["Flutter", "Dart", "Mobile"]
  },

  // DEVOPS / CLOUD
  {
    t: "Deploy de API na Nuvem",
    area: "cloud",
    level: "intermediario",
    type: "deploy",
    icon: "lucide:cloud-upload",
    txt: "Publique uma API em uma plataforma cloud e configure variáveis de ambiente e CORS.",
    techs: ["Node.js", "Render", "Deploy"]
  },
  {
    t: "Pipeline CI/CD Simples",
    area: "devops",
    level: "intermediario",
    type: "devops",
    icon: "lucide:git-branch",
    txt: "Configure uma automação para testar e preparar o projeto sempre que houver push no GitHub.",
    techs: ["GitHub Actions", "Git", "CI/CD"]
  },

  // DESIGN / UX
  {
    t: "Protótipo de Dashboard no Figma",
    area: "design",
    level: "iniciante",
    type: "ui-ux",
    icon: "lucide:pen-tool",
    txt: "Crie o protótipo visual de um dashboard com cards, menus, filtros e estados de tela.",
    techs: ["Figma", "UI Design", "Protótipo"]
  },
  {
    t: "Redesign de Página Existente",
    area: "design",
    level: "iniciante",
    type: "ui-ux",
    icon: "lucide:paintbrush",
    txt: "Escolha uma página simples e refaça a interface com melhor hierarquia, espaçamento e responsividade.",
    techs: ["UI/UX", "CSS", "Responsivo"]
  },

  // CARREIRA / PORTFÓLIO
  {
    t: "Portfólio Profissional",
    area: "carreira",
    level: "iniciante",
    type: "portfolio",
    icon: "lucide:user-round",
    txt: "Crie um portfólio com apresentação, tecnologias, projetos, links, currículo e contato.",
    techs: ["HTML", "CSS", "GitHub Pages"]
  },
  {
    t: "README Profissional para GitHub",
    area: "carreira",
    level: "iniciante",
    type: "portfolio",
    icon: "lucide:file-text",
    txt: "Monte um README organizado para apresentar um projeto com descrição, tecnologias e imagens.",
    techs: ["Markdown", "GitHub", "Documentação"]
  }
];