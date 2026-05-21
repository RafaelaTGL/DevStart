const express = require("express");

const router = express.Router();

router.get("/api/vagas", async (req, res) => {
  try {
    const busca = req.query.busca || "estagio ti";
    const local = req.query.local || "";
    const page = req.query.page || 1;

    const queryFinal = `${busca} ${local}`.trim();

    const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(
      queryFinal
    )}&page=${page}&num_pages=1&country=br&language=pt`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    });

    const data = await response.json();

    const vagas = (data.data || []).map((vaga) => ({
      titulo: vaga.job_title,
      empresa: vaga.employer_name,
      local: vaga.job_city || vaga.job_country || "Não informado",
      link: vaga.job_apply_link,
      remoto: vaga.job_is_remote,
      fonte: vaga.job_publisher || "JSearch",
    }));

    res.json(vagas);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao buscar vagas.",
    });
  }
});

module.exports = router;