// Lista temporal donde guardamos los usuarios
const usuarios = [];

// Función para registrar un usuario
const registrarUsuario = (req, res) => {

    // Recibimos los datos enviados
    const { usuario, contraseña } = req.body;

    // Verificamos que los datos estén completos
    if (!usuario || !contraseña) {
        return res.status(400).json({
            mensaje: "El usuario y la contraseña son obligatorios"
        });
    }

    // Revisamos si el usuario ya existe
    const usuarioExistente = usuarios.find(
        (u) => u.usuario === usuario
    );

    if (usuarioExistente) {
        return res.status(400).json({
            mensaje: "El usuario ya está registrado"
        });
    }

    // Guardamos el usuario
    usuarios.push({
        usuario: usuario,
        contraseña: contraseña
    });

    // Respondemos que el registro fue correcto
    res.status(201).json({
        mensaje: "Usuario registrado correctamente"
    });
};


// Función para iniciar sesión
const iniciarSesion = (req, res) => {

    // Recibimos usuario y contraseña
    const { usuario, contraseña } = req.body;

    // Buscamos que los datos coincidan
    const usuarioEncontrado = usuarios.find(
        (u) =>
            u.usuario === usuario &&
            u.contraseña === contraseña
    );

    // Si los datos son correctos
    if (usuarioEncontrado) {
        return res.status(200).json({
            mensaje: "Autenticación satisfactoria"
        });
    }

    // Si los datos son incorrectos
    res.status(401).json({
        mensaje: "Error en la autenticación"
    });
};


// Exportamos las funciones
module.exports = {
    registrarUsuario,
    iniciarSesion
};