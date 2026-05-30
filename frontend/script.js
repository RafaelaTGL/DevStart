function loadGlobalComponents() {
  const components = window.ConectaComponents || {};
  const sidebarTarget = document.querySelector('[data-component="sidebar"]');
  const headerTarget = document.querySelector('[data-component="header"]');

  if (sidebarTarget && components.sidebar) {
    sidebarTarget.outerHTML = components.sidebar;
    setActiveSidebarLink();
  }

  if (headerTarget && components.header) {
    headerTarget.outerHTML = components.header;
  }
}

function setActiveSidebarLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
  const activePage = currentPage.startsWith('ferramenta-') || currentPage === 'tool-detail.html' ? 'ferramentas.html' : currentPage;

  document.querySelectorAll('.side-nav a').forEach(link => {
    const linkPage = link.getAttribute('href')?.split('/').pop();
    link.classList.toggle('active', linkPage === activePage);
  });
}

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const icon = (name) => `<span class="iconify" data-icon="${name}"></span>`;

const data = window.ConectaData || {};
const courses = data.courses || [];
const jobs = data.jobs || [];
const tools = data.tools || [];
const roadmaps = data.roadmaps || {};
const projects = data.projects || [];

function initTheme() {
  const saved = localStorage.getItem('conecta-theme') || 'light';

  document.body.classList.toggle('dark-mode', saved === 'dark');
  updateThemeIcon();

  $$('.theme-toggle').forEach(btn => btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem(
      'conecta-theme',
      document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
    updateThemeIcon();
  }));
}

function updateThemeIcon() {
  const dark = document.body.classList.contains('dark-mode');
  $$('.theme-toggle').forEach(btn => btn.innerHTML = icon(dark ? 'lucide:sun' : 'lucide:moon'));
}

function initCommon() {
  initTheme();

  const sidebar = $('.sidebar');
  const overlay = $('.menu-overlay');

  $$('.mobile-menu,[data-close-sidebar]').forEach(btn =>
    btn.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
      overlay?.classList.toggle('open');
    })
  );

  overlay?.addEventListener('click', () => {
    sidebar?.classList.remove('open');
    overlay.classList.remove('open');
  });

  $$('.faq-q').forEach(btn =>
    btn.addEventListener('click', () => btn.closest('.faq-item').classList.toggle('open'))
  );

  $$('.tab-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      const group = btn.closest('[data-tabs]');
      const id = btn.dataset.tab;

      $$('.tab-btn', group).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      $$('.tab-panel', group).forEach(p => p.classList.toggle('active', p.id === id));
    })
  );

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }),
    { threshold: .12 }
  );

  $$('.reveal,.card,.stat').forEach(el => observer.observe(el));

  $$('.btn').forEach(btn =>
    btn.addEventListener('click', e => {
      if (getComputedStyle(btn).position === 'static') {
        btn.style.position = 'relative';
      }

      const r = document.createElement('span');

      r.style.cssText =
        'position:absolute;border-radius:50%;background:rgba(255,255,255,.45);width:12px;height:12px;transform:translate(-50%,-50%) scale(1);animation:ripple .55s ease-out forwards;left:' +
        e.offsetX +
        'px;top:' +
        e.offsetY +
        'px';

      btn.appendChild(r);
      setTimeout(() => r.remove(), 560);
    })
  );
}

function showToast(msg = 'Ação realizada com sucesso!') {
  let t = $('.toast');

  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }

  t.textContent = msg;
  t.classList.add('show');

  setTimeout(() => t.classList.remove('show'), 2600);
}

function openModal(title, body, cta = 'Entendi') {
  let m = $('.modal');

  if (!m) {
    m = document.createElement('div');
    m.className = 'modal';
    document.body.appendChild(m);
  }

  m.innerHTML = `
    <div class="modal-box">
      <div class="modal-head">
        <div>
          <h2 style="margin-top:12px">${title}</h2>
        </div>

        <button class="btn-icon" data-close-modal aria-label="Fechar">
          ${icon('lucide:x')}
        </button>
      </div>

      <div class="lead">${body}</div>

      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px">
        <button class="btn btn-primary" data-modal-ok>
          ${icon('lucide:check-circle')} ${cta}
        </button>

        <button class="btn btn-secondary" data-close-modal>
          Fechar
        </button>
      </div>
    </div>
  `;

  m.classList.add('open');

  $$('[data-close-modal]', m).forEach(b => {
    b.onclick = () => m.classList.remove('open');
  });

  $('[data-modal-ok]', m).onclick = () => {
    m.classList.remove('open');
    showToast('Tudo certo!');
  };
}





function courseCard(c) {
  return `
    <article class="card course-card" data-area="${c.area}" data-level="${c.level}" data-dur="${c.dur}" data-title="${c.t.toLowerCase()} ${c.platform.toLowerCase()}">
      <div class="course-icon">${icon(c.icon)}</div>

      <div>
        <h3>${c.t}</h3>
        <p class="lead" style="font-size:14px;line-height:1.55">${c.txt}</p>
      </div>

      <div class="course-meta">
        <span class="badge">${c.platform}</span>
        <span class="badge">${c.level}</span>
        <span class="badge">${c.dur}</span>
      </div>

      <div class="course-footer">
        <a class="btn btn-primary" href="${c.url}" target="_blank" rel="noopener">
          ${icon('lucide:external-link')} Ver curso
        </a>

      </div>
    </article>
  `;
}

function jobCard(j) {
  return `
    <article class="card job-card" data-type="${j.type}" data-mode="${j.mode}" data-title="${(j.t + ' ' + j.platform + ' ' + j.mode).toLowerCase()}">
      <div class="feature-icon">${icon(j.icon)}</div>

      <div class="badge">${icon('lucide:external-link')} ${j.platform}</div>

      <h3>${j.t}</h3>

      <p class="lead" style="font-size:14px;line-height:1.55">${j.txt}</p>

      <div class="job-meta">
        <span class="badge">${j.type}</span>
        <span class="badge">${j.mode}</span>
      </div>

      <div class="job-footer">
        <a class="btn btn-primary" href="${j.url}" target="_blank" rel="noopener">
          ${icon('lucide:search')} Buscar vaga
        </a>
      </div>
    </article>
  `;
}

function toolCard(t) {
  return `
    <article class="card tool-card">
      <div class="feature-icon">${icon(t.icon)}</div>

      <h3>${t.t}</h3>

      <p class="lead" style="font-size:14px;line-height:1.55">${t.txt}</p>

      <a class="btn btn-primary" href="tool-detail.html?tool=${t.slug}">
        ${icon('lucide:arrow-right')} Ver detalhes
      </a>
    </article>
  `;
}

function initCourses() {
  const grid = $('#coursesGrid');

  if (!grid) return;

  grid.innerHTML = courses.map(courseCard).join('');

  function filter() {
    const q = ($('#courseSearch')?.value || '').toLowerCase();
    const area = $('#areaFilter')?.value || 'all';
    const level = $('#levelFilter')?.value || 'all';
    const dur = $('#durFilter')?.value || 'all';

    let visible = 0;

    $$('.course-card', grid).forEach(card => {
      const ok =
        (!q || card.dataset.title.includes(q)) &&
        (area === 'all' || card.dataset.area === area) &&
        (level === 'all' || card.dataset.level === level) &&
        (dur === 'all' || card.dataset.dur === dur);

      card.style.display = ok ? 'flex' : 'none';

      if (ok) visible++;
    });

    $('#emptyCourses')?.classList.toggle('hidden', visible > 0);
  }

  ['input', 'change'].forEach(ev =>
    [$('#courseSearch'), $('#areaFilter'), $('#levelFilter'), $('#durFilter')].forEach(el =>
      el && el.addEventListener(ev, filter)
    )
  );
}

function initTools() {
  const grid = $("#toolsGrid");

  if (!grid) return;

  grid.innerHTML = tools.map(toolCard).join("");
}

function initToolDetail() {
  const detail = $('#toolDetail');

  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('tool');
  const tool = tools.find(item => item.slug === slug);

  if (!tool) {
    detail.innerHTML = `
      <article class="card tool-detail">
        <div class="feature-icon">${icon('lucide:circle-alert')}</div>
        <h2>Ferramenta não encontrada</h2>
        <p class="lead">Não encontramos essa ferramenta na base de dados.</p>
        <div class="hero-actions" style="margin-top:22px">
          <a class="btn btn-primary" href="ferramentas.html">
            ${icon('lucide:arrow-left')} Voltar para ferramentas
          </a>
        </div>
      </article>
    `;
    return;
  }

  const areaLabel = {
    'front-end': 'Front-end',
    'back-end': 'Back-end',
    dados: 'Dados',
    ia: 'Inteligência Artificial',
    design: 'Design',
    devops: 'DevOps',
    cloud: 'Cloud',
    ferramentas: 'Ferramentas gerais',
    automacao: 'Automação'
  }[tool.area] || tool.area || 'Tecnologia';

  const officialLinks = {
    'html-css': 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    javascript: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    typescript: 'https://www.typescriptlang.org/docs/',
    react: 'https://react.dev/',
    nextjs: 'https://nextjs.org/docs',
    tailwind: 'https://tailwindcss.com/docs',
    bootstrap: 'https://getbootstrap.com/docs/',
    nodejs: 'https://nodejs.org/docs/latest/api/',
    express: 'https://expressjs.com/',
    php: 'https://www.php.net/docs.php',
    java: 'https://dev.java/learn/',
    csharp: 'https://learn.microsoft.com/pt-br/dotnet/csharp/',
    'sql-mysql': 'https://dev.mysql.com/doc/',
    postgresql: 'https://www.postgresql.org/docs/',
    mongodb: 'https://learn.mongodb.com/',
    powerbi: 'https://learn.microsoft.com/pt-br/power-bi/',
    excel: 'https://support.microsoft.com/pt-br/excel',
    python: 'https://docs.python.org/pt-br/3/',
    openai: 'https://platform.openai.com/docs',
    groq: 'https://console.groq.com/docs/overview',
    'prompt-engineering': 'https://www.promptingguide.ai/pt',
    figma: 'https://help.figma.com/',
    photoshop: 'https://helpx.adobe.com/br/photoshop/tutorials.html',
    'git-github': 'https://docs.github.com/pt/get-started',
    docker: 'https://docs.docker.com/',
    'github-actions': 'https://docs.github.com/pt/actions',
    aws: 'https://explore.skillbuilder.aws/',
    azure: 'https://learn.microsoft.com/pt-br/training/azure/',
    firebase: 'https://firebase.google.com/docs',
    render: 'https://docs.render.com/',
    vercel: 'https://vercel.com/docs',
    vscode: 'https://code.visualstudio.com/docs',
    devtools: 'https://developer.chrome.com/docs/devtools',
    apis: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction',
    postman: 'https://learning.postman.com/docs/introduction/overview/',
    terminal: 'https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line',
    n8n: 'https://docs.n8n.io/'
  };

  const usedForByArea = {
    'front-end': ['Criar interfaces e páginas responsivas', 'Melhorar a experiência visual do usuário', 'Construir projetos para portfólio web'],
    'back-end': ['Criar APIs e regras de negócio', 'Conectar sistemas com banco de dados', 'Trabalhar com autenticação e integrações'],
    dados: ['Organizar e analisar informações', 'Criar relatórios e dashboards', 'Apoiar decisões com indicadores'],
    ia: ['Criar soluções com modelos de IA', 'Automatizar análises e respostas', 'Melhorar produtividade com prompts'],
    design: ['Planejar interfaces antes do código', 'Criar protótipos e fluxos de tela', 'Melhorar usabilidade e acessibilidade'],
    devops: ['Automatizar etapas do desenvolvimento', 'Padronizar ambientes e deploys', 'Apoiar publicação e manutenção de sistemas'],
    cloud: ['Hospedar aplicações e APIs', 'Configurar serviços em nuvem', 'Publicar projetos para acesso online'],
    ferramentas: ['Aumentar produtividade no desenvolvimento', 'Testar, depurar e organizar projetos', 'Apoiar o fluxo de trabalho diário'],
    automacao: ['Conectar ferramentas e serviços', 'Criar fluxos automáticos', 'Reduzir tarefas repetitivas']
  };

  const nextStepsByArea = {
    'front-end': ['Pratique com páginas reais', 'Estude responsividade', 'Consuma APIs em projetos'],
    'back-end': ['Crie uma API REST simples', 'Conecte com banco de dados', 'Implemente autenticação básica'],
    dados: ['Pratique consultas e filtros', 'Monte dashboards simples', 'Documente seus insights'],
    ia: ['Aprenda boas práticas de prompt', 'Teste uma API de IA', 'Crie um projeto pequeno com entrada e resposta'],
    design: ['Crie um protótipo no Figma', 'Estude hierarquia visual', 'Refaça uma tela existente'],
    devops: ['Aprenda Git com frequência', 'Teste deploy de um projeto', 'Configure uma automação simples'],
    cloud: ['Publique um projeto pessoal', 'Entenda variáveis de ambiente', 'Aprenda noções de domínio e deploy'],
    ferramentas: ['Use em um projeto real', 'Aprenda atalhos e comandos básicos', 'Documente seu processo no README'],
    automacao: ['Mapeie uma tarefa repetitiva', 'Crie um fluxo simples', 'Integre uma API ou planilha']
  };

  const usedFor = tool.usedFor || usedForByArea[tool.area] || ['Entender a função da ferramenta', 'Aplicar em projetos práticos', 'Melhorar seu repertório técnico'];
  const nextSteps = tool.nextSteps || nextStepsByArea[tool.area] || ['Estudar a documentação', 'Criar um projeto simples', 'Adicionar ao portfólio'];
  const link = tool.link || officialLinks[tool.slug];

  document.title = `${tool.t} | DevStart`;

  detail.innerHTML = `
    <div class="page-title">
      <div>
        <span class="eyebrow">Ferramenta • ${areaLabel}</span>
        <h1>${tool.t}</h1>
        <p class="lead">${tool.txt}</p>
      </div>

      <a class="btn btn-secondary" href="ferramentas.html">
        ${icon('lucide:arrow-left')} Voltar
      </a>
    </div>

    <article class="card tool-detail">
      <div class="feature-icon">${icon(tool.icon)}</div>

      <h2>Para que serve?</h2>
      <p class="lead">
        ${tool.t} é uma ferramenta importante dentro da área de ${areaLabel.toLowerCase()}.
        Ela ajuda no aprendizado, na criação de projetos práticos e no desenvolvimento de habilidades valorizadas no mercado.
      </p>

      <div class="job-meta" style="margin-top:16px">
        ${(tool.tags || []).map(tag => `<span class="badge">${tag}</span>`).join('')}
      </div>

      <div class="grid grid-3" style="margin-top:18px">
        <article class="card">
          <h3>Use para</h3>
          <ul>
            ${usedFor.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </article>

        <article class="card">
          <h3>Comece por</h3>
          <ul>
            <li>Entender o conceito principal</li>
            <li>Fazer exercícios pequenos</li>
            <li>Aplicar em um projeto simples</li>
          </ul>
        </article>

        <article class="card">
          <h3>Próximos passos</h3>
          <ul>
            ${nextSteps.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      </div>

      <div class="hero-actions" style="margin-top:22px">
        ${link ? `
          <a class="btn btn-primary" href="${link}" target="_blank" rel="noopener">
            ${icon('lucide:external-link')} Acessar material
          </a>
        ` : ''}
      </div>
    </article>
  `;
}


let currentJobsPage = 1;
let jobsLoading = false;

function getJobSearchQuery() {
  const buscaDigitada = ($("#jobSearch")?.value || "").trim();
  const type = $("#typeFilter")?.value || "all";
  const mode = $("#modeFilter")?.value || "all";

  const typeMap = {
    all: "estagio ti",
    estagio: "estagio ti",
    aprendiz: "jovem aprendiz ti",
    junior: "junior tecnologia"
  };

  const modeMap = {
    all: "",
    "front-end": "frontend desenvolvimento web",
    dados: "dados tecnologia",
    suporte: "suporte tecnico ti",
    qa: "qa testes software",
    backend: "backend desenvolvimento"
  };

  return [
    buscaDigitada || typeMap[type] || "estagio ti",
    modeMap[mode] || ""
  ].join(" ").trim();
}

function formatJobLocation(vaga) {
  return vaga.local || "Local não informado";
}

function jobApiCard(vaga) {
  const titulo = vaga.titulo || "Vaga sem título";
  const empresa = vaga.empresa || "Empresa não informada";
  const local = formatJobLocation(vaga);
  const fonte = vaga.fonte || "JSearch";
  const link = vaga.link || "#";

  return `
    <article class="card job-card job-api-card">
      <div class="job-card-head">
        <div class="feature-icon">
          ${icon("lucide:briefcase-business")}
        </div>

        <span class="badge">
          ${icon("lucide:database")}
          ${fonte}
        </span>
      </div>

      <div>
        <h3>${titulo}</h3>

        <p class="lead job-company">
          ${empresa}
        </p>
      </div>

      <div class="job-meta">
        <span class="badge">
          ${icon("lucide:map-pin")}
          ${local}
        </span>

        <span class="badge">
          ${vaga.remoto ? "Remoto" : "Presencial/Híbrido"}
        </span>
      </div>

      <div class="job-footer">
        <a class="btn btn-primary" href="${link}" target="_blank" rel="noopener">
          ${icon("lucide:external-link")}
          Ver vaga
        </a>
      </div>
    </article>
  `;
}

function renderJobsLoading() {
  return `
    <article class="card job-loading-card">
      <div class="feature-icon">
        ${icon("lucide:loader-circle")}
      </div>

      <div>
        <h3>Buscando vagas...</h3>
        <p class="lead">Carregando oportunidades reais para os filtros selecionados.</p>
      </div>
    </article>
  `;
}

async function carregarVagas(reset = false) {
  const grid = $("#jobsGrid");
  const loadMoreButton = $("#loadMoreJobs");

  if (!grid || jobsLoading) return;

  const busca = getJobSearchQuery();
  const local = ($("#jobLocation")?.value || "").trim();

  if (reset) {
    currentJobsPage = 1;
    grid.innerHTML = renderJobsLoading();
    $("#emptyJobs")?.classList.add("hidden");
  }

  jobsLoading = true;

  if (loadMoreButton) {
    loadMoreButton.disabled = true;
    loadMoreButton.innerHTML = `${icon("lucide:loader-circle")} Carregando...`;
  }

  try {
    const resposta = await fetch(
      `https://devstart.onrender.com/api/vagas?busca=${encodeURIComponent(
        busca
      )}&local=${encodeURIComponent(
        local
      )}&page=${currentJobsPage}`
    );

    const vagas = await resposta.json();

    if (!resposta.ok || !Array.isArray(vagas)) {
      throw new Error(vagas?.erro || "Erro ao buscar vagas.");
    }

    if (reset) {
      grid.innerHTML = "";
    }

    if (!vagas.length && currentJobsPage === 1) {
      $("#emptyJobs")?.classList.remove("hidden");
      grid.innerHTML = "";
      return;
    }

    $("#emptyJobs")?.classList.toggle("hidden", vagas.length > 0);

    grid.innerHTML += vagas.map(jobApiCard).join("");
    currentJobsPage++;
  } catch (error) {
    if (reset) {
      grid.innerHTML = `
        <article class="card job-loading-card">
          <div class="feature-icon">
            ${icon("lucide:circle-alert")}
          </div>

          <div>
            <h3>Não foi possível carregar as vagas</h3>
            <p class="lead">Verifique se o backend no Render está ativo e tente novamente.</p>
          </div>
        </article>
      `;
    }

    showToast(error.message || "Erro ao carregar vagas.");
  } finally {
    jobsLoading = false;

    if (loadMoreButton) {
      loadMoreButton.disabled = false;
      loadMoreButton.innerHTML = `${icon("lucide:plus")} Carregar mais vagas`;
    }
  }
}

function initJobs() {
  const grid = $("#jobsGrid");

  if (!grid) return;

  carregarVagas(true);

  $("#loadMoreJobs")?.addEventListener("click", () => {
    carregarVagas(false);
  });

  let filterTimer;

  ["input", "change"].forEach(evento => {
    [
      $("#jobSearch"),
      $("#jobLocation"),
      $("#typeFilter"),
      $("#modeFilter")
    ].forEach(el => {
      el?.addEventListener(evento, () => {
        clearTimeout(filterTimer);
        filterTimer = setTimeout(() => carregarVagas(true), 450);
      });
    });
  });
}

function projectCard(p) {
  return `
    <article class="card project-card"
      data-area="${p.area}"
      data-level="${p.level}"
      data-type="${p.type}"
      data-title="${p.t.toLowerCase()} ${p.area} ${p.level} ${p.type} ${p.techs.join(" ").toLowerCase()}">

      <div class="project-top">
        <div class="feature-icon">
          ${icon(p.icon)}
        </div>
        <span class="badge">${p.level}</span>
      </div>

      <h3>${p.t}</h3>

      <p class="lead" style="font-size:14px;line-height:1.55">
        ${p.txt}
      </p>

      <div class="course-meta">
        <span class="badge">${p.area}</span>
        <span class="badge">${p.type}</span>
      </div>

      <div class="project-tags">
        ${p.techs.map(tech => `<span>${tech}</span>`).join("")}
      </div>

      <div class="course-footer">
        <button class="btn btn-primary" onclick="openModal('${p.t}', '${p.txt}')">
          ${icon("lucide:folder-code")}
          Ver detalhes
        </button>
      </div>
    </article>
  `;
}

function initProjects() {
  const grid = $("#projectsGrid");

  if (!grid) return;

  grid.innerHTML = projects.map(projectCard).join("");

  function filterProjects() {
    const q = ($("#projectSearch")?.value || "").toLowerCase();
    const area = $("#projectAreaFilter")?.value || "all";
    const level = $("#projectLevelFilter")?.value || "all";
    const type = $("#projectTypeFilter")?.value || "all";

    let visible = 0;

    $$(".project-card", grid).forEach(card => {
      const ok =
        (!q || card.dataset.title.includes(q)) &&
        (area === "all" || card.dataset.area === area) &&
        (level === "all" || card.dataset.level === level) &&
        (type === "all" || card.dataset.type === type);

      card.style.display = ok ? "flex" : "none";

      if (ok) visible++;
    });

    $("#emptyProjects")?.classList.toggle("hidden", visible > 0);
  }

  ["input", "change"].forEach(ev => {
    [
      $("#projectSearch"),
      $("#projectAreaFilter"),
      $("#projectLevelFilter"),
      $("#projectTypeFilter")
    ].forEach(el => el && el.addEventListener(ev, filterProjects));
  });
}



function initRoadmap() {
  const steps = $('#roadmapSteps');
  const table = $('#roadmapTable');
  const area = $('#roadmapArea');
  const pace = $('#roadmapPace');

  if (!steps) return;

  function render() {
    const r = roadmaps[area.value];

    $('#roadmapTitle').textContent = r.title;
    $('#roadmapPaceLabel').textContent =
      'Ritmo ' + pace.options[pace.selectedIndex].text.split(' — ')[0].toLowerCase();

    steps.innerHTML = r.steps.map((s, i) => `
      <div class="road-step ${i < 2 ? 'active' : ''}">
        <b>${i + 1}. ${['Base', 'Ferramentas', 'Projetos', 'Mercado'][i]}</b>
        <p>${s}</p>
      </div>
    `).join('');

    table.innerHTML =
      '<tr><th>Dia</th><th>Foco</th><th>Entrega</th></tr>' +
      r.week.map(w => `
        <tr>
          <td>${w[0]}</td>
          <td>${w[1]}</td>
          <td>${w[2]}</td>
        </tr>
      `).join('');

    showToast('Roadmap atualizado para ' + r.title.replace('Roadmap ', ''));
  }

  $('#generateRoadmap')?.addEventListener('click', render);
  area.addEventListener('change', render);
  pace.addEventListener('change', render);

  render();
}

function initForms() {
  $$('form[data-smart-form]').forEach(form =>
    form.addEventListener('submit', async e => {
      e.preventDefault();

      try {
        const resposta = await fetch('https://devstart.onrender.com/api/contato', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: form.nome?.value || '',
            email: form.email?.value || '',
            assunto: form.assunto?.value || '',
            mensagem: form.mensagem?.value || ''
          })
        });

        if (!resposta.ok) throw new Error();

        showToast(form.dataset.success || 'Mensagem enviada com sucesso.');
        form.reset();
      } catch {
        showToast('Erro ao enviar mensagem.');
      }
    })
  );
}

/* ATS */

function initATS() {
  const atsForm = document.querySelector("#atsForm");
  const resultadoATS = document.querySelector("#resultadoATS");

  const inputCurriculo = document.querySelector("#curriculo");
  const uploadText = document.querySelector("#uploadText");

  inputCurriculo?.addEventListener("change", () => {
    const arquivo = inputCurriculo.files?.[0];

    if (!arquivo) return;

    uploadText.innerHTML = `
    <span style="
      display:flex;
      align-items:center;
      justify-content:center;
      gap:.45rem;
      color:var(--primary);
      font-weight:800;
    ">
      ${icon("lucide:file-check")}
      ${arquivo.name}
    </span>
  `;
  });

  if (!atsForm || !resultadoATS) return;

  atsForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dados = new FormData(atsForm);
    const arquivo = document.querySelector("#curriculo")?.files[0];

    if (!arquivo) {
      showToast("Envie um currículo antes de analisar.");
      return;
    }

    resultadoATS.innerHTML = `
      <article class="ats-loading">
        <div class="ats-spinner"></div>

        <div>
          <h3>Analisando currículo...</h3>

          <p class="lead">
            A IA está lendo seu arquivo e verificando a compatibilidade ATS.
          </p>
        </div>
      </article>
    `;

    try {
      const resposta = await fetch("https://devstart.onrender.com/analisar-curriculo", {
        method: "POST",
        body: dados,
      });

      const analise = await resposta.json();

      if (!resposta.ok) {
        throw new Error(analise.erro || "Erro ao analisar currículo.");
      }

      const score = analise.score ?? 0;

      resultadoATS.innerHTML = `
    <article class="ats-result-card">
      <div class="ats-result-top">
        <div class="ats-score-ring" style="--score:${score}">
          <strong>${score}</strong>
          <span>/100</span>
        </div>

        <div class="ats-result-info">
          <span class="badge">
            ${icon("lucide:badge-check")}
            Resultado ATS
          </span>

          <h2>Análise concluída</h2>

          <p>
            ${analise.resumo || "Análise finalizada."}
          </p>

          <div class="ats-progress">
            <span style="width:${score}%"></span>
          </div>
        </div>
      </div>

      ${analise.compatibilidadeVaga
          ? `
            <div class="ats-compat-box">
              <h3>
                ${icon("lucide:briefcase")}
                Compatibilidade com a vaga
              </h3>

              <p>${analise.compatibilidadeVaga}</p>
            </div>
          `
          : ""
        }

      <div class="ats-result-grid">
        ${renderATSList("Pontos fortes", "lucide:check-circle", analise.pontosFortes)}
        ${renderATSList("Problemas encontrados", "lucide:alert-circle", analise.problemas)}
        ${renderATSList("Melhorias sugeridas", "lucide:lightbulb", analise.melhorias)}
      </div>
    </article>
  `;

      showToast("Análise ATS concluída!");
    } catch (erro) {
      resultadoATS.innerHTML = `
    <article class="ats-error">
      ${icon("lucide:circle-alert")}

      <div>
        <h3>Erro ao analisar currículo</h3>

        <p class="lead">
          ${erro.message || "Verifique se o backend está rodando em https://devstart.onrender.com."}
        </p>
      </div>
    </article>
  `;
    }
  });
}

function renderATSList(titulo, icone, lista = []) {
  const itens = Array.isArray(lista) ? lista : [];

  return `
    <div class="ats-result-list">
      <h3>
        ${icon(icone)}
        ${titulo}
      </h3>

      <ul>
        ${itens.length
      ? itens.map(item => `<li>${item}</li>`).join("")
      : "<li>Nenhuma informação retornada.</li>"
    }
      </ul>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  loadGlobalComponents();
  initCommon();
  initCourses();
  initJobs();
  initTools();
  initToolDetail();
  initRoadmap();
  initProjects();
  initForms();
  initATS();
});

const st = document.createElement('style');

st.textContent = `
@keyframes ripple {
  to {
    transform: translate(-50%, -50%) scale(22);
    opacity: 0;
  }
}

.hidden {
  display: none !important;
}
`;

document.head.appendChild(st);