const express = require("express");
const multer = require("multer");
const { analisarCurriculo } = require("../controllers/atsController");

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const tiposPermitidos = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!tiposPermitidos.includes(file.mimetype)) {
      return cb(new Error("Formato inválido. Envie apenas PDF ou DOCX."));
    }

    cb(null, true);
  },
});

router.post(
  "/analisar-curriculo",
  upload.single("curriculo"),
  analisarCurriculo
);

module.exports = router;