// Lista temporal de dispositivos
const dispositivos = [
    {
        id: 1,
        nombre: "Luces inteligentes",
        tipo: "Luz",
        estado: "Apagado"
    },
    {
        id: 2,
        nombre: "Cámara de seguridad",
        tipo: "Cámara",
        estado: "Apagado"
    },
    {
        id: 3,
        nombre: "Puerta inteligente",
        tipo: "Puerta",
        estado: "Cerrada"
    },
    {
        id: 4,
        nombre: "Aire acondicionado",
        tipo: "Aire acondicionado",
        estado: "Apagado"
    }
];

// Obtener todos los dispositivos
const obtenerDispositivos = (req, res) => {
    res.json(dispositivos);
};

// Cambiar el estado de un dispositivo
const cambiarEstado = (req, res) => {

    const id = parseInt(req.params.id);
    const { estado } = req.body;

    const dispositivo = dispositivos.find(
        (d) => d.id === id
    );

    if (!dispositivo) {
        return res.status(404).json({
            mensaje: "Dispositivo no encontrado"
        });
    }

    dispositivo.estado = estado;

    res.json({
        mensaje: "Estado del dispositivo actualizado",
        dispositivo: dispositivo
    });
};

module.exports = {
    obtenerDispositivos,
    cambiarEstado
};