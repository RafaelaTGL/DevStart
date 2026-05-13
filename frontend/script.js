const $ = (s, c = document) => c.querySelector(s); const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const icon = (name) => `<span class="iconify" data-icon="${name}"></span>`;

function initTheme() {
  const saved = localStorage.getItem('conecta-theme') || 'light';
  document.body.classList.toggle('dark-mode', saved === 'dark');
  updateThemeIcon();
  $$('.theme-toggle').forEach(btn => btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('conecta-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateThemeIcon();
  }));
}
function updateThemeIcon() {
  const dark = document.body.classList.contains('dark-mode');
  $$('.theme-toggle').forEach(btn => btn.innerHTML = icon(dark ? 'lucide:sun' : 'lucide:moon'));
}
function initCommon() {
  initTheme();
  const sidebar = $('.sidebar'), overlay = $('.menu-overlay');
  $$('.mobile-menu,[data-close-sidebar]').forEach(btn => btn.addEventListener('click', () => { sidebar?.classList.toggle('open'); overlay?.classList.toggle('open') }));
  overlay?.addEventListener('click', () => { sidebar?.classList.remove('open'); overlay.classList.remove('open') });
  $$('.faq-q').forEach(btn => btn.addEventListener('click', () => btn.closest('.faq-item').classList.toggle('open')));
  $$('.tab-btn').forEach(btn => btn.addEventListener('click', () => { const group = btn.closest('[data-tabs]'); const id = btn.dataset.tab; $$('.tab-btn', group).forEach(b => b.classList.remove('active')); btn.classList.add('active'); $$('.tab-panel', group).forEach(p => p.classList.toggle('active', p.id === id)); }));
  const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: .12 }); $$('.reveal,.card,.stat').forEach(el => observer.observe(el));
  $$('.btn').forEach(btn => btn.addEventListener('click', e => { if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative'; const r = document.createElement('span'); r.style.cssText = 'position:absolute;border-radius:50%;background:rgba(255,255,255,.45);width:12px;height:12px;transform:translate(-50%,-50%) scale(1);animation:ripple .55s ease-out forwards;left:' + e.offsetX + 'px;top:' + e.offsetY + 'px'; btn.appendChild(r); setTimeout(() => r.remove(), 560) }));
}
function showToast(msg = 'Ação realizada com sucesso!') { let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t) } t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2600) }
function openModal(title, body, cta = 'Entendi') { let m = $('.modal'); if (!m) { m = document.createElement('div'); m.className = 'modal'; document.body.appendChild(m) } m.innerHTML = `<div class="modal-box"><div class="modal-head"><div><span class="badge">${icon('ph:sparkle-bold')} Conecta Futuro</span><h2 style="margin-top:12px">${title}</h2></div><button class="btn-icon" data-close-modal aria-label="Fechar">${icon('lucide:x')}</button></div><div class="lead">${body}</div><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px"><button class="btn btn-primary" data-modal-ok>${icon('lucide:check-circle')} ${cta}</button><button class="btn btn-secondary" data-close-modal>Fechar</button></div></div>`; m.classList.add('open'); $$('[data-close-modal]', m).forEach(b => b.onclick = () => m.classList.remove('open')); $('[data-modal-ok]', m).onclick = () => { m.classList.remove('open'); showToast('Tudo certo!') } }

const courses = [
  { t: 'HTML5 e CSS3 — Curso em Vídeo', area: 'front-end', level: 'iniciante', dur: 'longa', platform: 'Curso em Vídeo', icon: 'logos:html-5', txt: 'Base para criar páginas, estrutura HTML, estilos CSS e responsividade.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Algoritmos e Lógica de Programação', area: 'programacao', level: 'iniciante', dur: 'curta', platform: 'Curso em Vídeo', icon: 'ph:flow-arrow-bold', txt: 'Primeiros passos com lógica, variáveis, condições, laços e resolução de problemas.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Tecnologia da Informação', area: 'programacao', level: 'iniciante', dur: 'media', platform: 'Fundação Bradesco', icon: 'lucide:graduation-cap', txt: 'Cursos gratuitos de tecnologia, programação e produtividade para iniciar sua base.', url: 'https://www.ev.org.br/areas-de-interesse/tecnologia' },
  { t: 'Python para iniciantes', area: 'dados', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'devicon:python', txt: 'Sintaxe, lógica, exercícios e fundamentos para automação ou análise de dados.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'SQL e Banco de Dados', area: 'dados', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'devicon:mysql', txt: 'Consultas, organização de dados e noções importantes para sistemas e relatórios.', url: 'https://www.ev.org.br/areas-de-interesse/tecnologia' },
  { t: 'Microsoft Learn — Fundamentos Cloud', area: 'cloud', level: 'iniciante', dur: 'media', platform: 'Microsoft Learn', icon: 'logos:microsoft-azure', txt: 'Roteiros gratuitos para aprender cloud, Azure, IA, dados e tecnologia Microsoft.', url: 'https://learn.microsoft.com/pt-br/training/' },
  { t: 'Java Básico', area: 'back-end', level: 'iniciante', dur: 'media', platform: 'Curso em Vídeo', icon: 'devicon:java', txt: 'Fundamentos de Java, orientação a objetos e base para sistemas acadêmicos.', url: 'https://www.cursoemvideo.com/cursos/' },
  { t: 'Git e GitHub para Projetos', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'GitHub Docs', icon: 'mdi:github', txt: 'Controle de versão, repositórios, README e publicação de portfólio.', url: 'https://docs.github.com/pt/get-started' },
  { t: 'Desenvolvimento pessoal e profissional', area: 'carreira', level: 'iniciante', dur: 'curta', platform: 'Fundação Bradesco', icon: 'lucide:file-check-2', txt: 'Apoio para currículo, comunicação, postura profissional e empregabilidade.', url: 'https://www.ev.org.br/areas-de-interesse/desenvolvimento-pessoal-e-profissional' }
];
const jobs = [
  { t: 'Buscar estágio em tecnologia', type: 'estagio', mode: 'front-end', platform: 'Gupy', icon: 'lucide:briefcase-business', txt: 'Busca externa para vagas de estágio em tecnologia no Portal Gupy.', url: 'https://portal.gupy.io/job-search/term=est%C3%A1gio%20tecnologia' },
  { t: 'Buscar jovem aprendiz TI', type: 'aprendiz', mode: 'suporte', platform: 'Gupy', icon: 'lucide:user-round-check', txt: 'Atalho para oportunidades de jovem aprendiz relacionadas a TI e áreas administrativas.', url: 'https://portal.gupy.io/job-search/term=jovem%20aprendiz%20ti' },
  { t: 'Front-end júnior', type: 'junior', mode: 'front-end', platform: 'LinkedIn Jobs', icon: 'lucide:code-2', txt: 'Busca externa para vagas front-end júnior e posições de entrada.', url: 'https://www.linkedin.com/jobs/search/?keywords=front-end%20j%C3%BAnior' },
  { t: 'Estágio em dados', type: 'estagio', mode: 'dados', platform: 'LinkedIn Jobs', icon: 'lucide:chart-no-axes-combined', txt: 'Busca por estágio em dados, BI, SQL, Python e análise de dados.', url: 'https://www.linkedin.com/jobs/search/?keywords=est%C3%A1gio%20dados' },
  { t: 'Vagas tech para iniciantes', type: 'junior', mode: 'backend', platform: 'Programathor', icon: 'lucide:terminal-square', txt: 'Plataforma voltada para vagas de tecnologia, desenvolvimento e perfis júnior.', url: 'https://programathor.com.br/jobs' },
  { t: 'Estágio e trainee', type: 'estagio', mode: 'qa', platform: 'Cia de Talentos', icon: 'lucide:send', txt: 'Atalho para programas de estágio, trainee e oportunidades de início de carreira.', url: 'https://www.ciadeestagios.com.br/vagas' }
];
const tools = [
  { slug: 'html-css', t: 'HTML e CSS', icon: 'devicon:html5', txt: 'Base para páginas web, estrutura, estilos, responsividade e acessibilidade.' },
  { slug: 'javascript', t: 'JavaScript', icon: 'logos:javascript', txt: 'Interatividade, lógica no navegador, filtros, modais, formulários e consumo de APIs.' },
  { slug: 'git-github', t: 'Git e GitHub', icon: 'mdi:github', txt: 'Versionamento, repositórios, README, portfólio e colaboração em projetos.' },
  { slug: 'vscode', t: 'VS Code', icon: 'devicon:vscode', txt: 'Editor de código com terminal, extensões e organização de projetos.' },
  { slug: 'sql-mysql', t: 'SQL e MySQL', icon: 'devicon:mysql', txt: 'Consultas, bancos relacionais, cadastros, relatórios e sistemas CRUD.' },
  { slug: 'python', t: 'Python', icon: 'devicon:python', txt: 'Lógica, automação, análise de dados e primeiros scripts práticos.' },
  { slug: 'figma', t: 'Figma', icon: 'logos:figma', txt: 'Design de interfaces, protótipos, componentes e fluxos de experiência.' },
  { slug: 'devtools', t: 'DevTools', icon: 'logos:chrome', txt: 'Inspeção de HTML, CSS, responsividade, console e depuração.' },
  { slug: 'apis', t: 'APIs', icon: 'lucide:plug-zap', txt: 'Integração entre sistemas, dados JSON e comunicação entre aplicações.' },
  { slug: 'terminal', t: 'Terminal', icon: 'lucide:terminal', txt: 'Comandos, Git, execução de programas, navegação e automações simples.' }
];
function courseCard(c) { return `<article class="card course-card" data-area="${c.area}" data-level="${c.level}" data-dur="${c.dur}" data-title="${c.t.toLowerCase()} ${c.platform.toLowerCase()}"><div class="course-icon">${icon(c.icon)}</div><div><h3>${c.t}</h3><p class="lead" style="font-size:14px;line-height:1.55">${c.txt}</p></div><div class="course-meta"><span class="badge">${c.platform}</span><span class="badge">${c.level}</span><span class="badge">${c.dur}</span></div><div class="course-footer"><a class="btn btn-primary" href="${c.url}" target="_blank" rel="noopener">${icon('lucide:external-link')} Ver curso</a><button class="btn-icon" onclick="showToast('Curso salvo como referência.')">${icon('lucide:bookmark')}</button></div></article>` }
function jobCard(j) { return `<article class="card job-card" data-type="${j.type}" data-mode="${j.mode}" data-title="${(j.t + ' ' + j.platform + ' ' + j.mode).toLowerCase()}"><div class="feature-icon">${icon(j.icon)}</div><div class="badge">${icon('lucide:external-link')} ${j.platform}</div><h3>${j.t}</h3><p class="lead" style="font-size:14px;line-height:1.55">${j.txt}</p><div class="job-meta"><span class="badge">${j.type}</span><span class="badge">${j.mode}</span></div><div class="job-footer"><a class="btn btn-primary" href="${j.url}" target="_blank" rel="noopener">${icon('lucide:search')} Buscar vaga</a><button class="btn-icon" onclick="showToast('Busca salva como referência.')">${icon('lucide:star')}</button></div></article>` }
function toolCard(t) { return `<article class="card tool-card"><div class="feature-icon">${icon(t.icon)}</div><h3>${t.t}</h3><p class="lead" style="font-size:14px;line-height:1.55">${t.txt}</p><a class="btn btn-primary" href="ferramenta-${t.slug}.html">${icon('lucide:arrow-right')} Ver página</a></article>` }
function initCourses() { const grid = $('#coursesGrid'); if (!grid) return; grid.innerHTML = courses.map(courseCard).join(''); function filter() { const q = ($('#courseSearch')?.value || '').toLowerCase(); const area = $('#areaFilter')?.value || 'all', level = $('#levelFilter')?.value || 'all', dur = $('#durFilter')?.value || 'all'; let visible = 0; $$('.course-card', grid).forEach(card => { const ok = (!q || card.dataset.title.includes(q)) && (area === 'all' || card.dataset.area === area) && (level === 'all' || card.dataset.level === level) && (dur === 'all' || card.dataset.dur === dur); card.style.display = ok ? 'flex' : 'none'; if (ok) visible++ }); $('#emptyCourses')?.classList.toggle('hidden', visible > 0) } ['input', 'change'].forEach(ev => [$('#courseSearch'), $('#areaFilter'), $('#levelFilter'), $('#durFilter')].forEach(el => el && el.addEventListener(ev, filter))); }
function initJobs() { const grid = $('#jobsGrid'); if (!grid) return; grid.innerHTML = jobs.map(jobCard).join(''); function filter() { const q = ($('#jobSearch')?.value || '').toLowerCase(); const type = $('#typeFilter')?.value || 'all', mode = $('#modeFilter')?.value || 'all'; let visible = 0; $$('.job-card', grid).forEach(card => { const ok = (!q || card.dataset.title.includes(q)) && (type === 'all' || card.dataset.type === type) && (mode === 'all' || card.dataset.mode === mode); card.style.display = ok ? 'flex' : 'none'; if (ok) visible++ }); $('#emptyJobs')?.classList.toggle('hidden', visible > 0) } ['input', 'change'].forEach(ev => [$('#jobSearch'), $('#typeFilter'), $('#modeFilter')].forEach(el => el && el.addEventListener(ev, filter))); }
function initTools() { const grid = $('#toolsGrid'); if (!grid) return; grid.innerHTML = tools.map(toolCard).join('') }
const roadmaps = {
  frontend: { title: 'Roadmap Front-end', steps: ['HTML semântico, CSS moderno e responsividade', 'JavaScript, DOM, eventos, filtros e modais', 'Projetos: landing page, dashboard e consumo de API', 'Portfólio, GitHub, currículo e vagas front-end'], week: [['Segunda', 'HTML/CSS', 'Criar uma seção responsiva'], ['Terça', 'JavaScript DOM', 'Criar interação simples'], ['Quarta', 'GitHub', 'Publicar README'], ['Quinta', 'Projeto', 'Melhorar layout e responsividade'], ['Sexta', 'Mercado', 'Buscar 3 vagas front-end']] },
  backend: { title: 'Roadmap Back-end', steps: ['Lógica, POO e organização de código', 'Banco de dados, SQL e modelagem', 'APIs, rotas, JSON e validações', 'Deploy, documentação e candidatura back-end'], week: [['Segunda', 'Lógica', 'Resolver 5 exercícios'], ['Terça', 'SQL', 'Criar tabelas e consultas'], ['Quarta', 'API', 'Desenhar rotas CRUD'], ['Quinta', 'GitHub', 'Documentar endpoints'], ['Sexta', 'Mercado', 'Buscar vagas back-end']] },
  dados: { title: 'Roadmap Dados', steps: ['SQL, planilhas e pensamento analítico', 'Python com Pandas e limpeza de dados', 'Dashboards, KPIs e storytelling', 'Portfólio com datasets e vagas de dados'], week: [['Segunda', 'SQL', 'Praticar SELECT e JOIN'], ['Terça', 'Python', 'Ler dataset com Pandas'], ['Quarta', 'Gráficos', 'Criar 2 visualizações'], ['Quinta', 'Dashboard', 'Montar KPIs'], ['Sexta', 'Mercado', 'Buscar estágio em dados']] },
  suporte: { title: 'Roadmap Suporte Técnico', steps: ['Hardware, software, redes e sistemas operacionais', 'Atendimento, chamados e documentação', 'Office, Windows, redes e troubleshooting', 'Currículo para suporte e jovem aprendiz TI'], week: [['Segunda', 'Windows', 'Revisar conceitos básicos'], ['Terça', 'Redes', 'Estudar IP, DNS e Wi-Fi'], ['Quarta', 'Chamados', 'Simular atendimento'], ['Quinta', 'Documentação', 'Criar checklist técnico'], ['Sexta', 'Mercado', 'Buscar suporte estágio']] },
  qa: { title: 'Roadmap QA/Testes', steps: ['Lógica de testes e critérios de aceite', 'Casos de teste, bugs e documentação', 'Testes web, DevTools e noções de automação', 'Portfólio com plano de testes e vagas QA'], week: [['Segunda', 'Fundamentos', 'Escrever 5 casos de teste'], ['Terça', 'Bug report', 'Documentar defeitos'], ['Quarta', 'DevTools', 'Testar responsividade'], ['Quinta', 'Projeto', 'Criar plano de testes'], ['Sexta', 'Mercado', 'Buscar vagas QA']] },
  uxui: { title: 'Roadmap UX/UI Design', steps: ['Pesquisa, personas e jornada do usuário', 'Wireframes, hierarquia visual e protótipos', 'Design system, acessibilidade e Figma', 'Case de portfólio e vagas UX/UI'], week: [['Segunda', 'Pesquisa', 'Mapear persona'], ['Terça', 'Wireframe', 'Criar tela simples'], ['Quarta', 'UI', 'Definir cores e tipografia'], ['Quinta', 'Protótipo', 'Montar fluxo no Figma'], ['Sexta', 'Mercado', 'Buscar vagas UX/UI']] }
};
function initRoadmap() { const steps = $('#roadmapSteps'), table = $('#roadmapTable'), area = $('#roadmapArea'), pace = $('#roadmapPace'); if (!steps) return; function render() { const r = roadmaps[area.value]; $('#roadmapTitle').textContent = r.title; $('#roadmapPaceLabel').textContent = 'Ritmo ' + pace.options[pace.selectedIndex].text.split(' — ')[0].toLowerCase(); steps.innerHTML = r.steps.map((s, i) => `<div class="road-step ${i < 2 ? 'active' : ''}"><b>${i + 1}. ${['Base', 'Ferramentas', 'Projetos', 'Mercado'][i]}</b><p>${s}</p></div>`).join(''); table.innerHTML = '<tr><th>Dia</th><th>Foco</th><th>Entrega</th></tr>' + r.week.map(w => `<tr><td>${w[0]}</td><td>${w[1]}</td><td>${w[2]}</td></tr>`).join(''); showToast('Roadmap atualizado para ' + r.title.replace('Roadmap ', '')); } $('#generateRoadmap')?.addEventListener('click', render); area.addEventListener('change', render); pace.addEventListener('change', render); render(); }
function initForms() { $$('form[data-smart-form]').forEach(form => form.addEventListener('submit', e => { e.preventDefault(); showToast(form.dataset.success || 'Mensagem enviada com sucesso.'); form.reset() })); }
document.addEventListener('DOMContentLoaded', () => { initCommon(); initCourses(); initJobs(); initTools(); initRoadmap(); initForms(); });
const st = document.createElement('style'); st.textContent = '@keyframes ripple{to{transform:translate(-50%,-50%) scale(22);opacity:0}}.hidden{display:none!important}'; document.head.appendChild(st);

const atsForm = document.querySelector("#atsForm");
const resultadoATS = document.querySelector("#resultadoATS");

if (atsForm && resultadoATS) {
  atsForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dados = new FormData(atsForm);

    resultadoATS.innerHTML = `
      <article class="card">
        <h3>Analisando currículo...</h3>
        <p class="lead">Aguarde enquanto o sistema processa o arquivo.</p>
      </article>
    `;

    try {
      const resposta = await fetch("http://localhost:3000/analisar-curriculo", {
        method: "POST",
        body: dados
      });

      const analise = await resposta.json();

      resultadoATS.innerHTML = `
        <article class="card ats-card">
          <div class="ats-score">
            <strong>${analise.score}</strong>
            <span>/100</span>
          </div>

          <h2>Resultado da análise ATS</h2>
          <p class="lead">${analise.resumo}</p>

          <div class="grid grid-3">
            <div>
              <h3>Pontos fortes</h3>
              <ul>
                ${analise.pontosFortes.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>

            <div>
              <h3>Problemas encontrados</h3>
              <ul>
                ${analise.problemas.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>

            <div>
              <h3>Melhorias sugeridas</h3>
              <ul>
                ${analise.melhorias.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        </article>
      `;
    } catch (erro) {
      resultadoATS.innerHTML = `
        <article class="card">
          <h3>Erro ao analisar currículo</h3>
          <p class="lead">Verifique se o backend está rodando em http://localhost:3000.</p>
        </article>
      `;
    }
  });
}
