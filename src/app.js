// Importamos Express
const express = require("express");

// Importamos las rutas de usuarios
const usuarioRoutes = require("./routes/usuarioRoutes");

// Creamos la aplicación
const app = express();

// Puerto donde funcionará nuestro servidor
const PORT = 3000;

// Permite recibir información en formato JSON
app.use(express.json());

// Ruta principal para comprobar que la API funciona
app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Colonial House funcionando correctamente"
    });
});

// Utilizamos las rutas de usuarios
app.use("/api/usuarios", usuarioRoutes);

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});