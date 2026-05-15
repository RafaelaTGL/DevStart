const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

async function extrairTextoCurriculo(file) {
  if (file.mimetype === "application/pdf") {
    const data = await pdfParse(file.buffer);
    return limparTexto(data.text);
  }

  if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const result = await mammoth.extractRawText({
      buffer: file.buffer,
    });

    return limparTexto(result.value);
  }

  throw new Error("Formato de arquivo não suportado.");
}

function limparTexto(texto) {
  return texto
    .replace(/\s+/g, " ")
    .replace(/[^\S\r\n]+/g, " ")
    .trim();
}

module.exports = {
  extrairTextoCurriculo,
};