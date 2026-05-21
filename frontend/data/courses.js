window.ConectaData = window.ConectaData || {};

window.ConectaData.courses = [
  // FRONT-END
  { t: 'HTML5 e CSS3 — Curso em Vídeo', area: 'front-end', level: 'iniciante', dur: 'longa', platform: 'Curso em Vídeo', icon: 'logos:html-5', txt: 'Base para criar páginas, estrutura HTML, estilos CSS e responsividade.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'JavaScript Moderno', area: 'front-end', level: 'iniciante', dur: 'longa', platform: 'Curso em Vídeo', icon: 'logos:javascript', txt: 'Manipulação do DOM, eventos, funções e interatividade para aplicações web.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'JavaScript Básico', area: 'front-end', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'logos:javascript', txt: 'Fundamentos da linguagem JavaScript e interatividade web.', url: 'https://www.ev.org.br/' },
  { t: 'JavaScript Assíncrono', area: 'front-end', level: 'intermediario', dur: 'curta', platform: 'Rocketseat', icon: 'logos:javascript', txt: 'Promises, async/await e consumo de APIs.', url: 'https://www.rocketseat.com.br/discover' },
  { t: 'Crie um Site Simples usando HTML, CSS e JavaScript', area: 'front-end', level: 'iniciante', dur: 'media', platform: 'Fundação Bradesco', icon: 'logos:html-5', txt: 'Projeto prático para desenvolvimento web básico.', url: 'https://www.ev.org.br/' },
  { t: 'React JS Fundamentos', area: 'front-end', level: 'intermediario', dur: 'longa', platform: 'Rocketseat', icon: 'logos:react', txt: 'Criação de interfaces modernas utilizando componentes e hooks.', url: 'https://www.rocketseat.com.br/discover' },
  { t: 'Next.js Fundamentos', area: 'front-end', level: 'intermediario', dur: 'media', platform: 'Rocketseat', icon: 'logos:nextjs-icon', txt: 'Framework React para aplicações modernas.', url: 'https://www.rocketseat.com.br/discover' },
  { t: 'TypeScript na prática', area: 'front-end', level: 'intermediario', dur: 'media', platform: 'DIO', icon: 'logos:typescript-icon', txt: 'Tipagem estática e desenvolvimento mais seguro com JavaScript.', url: 'https://www.dio.me/' },
  { t: 'Vue.js Essentials', area: 'front-end', level: 'intermediario', dur: 'media', platform: 'Vue School', icon: 'logos:vue', txt: 'Criação de interfaces reativas com Vue.js.', url: 'https://vueschool.io/' },
  { t: 'Angular para iniciantes', area: 'front-end', level: 'intermediario', dur: 'longa', platform: 'Loiane Training', icon: 'logos:angular-icon', txt: 'SPA modernas com Angular, componentes e serviços.', url: 'https://loiane.training/' },
  { t: 'Tailwind CSS', area: 'front-end', level: 'iniciante', dur: 'curta', platform: 'Tailwind Docs', icon: 'logos:tailwindcss-icon', txt: 'Estilização moderna e produtiva com classes utilitárias.', url: 'https://tailwindcss.com/docs/' },
  { t: 'Bootstrap 5', area: 'front-end', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'logos:bootstrap', txt: 'Framework CSS para construção rápida de interfaces responsivas.', url: 'https://www.ev.org.br/' },
  { t: 'Responsive Web Design', area: 'front-end', level: 'iniciante', dur: 'media', platform: 'FreeCodeCamp', icon: 'mdi:responsive', txt: 'Layouts responsivos e adaptação para dispositivos móveis.', url: 'https://www.freecodecamp.org/' },
  { t: 'Acessibilidade Web', area: 'front-end', level: 'iniciante', dur: 'curta', platform: 'MDN', icon: 'mdi:human-wheelchair', txt: 'Boas práticas de acessibilidade e inclusão digital.', url: 'https://developer.mozilla.org/pt-BR/' },
  { t: 'SEO para Desenvolvedores', area: 'front-end', level: 'iniciante', dur: 'curta', platform: 'Google Search Central', icon: 'mdi:magnify', txt: 'Otimização de sites para mecanismos de busca.', url: 'https://developers.google.com/search' },
  { t: 'SASS e CSS Avançado', area: 'front-end', level: 'intermediario', dur: 'curta', platform: 'Origamid', icon: 'logos:sass', txt: 'Organização e escalabilidade de estilos CSS.', url: 'https://www.origamid.com/' },

  // BACK-END
  { t: 'Java Básico', area: 'back-end', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'devicon:java', txt: 'Fundamentos de Java, orientação a objetos e base para sistemas acadêmicos.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Curso de Java POO', area: 'back-end', level: 'intermediario', dur: 'longa', platform: 'Curso em Vídeo', icon: 'devicon:java', txt: 'Programação orientada a objetos utilizando Java.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Node.js para APIs', area: 'back-end', level: 'intermediario', dur: 'media', platform: 'Rocketseat', icon: 'logos:nodejs-icon', txt: 'Criação de APIs REST, rotas, middleware e integração com banco.', url: 'https://www.rocketseat.com.br/discover' },
  { t: 'PHP Moderno', area: 'back-end', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'logos:php', txt: 'Fundamentos do PHP para desenvolvimento web dinâmico.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'C# e .NET', area: 'back-end', level: 'iniciante', dur: 'media', platform: 'Microsoft Learn', icon: 'logos:c-sharp', txt: 'Introdução ao ecossistema .NET e desenvolvimento backend.', url: 'https://learn.microsoft.com/pt-br/training/' },
  { t: 'APIs RESTful', area: 'back-end', level: 'intermediario', dur: 'media', platform: 'Alura', icon: 'mdi:api', txt: 'Criação e consumo de APIs modernas.', url: 'https://www.alura.com.br/' },
  { t: 'Fundamentos de APIs', area: 'back-end', level: 'iniciante', dur: 'curta', platform: 'Postman', icon: 'logos:postman-icon', txt: 'Conceitos de APIs, requisições HTTP e testes.', url: 'https://learning.postman.com/' },
  { t: 'Testes Automatizados', area: 'back-end', level: 'intermediario', dur: 'media', platform: 'Alura', icon: 'mdi:test-tube', txt: 'Qualidade de software e testes unitários.', url: 'https://www.alura.com.br/' },

  // PROGRAMAÇÃO
  { t: 'Algoritmos e Lógica de Programação', area: 'programacao', level: 'iniciante', dur: 'curta', platform: 'Curso em Vídeo', icon: 'ph:flow-arrow-bold', txt: 'Primeiros passos com lógica, variáveis, condições, laços e resolução de problemas.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Introdução à Programação', area: 'programacao', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'ph:code-bold', txt: 'Conceitos iniciais de programação, lógica e desenvolvimento de software.', url: 'https://www.ev.org.br/' },
  { t: 'Tecnologia da Informação', area: 'programacao', level: 'iniciante', dur: 'media', platform: 'Fundação Bradesco', icon: 'lucide:graduation-cap', txt: 'Cursos gratuitos de tecnologia, programação e produtividade para iniciar sua base.', url: 'https://www.ev.org.br/areas-de-interesse/tecnologia' },
  { t: 'Programação Orientada a Objetos', area: 'programacao', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'mdi:cube-outline', txt: 'Classes, objetos, herança e encapsulamento.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Desenvolvimento Orientado a Objetos', area: 'programacao', level: 'intermediario', dur: 'media', platform: 'Fundação Bradesco', icon: 'mdi:cube-outline', txt: 'Introdução à orientação a objetos aplicada ao desenvolvimento.', url: 'https://www.ev.org.br/' },
  { t: 'Estrutura de Dados', area: 'programacao', level: 'intermediario', dur: 'longa', platform: 'FreeCodeCamp', icon: 'mdi:sitemap-outline', txt: 'Listas, filas, pilhas e algoritmos eficientes.', url: 'https://www.freecodecamp.org/' },
  { t: 'Fundamentos de Computação', area: 'programacao', level: 'iniciante', dur: 'media', platform: 'Harvard CS50', icon: 'mdi:laptop', txt: 'Conceitos fundamentais da ciência da computação.', url: 'https://cs50.harvard.edu/' },
  { t: 'VS Code para Programadores', area: 'programacao', level: 'iniciante', dur: 'curta', platform: 'Microsoft Learn', icon: 'logos:visual-studio-code', txt: 'Editor, extensões e produtividade no desenvolvimento.', url: 'https://learn.microsoft.com/' },

  // DADOS
  { t: 'Python para iniciantes', area: 'dados', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'devicon:python', txt: 'Sintaxe, lógica, exercícios e fundamentos para automação ou análise de dados.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Linguagem de Programação Python', area: 'dados', level: 'iniciante', dur: 'media', platform: 'Fundação Bradesco', icon: 'devicon:python', txt: 'Curso introdutório de Python voltado para lógica e automação.', url: 'https://www.ev.org.br/' },
  { t: 'Python para Data Science', area: 'dados', level: 'intermediario', dur: 'longa', platform: 'Data Science Academy', icon: 'logos:python', txt: 'Análise de dados com pandas, numpy e visualização.', url: 'https://www.datascienceacademy.com.br/' },
  { t: 'SQL e Banco de Dados', area: 'dados', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'devicon:mysql', txt: 'Consultas, organização de dados e noções importantes para sistemas e relatórios.', url: 'https://www.ev.org.br/areas-de-interesse/tecnologia' },
  { t: 'Fundamentos de Banco de Dados', area: 'dados', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'devicon:mysql', txt: 'Modelagem de dados, SQL básico e conceitos relacionais.', url: 'https://www.ev.org.br/' },
  { t: 'Curso de MySQL', area: 'dados', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'devicon:mysql', txt: 'Criação de bancos relacionais e consultas SQL.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'PostgreSQL na prática', area: 'dados', level: 'intermediario', dur: 'media', platform: 'DIO', icon: 'logos:postgresql', txt: 'Banco relacional, modelagem e consultas SQL avançadas.', url: 'https://www.dio.me/' },
  { t: 'MongoDB Básico', area: 'dados', level: 'iniciante', dur: 'curta', platform: 'MongoDB University', icon: 'logos:mongodb-icon', txt: 'Banco NoSQL e manipulação de documentos.', url: 'https://learn.mongodb.com/' },
  { t: 'Power BI Fundamentos', area: 'dados', level: 'iniciante', dur: 'media', platform: 'Fundação Bradesco', icon: 'logos:microsoft-power-bi', txt: 'Dashboards, relatórios e análise visual de dados.', url: 'https://www.ev.org.br/' },
  { t: 'Excel para Análise de Dados', area: 'dados', level: 'iniciante', dur: 'media', platform: 'Fundação Bradesco', icon: 'vscode-icons:file-type-excel', txt: 'Funções, gráficos e análise de dados utilizando Excel.', url: 'https://www.ev.org.br/' },
  { t: 'Excel Avançado', area: 'dados', level: 'intermediario', dur: 'media', platform: 'Fundação Bradesco', icon: 'vscode-icons:file-type-excel', txt: 'Fórmulas, dashboards e produtividade com Excel.', url: 'https://www.ev.org.br/' },
  { t: 'Introdução à Ciência de Dados', area: 'dados', level: 'iniciante', dur: 'media', platform: 'FGV', icon: 'mdi:chart-line', txt: 'Conceitos fundamentais de análise e interpretação de dados.', url: 'https://educacao-executiva.fgv.br/cursos/online' },

  // IA
  { t: 'Machine Learning Básico', area: 'ia', level: 'intermediario', dur: 'longa', platform: 'Kaggle', icon: 'carbon:machine-learning-model', txt: 'Introdução aos modelos de aprendizado de máquina.', url: 'https://www.kaggle.com/learn' },
  { t: 'Inteligência Artificial Generativa', area: 'ia', level: 'intermediario', dur: 'media', platform: 'Microsoft Learn', icon: 'mdi:robot-outline', txt: 'Conceitos de IA generativa, prompts e aplicações modernas.', url: 'https://learn.microsoft.com/pt-br/training/' },
  { t: 'Prompt Engineering', area: 'ia', level: 'intermediario', dur: 'curta', platform: 'DeepLearning.AI', icon: 'solar:chat-round-line-outline', txt: 'Técnicas para criação de prompts eficientes para IA.', url: 'https://www.deeplearning.ai/' },
  { t: 'Ética em Inteligência Artificial', area: 'ia', level: 'intermediario', dur: 'curta', platform: 'FGV', icon: 'mdi:robot-outline', txt: 'Discussões sobre impacto social, ética e uso responsável da IA.', url: 'https://educacao-executiva.fgv.br/cursos/online' },
  { t: 'ChatGPT para produtividade', area: 'ia', level: 'iniciante', dur: 'curta', platform: 'OpenAI', icon: 'simple-icons:openai', txt: 'Uso de IA para produtividade, estudos e desenvolvimento.', url: 'https://openai.com/' },

  // CLOUD
  { t: 'Microsoft Learn — Fundamentos Cloud', area: 'cloud', level: 'iniciante', dur: 'media', platform: 'Microsoft Learn', icon: 'logos:microsoft-azure', txt: 'Roteiros gratuitos para aprender cloud, Azure, IA, dados e tecnologia Microsoft.', url: 'https://learn.microsoft.com/pt-br/training/' },
  { t: 'AWS Cloud Practitioner', area: 'cloud', level: 'iniciante', dur: 'media', platform: 'AWS Skill Builder', icon: 'logos:aws', txt: 'Introdução aos principais serviços AWS.', url: 'https://explore.skillbuilder.aws/' },
  { t: 'Google Cloud Foundations', area: 'cloud', level: 'iniciante', dur: 'media', platform: 'Google Cloud Skills Boost', icon: 'logos:google-cloud', txt: 'Conceitos fundamentais da nuvem Google Cloud.', url: 'https://www.cloudskillsboost.google/' },
  { t: 'Firebase Essentials', area: 'cloud', level: 'iniciante', dur: 'media', platform: 'Firebase', icon: 'logos:firebase', txt: 'Autenticação, banco em nuvem e hosting.', url: 'https://firebase.google.com/learn' },
  { t: 'Introdução ao Cloud Computing', area: 'cloud', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'mdi:cloud-outline', txt: 'Conceitos de computação em nuvem e serviços cloud.', url: 'https://www.ev.org.br/' },

  // DEVOPS
  { t: 'Docker Essencial', area: 'devops', level: 'intermediario', dur: 'media', platform: 'Full Cycle', icon: 'logos:docker-icon', txt: 'Containers, imagens e ambientes padronizados.', url: 'https://fullcycle.com.br/' },
  { t: 'Linux para Desenvolvedores', area: 'devops', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'logos:linux-tux', txt: 'Terminal Linux, comandos e administração básica.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Curso de Linux', area: 'devops', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'logos:linux-tux', txt: 'Terminal Linux, comandos básicos e administração inicial.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'GitHub Actions', area: 'devops', level: 'intermediario', dur: 'curta', platform: 'GitHub Docs', icon: 'mdi:github', txt: 'Automação de deploys e pipelines CI/CD.', url: 'https://docs.github.com/' },
  { t: 'DevOps Foundations', area: 'devops', level: 'intermediario', dur: 'media', platform: 'LinkedIn Learning', icon: 'mdi:infinity', txt: 'Integração contínua, deploy e cultura DevOps.', url: 'https://www.linkedin.com/learning/' },

  // MOBILE
  { t: 'Desenvolvimento Mobile com Flutter', area: 'mobile', level: 'intermediario', dur: 'longa', platform: 'Flutter', icon: 'logos:flutter', txt: 'Aplicativos multiplataforma com Flutter.', url: 'https://flutter.dev/learn' },
  { t: 'React Native', area: 'mobile', level: 'intermediario', dur: 'longa', platform: 'Rocketseat', icon: 'logos:react', txt: 'Criação de aplicativos mobile com JavaScript e React.', url: 'https://www.rocketseat.com.br/discover' },
  { t: 'Kotlin para Android', area: 'mobile', level: 'iniciante', dur: 'media', platform: 'Google Developers', icon: 'logos:kotlin-icon', txt: 'Fundamentos do desenvolvimento Android moderno.', url: 'https://developer.android.com/' },
  { t: 'Swift e iOS', area: 'mobile', level: 'iniciante', dur: 'media', platform: 'Apple Developer', icon: 'logos:swift', txt: 'Introdução ao desenvolvimento de apps para iPhone.', url: 'https://developer.apple.com/tutorials/' },
  { t: 'Desenvolvimento Mobile Básico', area: 'mobile', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'mdi:cellphone', txt: 'Introdução ao desenvolvimento de aplicativos móveis.', url: 'https://www.cursoemvideo.com/cursos/' },

  // AUTOMAÇÃO
  { t: 'n8n Automações', area: 'automacao', level: 'intermediario', dur: 'media', platform: 'YouTube', icon: 'simple-icons:n8n', txt: 'Fluxos automatizados integrando APIs, IA e serviços.', url: 'https://www.youtube.com/' },
  { t: 'No-Code e Low-Code', area: 'automacao', level: 'iniciante', dur: 'media', platform: 'YouTube', icon: 'mdi:code-tags', txt: 'Automação e criação de soluções sem programação tradicional.', url: 'https://www.youtube.com/' },

  // DESIGN
  { t: 'UI/UX Design', area: 'design', level: 'iniciante', dur: 'media', platform: 'Google Ateliê Digital', icon: 'mdi:palette-outline', txt: 'Fundamentos de experiência do usuário, prototipação e design visual.', url: 'https://learndigital.withgoogle.com/ateliedigital' },
  { t: 'Figma para Interfaces', area: 'design', level: 'iniciante', dur: 'curta', platform: 'YouTube', icon: 'logos:figma', txt: 'Criação de protótipos e layouts modernos para aplicações.', url: 'https://www.youtube.com/' },

  // SEGURANÇA
  { t: 'Cybersecurity Essentials', area: 'seguranca', level: 'iniciante', dur: 'media', platform: 'Cisco Networking Academy', icon: 'mdi:shield-lock-outline', txt: 'Princípios básicos de segurança digital e proteção de dados.', url: 'https://www.netacad.com/' },
  { t: 'Segurança em Tecnologia da Informação', area: 'seguranca', level: 'iniciante', dur: 'media', platform: 'Fundação Bradesco', icon: 'mdi:shield-lock-outline', txt: 'Boas práticas de segurança digital, redes e proteção de dados.', url: 'https://www.ev.org.br/' },

  // INFRAESTRUTURA
  { t: 'Redes de Computadores', area: 'infraestrutura', level: 'iniciante', dur: 'longa', platform: 'Curso em Vídeo', icon: 'mdi:lan-connect', txt: 'Protocolos, IP, roteamento e fundamentos de redes.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Curso de Redes de Computadores', area: 'infraestrutura', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'mdi:lan-connect', txt: 'Conceitos básicos de redes, IP e comunicação.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Curso de Hardware', area: 'infraestrutura', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'mdi:memory', txt: 'Componentes de computadores, montagem e manutenção.', url: 'https://www.cursoemvideo.com/cursos/' },

  // CARREIRA
  { t: 'Git e GitHub para Projetos', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'GitHub Docs', icon: 'mdi:github', txt: 'Controle de versão, repositórios, README e publicação de portfólio.', url: 'https://docs.github.com/pt/get-started' },
  { t: 'Curso de Git e GitHub', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'Curso em Vídeo', icon: 'mdi:github', txt: 'Versionamento de código e publicação de projetos.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Desenvolvimento pessoal e profissional', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'lucide:file-check-2', txt: 'Apoio para currículo, comunicação, postura profissional e empregabilidade.', url: 'https://www.ev.org.br/areas-de-interesse/desenvolvimento-pessoal-e-profissional' },
  { t: 'Scrum e Metodologias Ágeis', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'mdi:account-group-outline', txt: 'Gestão ágil de projetos e trabalho em equipe.', url: 'https://www.ev.org.br/' },
  { t: 'LinkedIn para Tecnologia', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'YouTube', icon: 'mdi:linkedin', txt: 'Perfil profissional, networking e posicionamento na área tech.', url: 'https://www.youtube.com/' },
  { t: 'Currículo para TI', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'DIO', icon: 'mdi:file-account-outline', txt: 'Criação de currículo estratégico para vagas de tecnologia.', url: 'https://www.dio.me/' },
  { t: 'Governança de TI', area: 'carreira', level: 'intermediario', dur: 'curta', platform: 'Fundação Bradesco', icon: 'mdi:office-building-cog-outline', txt: 'Conceitos de governança, processos e gestão em tecnologia.', url: 'https://www.ev.org.br/' },
  { t: 'Fundamentos de Administração', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'FGV', icon: 'mdi:briefcase-outline', txt: 'Noções de gestão, planejamento e organização profissional.', url: 'https://educacao-executiva.fgv.br/cursos/online' },
  { t: 'Marketing Digital', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'FGV', icon: 'mdi:bullhorn-outline', txt: 'Estratégias digitais, comunicação e presença online.', url: 'https://educacao-executiva.fgv.br/cursos/online' },
  { t: 'Comunicação Empresarial', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'FGV', icon: 'mdi:account-voice-outline', txt: 'Comunicação profissional, escrita e postura no ambiente corporativo.', url: 'https://educacao-executiva.fgv.br/cursos/online' }
];