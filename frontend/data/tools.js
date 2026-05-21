window.ConectaData = window.ConectaData || {};

window.ConectaData.tools = [

  // FRONT-END
  {
    slug: 'html-css',
    t: 'HTML e CSS',
    area: 'front-end',
    icon: 'devicon:html5',
    txt: 'Base da construção web: estrutura, estilos, responsividade, layouts modernos e acessibilidade.',
    tags: ['HTML', 'CSS', 'Responsivo', 'Web']
  },

  {
    slug: 'javascript',
    t: 'JavaScript',
    area: 'front-end',
    icon: 'logos:javascript',
    txt: 'Interatividade, lógica no navegador, filtros, modais, formulários e consumo de APIs.',
    tags: ['DOM', 'Eventos', 'Lógica', 'Front-end']
  },

  {
    slug: 'typescript',
    t: 'TypeScript',
    area: 'front-end',
    icon: 'logos:typescript-icon',
    txt: 'Superset do JavaScript com tipagem estática para aplicações maiores e mais seguras.',
    tags: ['Type Safety', 'JS', 'Escalabilidade']
  },

  {
    slug: 'react',
    t: 'React',
    area: 'front-end',
    icon: 'logos:react',
    txt: 'Biblioteca para construção de interfaces modernas baseadas em componentes.',
    tags: ['SPA', 'Hooks', 'Componentes']
  },

  {
    slug: 'nextjs',
    t: 'Next.js',
    area: 'front-end',
    icon: 'logos:nextjs-icon',
    txt: 'Framework React focado em performance, rotas, SSR e aplicações modernas.',
    tags: ['SSR', 'React', 'Framework']
  },

  {
    slug: 'tailwind',
    t: 'Tailwind CSS',
    area: 'front-end',
    icon: 'logos:tailwindcss-icon',
    txt: 'Framework utilitário para criação rápida de interfaces modernas e responsivas.',
    tags: ['CSS', 'UI', 'Responsivo']
  },

  {
    slug: 'bootstrap',
    t: 'Bootstrap',
    area: 'front-end',
    icon: 'logos:bootstrap',
    txt: 'Framework CSS para desenvolvimento rápido de layouts e componentes.',
    tags: ['CSS', 'Grid', 'Componentes']
  },

  // BACK-END
  {
    slug: 'nodejs',
    t: 'Node.js',
    area: 'back-end',
    icon: 'logos:nodejs-icon',
    txt: 'Execução de JavaScript no servidor para APIs, autenticação e sistemas backend.',
    tags: ['API', 'Backend', 'JavaScript']
  },

  {
    slug: 'express',
    t: 'Express',
    area: 'back-end',
    icon: 'simple-icons:express',
    txt: 'Framework minimalista para criação de APIs REST e aplicações backend.',
    tags: ['REST', 'Middleware', 'Node.js']
  },

  {
    slug: 'php',
    t: 'PHP',
    area: 'back-end',
    icon: 'logos:php',
    txt: 'Linguagem backend muito usada para sites dinâmicos e sistemas web.',
    tags: ['Backend', 'CRUD', 'Web']
  },

  {
    slug: 'java',
    t: 'Java',
    area: 'back-end',
    icon: 'devicon:java',
    txt: 'Linguagem orientada a objetos muito utilizada em sistemas corporativos e APIs.',
    tags: ['POO', 'Backend', 'Orientação a Objetos']
  },

  {
    slug: 'csharp',
    t: 'C# e .NET',
    area: 'back-end',
    icon: 'logos:c-sharp',
    txt: 'Ecossistema Microsoft para aplicações backend, desktop e APIs modernas.',
    tags: ['.NET', 'Backend', 'Microsoft']
  },

  // DADOS
  {
    slug: 'sql-mysql',
    t: 'SQL e MySQL',
    area: 'dados',
    icon: 'devicon:mysql',
    txt: 'Consultas, bancos relacionais, relatórios, dashboards e sistemas CRUD.',
    tags: ['Banco de Dados', 'CRUD', 'SQL']
  },

  {
    slug: 'postgresql',
    t: 'PostgreSQL',
    area: 'dados',
    icon: 'logos:postgresql',
    txt: 'Banco de dados relacional robusto utilizado em aplicações profissionais.',
    tags: ['Database', 'SQL', 'Backend']
  },

  {
    slug: 'mongodb',
    t: 'MongoDB',
    area: 'dados',
    icon: 'logos:mongodb-icon',
    txt: 'Banco NoSQL baseado em documentos JSON para aplicações modernas.',
    tags: ['NoSQL', 'JSON', 'Database']
  },

  {
    slug: 'powerbi',
    t: 'Power BI',
    area: 'dados',
    icon: 'logos:microsoft-power-bi',
    txt: 'Ferramenta para dashboards, relatórios e análise visual de dados.',
    tags: ['Dashboard', 'BI', 'Dados']
  },

  {
    slug: 'excel',
    t: 'Excel',
    area: 'dados',
    icon: 'vscode-icons:file-type-excel',
    txt: 'Planilhas, gráficos, fórmulas e organização de dados para negócios e análise.',
    tags: ['Planilhas', 'Relatórios', 'Dados']
  },

  {
    slug: 'python',
    t: 'Python',
    area: 'dados',
    icon: 'devicon:python',
    txt: 'Lógica, automação, análise de dados, IA e scripts para produtividade.',
    tags: ['Automação', 'Dados', 'Scripts']
  },

  // IA
  {
    slug: 'openai',
    t: 'OpenAI / ChatGPT',
    area: 'ia',
    icon: 'simple-icons:openai',
    txt: 'Ferramentas de IA generativa para produtividade, código, análise e automações.',
    tags: ['IA', 'Prompt', 'Produtividade']
  },

  {
    slug: 'groq',
    t: 'Groq API',
    area: 'ia',
    icon: 'lucide:brain-circuit',
    txt: 'API de IA focada em respostas rápidas para chatbots e aplicações inteligentes.',
    tags: ['LLM', 'IA', 'API']
  },

  {
    slug: 'prompt-engineering',
    t: 'Prompt Engineering',
    area: 'ia',
    icon: 'solar:chat-round-line-outline',
    txt: 'Criação de prompts eficientes para melhorar respostas de modelos de IA.',
    tags: ['Prompt', 'IA', 'LLM']
  },

  // DESIGN
  {
    slug: 'figma',
    t: 'Figma',
    area: 'design',
    icon: 'logos:figma',
    txt: 'Design de interfaces, protótipos, componentes e fluxos de experiência.',
    tags: ['UI', 'UX', 'Protótipo']
  },

  {
    slug: 'photoshop',
    t: 'Photoshop',
    area: 'design',
    icon: 'logos:adobe-photoshop',
    txt: 'Edição de imagens, banners, layouts e materiais visuais.',
    tags: ['Design', 'Imagem', 'Adobe']
  },

  // DEVOPS / CLOUD
  {
    slug: 'git-github',
    t: 'Git e GitHub',
    area: 'devops',
    icon: 'mdi:github',
    txt: 'Versionamento, repositórios, README, portfólio e colaboração em projetos.',
    tags: ['Git', 'Versionamento', 'Portfólio']
  },

  {
    slug: 'docker',
    t: 'Docker',
    area: 'devops',
    icon: 'logos:docker-icon',
    txt: 'Containers para padronizar ambientes e facilitar deploys.',
    tags: ['Containers', 'Deploy', 'DevOps']
  },

  {
    slug: 'github-actions',
    t: 'GitHub Actions',
    area: 'devops',
    icon: 'mdi:source-branch',
    txt: 'Automação de testes, deploys e pipelines CI/CD.',
    tags: ['CI/CD', 'Deploy', 'Automação']
  },

  {
    slug: 'aws',
    t: 'AWS',
    area: 'cloud',
    icon: 'logos:aws',
    txt: 'Serviços cloud para hospedagem, bancos, APIs e infraestrutura escalável.',
    tags: ['Cloud', 'Infraestrutura', 'Deploy']
  },

  {
    slug: 'azure',
    t: 'Microsoft Azure',
    area: 'cloud',
    icon: 'logos:microsoft-azure',
    txt: 'Plataforma cloud da Microsoft com foco em APIs, IA e infraestrutura.',
    tags: ['Cloud', 'Microsoft', 'Deploy']
  },

  {
    slug: 'firebase',
    t: 'Firebase',
    area: 'cloud',
    icon: 'logos:firebase',
    txt: 'Backend em nuvem com autenticação, banco em tempo real e hosting.',
    tags: ['Hosting', 'Auth', 'Cloud']
  },

  {
    slug: 'render',
    t: 'Render',
    area: 'cloud',
    icon: 'simple-icons:render',
    txt: 'Hospedagem moderna para APIs, bancos e aplicações web.',
    tags: ['Deploy', 'Backend', 'Cloud']
  },

  {
    slug: 'vercel',
    t: 'Vercel',
    area: 'cloud',
    icon: 'logos:vercel-icon',
    txt: 'Plataforma otimizada para hospedagem de front-end e aplicações modernas.',
    tags: ['Deploy', 'Front-end', 'Cloud']
  },

  // FERRAMENTAS GERAIS
  {
    slug: 'vscode',
    t: 'VS Code',
    area: 'ferramentas',
    icon: 'devicon:vscode',
    txt: 'Editor de código com terminal integrado, extensões e organização de projetos.',
    tags: ['Editor', 'Código', 'Produtividade']
  },

  {
    slug: 'devtools',
    t: 'DevTools',
    area: 'ferramentas',
    icon: 'logos:chrome',
    txt: 'Inspeção de HTML, CSS, responsividade, console e depuração no navegador.',
    tags: ['Debug', 'Browser', 'Front-end']
  },

  {
    slug: 'apis',
    t: 'APIs',
    area: 'ferramentas',
    icon: 'lucide:plug-zap',
    txt: 'Integração entre sistemas, dados JSON e comunicação entre aplicações.',
    tags: ['REST', 'JSON', 'Integração']
  },

  {
    slug: 'postman',
    t: 'Postman',
    area: 'ferramentas',
    icon: 'logos:postman-icon',
    txt: 'Testes de APIs, autenticação, collections e requisições HTTP.',
    tags: ['API', 'HTTP', 'Testes']
  },

  {
    slug: 'terminal',
    t: 'Terminal',
    area: 'ferramentas',
    icon: 'lucide:terminal',
    txt: 'Comandos, Git, execução de programas, navegação e automações simples.',
    tags: ['CLI', 'Shell', 'Comandos']
  },

  {
    slug: 'n8n',
    t: 'n8n',
    area: 'automacao',
    icon: 'simple-icons:n8n',
    txt: 'Ferramenta de automação visual para integrar APIs, IA e serviços.',
    tags: ['Workflow', 'Automação', 'IA']
  }
];