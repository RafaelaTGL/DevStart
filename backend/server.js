import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();

const upload = multer({
  storage: multer.memoryStorage()
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API Conecta Futuro online"
  });
});

app.post("/analisar-curriculo", upload.single("curriculo"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      erro: "Nenhum currículo foi enviado."
    });
  }

  console.log("Arquivo recebido:", req.file.originalname);

  res.json({
    score: 82,
    resumo: "Currículo bem organizado, com boa estrutura inicial para vagas de tecnologia.",
    pontosFortes: [
      "Boa organização das seções",
      "Tecnologias destacadas",
      "Currículo fácil de ler"
    ],
    problemas: [
      "Ainda faltam métricas nos projetos ou experiências",
      "Pode melhorar o uso de palavras-chave da vaga"
    ],
    melhorias: [
      "Adicionar resultados mensuráveis",
      "Incluir palavras-chave da área desejada",
      "Melhorar o resumo profissional com foco na vaga"
    ]
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});