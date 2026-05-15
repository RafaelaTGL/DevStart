function limparJsonIA(texto) {
  return texto
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

module.exports = {
  limparJsonIA,
};