const {
  extrairTextoCurriculo,
} = require("../services/extractTextService");

const {
  analisarComIA,
} = require("../services/openRouterService");

async function analisarCurriculo(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        erro: "Nenhum currículo foi enviado.",
      });
    }

    const vaga = req.body.vaga || "";

    const textoCurriculo = await extrairTextoCurriculo(req.file);

    console.log("=== TEXTO EXTRAÍDO ===");
    console.log(textoCurriculo);

    if (!textoCurriculo || textoCurriculo.trim().length < 100) {
      return res.status(400).json({
        erro: "Não foi possível extrair texto suficiente do currículo.",
      });
    }

    const resultado = await analisarComIA({
      textoCurriculo,
      vaga,
    });

    return res.status(200).json(resultado);
  } catch (error) {
    console.error("Erro na análise ATS:", error);

    return res.status(500).json({
      erro: "Erro ao analisar currículo.",
      detalhe: error.message,
    });
  }
}

module.exports = {
  analisarCurriculo,
};