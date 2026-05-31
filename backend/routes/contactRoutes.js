const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/api/contato", async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body;

    console.log("=== NOVO CONTATO ===");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Assunto:", assunto);
    console.log("Mensagem:", mensagem);

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log(
      "EMAIL_PASS:",
      process.env.EMAIL_PASS ? "CONFIGURADO" : "NÃO CONFIGURADO"
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contato DevStart - ${assunto}`,
      html: `
        <h2>Novo contato DevStart</h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>

        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    console.log("Email enviado!");
    console.log(info);

    return res.status(200).json({
      sucesso: true,
      mensagem: "E-mail enviado com sucesso!",
    });
  } catch (error) {
    console.error("ERRO AO ENVIAR EMAIL:");
    console.error(error);

    return res.status(500).json({
      sucesso: false,
      erro: error.message,
    });
  }
});

module.exports = router;