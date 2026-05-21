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

    if (!response.ok) {
      return res.status(response.status).json({
        erro: "Erro ao buscar vagas na JSearch.",
        detalhes: data,
      });
    }

    const vagas = (data.data || []).map((vaga) => ({
      titulo: vaga.job_title,
      empresa: vaga.employer_name,
      local:
        [vaga.job_city, vaga.job_state, vaga.job_country]
          .filter(Boolean)
          .join(", ") || "Não informado",
      link: vaga.job_apply_link || vaga.job_google_link,
      remoto: Boolean(vaga.job_is_remote),
      fonte: vaga.job_publisher || "JSearch",
      descricao: vaga.job_description,
      data: vaga.job_posted_at_datetime_utc,
    }));

    res.json(vagas);
  } catch (error) {
    console.error("Erro ao buscar vagas:", error);

    res.status(500).json({
      erro: "Erro interno ao buscar vagas.",
    });
  }
});

module.exports = router;
