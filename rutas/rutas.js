const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "Edwar Rojas", subtitulo: "Curriculum vitae" });
});

router.get("/contacto", (req, res) => {
  res.render("contacto", {
    titulo: "Edwar Rojas",
    subtitulo: "Curriculum vitae",
  });
});

router.get("/informacion", (req, res) => {
  res.render("informacion", {
    titulo: "Edwar Rojas",
    subtitulo: "Curriculum vitae",
  });
});

module.exports = router;
