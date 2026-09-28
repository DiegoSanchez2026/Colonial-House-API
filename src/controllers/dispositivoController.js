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
        nombre: "Camara de seguridad",
        tipo: "Camara",
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
    res.status(200).json(dispositivos);
};

// Cambiar el estado de un dispositivo
const cambiarEstado = (req, res) => {

    const id = parseInt(req.params.id);
    const { estado } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({
            mensaje: "El ID del dispositivo no es valido"
        });
    }

    if (!estado) {
        return res.status(400).json({
            mensaje: "El estado es obligatorio"
        });
    }

    const dispositivo = dispositivos.find(
        (d) => d.id === id
    );

    if (!dispositivo) {
        return res.status(404).json({
            mensaje: "Dispositivo no encontrado"
        });
    }

    dispositivo.estado = estado;

    return res.status(200).json({
        mensaje: "Estado actualizado correctamente",
        dispositivo: dispositivo
    });
};

// Exportar las funciones
module.exports = {
    obtenerDispositivos,
    cambiarEstado
};