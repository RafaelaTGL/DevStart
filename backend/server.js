const express = require("express");
const cors = require("cors");
require("dotenv").config();

const atsRoutes = require("./routes/atsRoutes");
const jobsRoutes = require("./routes/jobsRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/", atsRoutes);
app.use("/", jobsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});