# DevStart

Plataforma web desenvolvida para ajudar estudantes e iniciantes a entrarem na área da tecnologia com mais direção, organização e preparação profissional.

O projeto reúne conteúdos sobre áreas da TI, cursos gratuitos, ferramentas importantes, roadmap de estudos, oportunidades reais e um sistema ATS com IA para análise de currículo.

---

## Sobre o Projeto

O DevStart foi criado com o objetivo de funcionar como uma central inicial para pessoas que:

* estão começando na área de tecnologia
* buscam o primeiro emprego em TI
* querem organizar os estudos
* desejam conhecer diferentes áreas da tecnologia
* procuram cursos gratuitos confiáveis
* querem melhorar currículo e candidatura
* precisam de mais direção para iniciar uma carreira tech

A proposta do projeto é unir aprendizado, carreira e preparação profissional em uma única plataforma.

---

## Funcionalidades

### Plataforma

* Dashboard moderno estilo SaaS
* Interface responsiva
* Modo claro e escuro
* Navegação organizada por áreas

### Carreira e Estudos

* Exploração de áreas da tecnologia
* Roadmaps de estudo
* Cursos gratuitos externos
* Ferramentas importantes para iniciantes
* Oportunidades reais de estágio e emprego

### ATS com IA

* Upload de currículo em PDF/DOCX
* Análise ATS automatizada
* Score de compatibilidade
* Pontos fortes do currículo
* Problemas encontrados
* Sugestões de melhoria
* Comparação com descrição de vaga

---

## Tecnologias Utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript Vanilla

### Backend

* Node.js
* Express
* Multer
* CORS

### Inteligência Artificial

* Groq API

---

## Estrutura do Projeto

```txt
DevStart/
├── frontend/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── utils/
│   └── server.js
├── .gitignore
└── README.md
```

---

## Sistema ATS

O sistema ATS do DevStart utiliza IA para analisar currículos enviados pelos usuários.

Fluxo atual:

```txt
Usuário envia currículo
↓
Frontend envia para API
↓
Backend processa arquivo
↓
IA realiza análise ATS
↓
Frontend renderiza resultado
```

A análise retorna:

* score ATS
* resumo geral
* palavras-chave
* pontos fortes
* problemas encontrados
* sugestões de melhoria

---

## Deploy

### Frontend

* Vercel

### Backend

* Render

---

## Status do Projeto

Em desenvolvimento.

---

## Autor

Desenvolvido por Rafaela.
