// Importamos Express
const express = require("express");

// Creamos el router
const router = express.Router();

// Importamos las funciones del controlador
const {
    registrarUsuario,
    iniciarSesion
} = require("../controllers/usuarioController");

// Ruta para registrar un usuario
router.post("/registro", registrarUsuario);

// Ruta para iniciar sesión
router.post("/login", iniciarSesion);

// Exportamos el router
module.exports = router;