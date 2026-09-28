const express = require("express");

const router = express.Router();

const {
    obtenerDispositivos,
    cambiarEstado
} = require("../controller/dispositivoController");

router.get("/", obtenerDispositivos);

router.put("/:id", cambiarEstado);

module.exports = router;