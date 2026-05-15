const OpenAI = require("openai");

const { limparJsonIA } = require("../utils/cleanJson");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,

  baseURL: "https://api.groq.com/openai/v1",
});

async function analisarComIA({
  textoCurriculo,
  vaga,
}) {
  const prompt = gerarPromptATS({
    textoCurriculo,
    vaga,
  });

  const completion =
    await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content:
            "Você é um especialista em ATS, recrutamento e currículos. Responda SOMENTE JSON válido.",
        },

        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.3,
    });

  const texto =
    completion.choices[0].message.content;

  return JSON.parse(
    limparJsonIA(texto)
  );
}

function gerarPromptATS({
  textoCurriculo,
  vaga,
}) {
  return `
Analise o currículo abaixo como um ATS profissional.

Você deve avaliar:
- estrutura do currículo
- clareza das informações
- palavras-chave
- compatibilidade com vaga
- tecnologias citadas
- projetos
- experiência
- organização
- escrita
- aderência para área de tecnologia

A resposta deve ser APENAS JSON válido.

Formato:

{
  "score": 78,
  "resumo": "Resumo geral.",
  "compatibilidadeVaga": "Compatibilidade.",
  "pontosFortes": [],
  "problemas": [],
  "melhorias": [],
  "palavrasChaveEncontradas": [],
  "palavrasChaveSugeridas": []
}

Regras:
- score de 0 a 100
- não invente experiências
- pense como ATS real
- responda SOMENTE JSON

CURRÍCULO:
${textoCurriculo.slice(0, 8000)}

VAGA:
${vaga || "Nenhuma vaga enviada."}
`;
}

module.exports = {
  analisarComIA,
};