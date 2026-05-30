
const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/api/contato', async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
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
      `
    });

    res.json({ sucesso: true });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao enviar e-mail' });
  }
});

module.exports = router;
