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
  const activePage = currentPage.startsWith('ferramenta-') ? 'ferramentas.html' : currentPage;

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

      <a class="btn btn-primary" href="ferramenta-${t.slug}.html">
        ${icon('lucide:arrow-right')} Ver página
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

let currentJobsPage = 1;

async function carregarVagas(reset = false) {
  const grid = $("#jobsGrid");

  if (!grid) return;

  const busca = ($("#jobSearch")?.value || "estagio ti").trim();
  const local = ($("#jobLocation")?.value || "").trim();

  const type = $("#typeFilter")?.value || "all";
  const mode = $("#modeFilter")?.value || "all";

  if (reset) {
    currentJobsPage = 1;
    grid.innerHTML = "";
  }

  if (!grid.innerHTML.trim()) {
    grid.innerHTML = `
      <p class="lead">
        Carregando vagas...
      </p>
    `;
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

    if (reset) {
      grid.innerHTML = "";
    }

    const vagasFiltradas = vagas.filter(vaga => {
      const texto = `
        ${vaga.titulo || ""}
        ${vaga.empresa || ""}
      `.toLowerCase();

      const okType =
        type === "all" ||
        texto.includes(type);

      const okMode =
        mode === "all" ||
        texto.includes(mode);

      return okType && okMode;
    });

    if (!vagasFiltradas.length && currentJobsPage === 1) {
      grid.innerHTML = "";

      $("#emptyJobs")?.classList.remove("hidden");

      return;
    }

    $("#emptyJobs")?.classList.add("hidden");

    grid.innerHTML += vagasFiltradas
      .map(
        vaga => `
          <article class="card job-card">

            <div class="feature-icon">
              ${icon("lucide:briefcase-business")}
            </div>

            <div class="badge">
              ${vaga.fonte || "JSearch"}
            </div>

            <h3>
              ${vaga.titulo || "Vaga sem título"}
            </h3>

            <p class="lead" style="font-size:14px;line-height:1.55">
              ${vaga.empresa || "Empresa não informada"}
              •
              ${vaga.local || "Local não informado"}
            </p>

            <div class="job-meta">
              <span class="badge">
                estágio
              </span>

              <span class="badge">
                ${vaga.remoto ? "remoto" : "presencial/híbrido"}
              </span>
            </div>

            <div class="job-footer">
              <a
                class="btn btn-primary"
                href="${vaga.link}"
                target="_blank"
                rel="noopener"
              >
                ${icon("lucide:external-link")}
                Ver vaga
              </a>
            </div>

          </article>
        `
      )
      .join("");

    currentJobsPage++;
  } catch (error) {
    grid.innerHTML = `
      <p class="lead">
        Não foi possível carregar as vagas agora.
      </p>
    `;
  }
}

function initJobs() {
  const grid = $("#jobsGrid");

  if (!grid) return;

  carregarVagas(true);

  $("#loadMoreJobs")?.addEventListener("click", () => {
    carregarVagas(false);
  });

  ["input", "change"].forEach(evento => {
    [
      $("#jobSearch"),
      $("#jobLocation"),
      $("#typeFilter"),
      $("#modeFilter")
    ].forEach(el => {
      el?.addEventListener(evento, () => {
        carregarVagas(true);
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
    form.addEventListener('submit', e => {
      e.preventDefault();
      showToast(form.dataset.success || 'Mensagem enviada com sucesso.');
      form.reset();
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