// Lista temporal donde se almacenan los usuarios
const usuarios = [];

// Registrar un usuario
const registrarUsuario = (req, res) => {

    // Recibir los datos enviados desde Postman
    const { usuario, contraseña } = req.body;

    // Validar que los campos sean obligatorios
    if (!usuario || !contraseña) {
        return res.status(400).json({
            mensaje: "El usuario y la contraseña son obligatorios"
        });
    }

    // Validar que no exista un usuario con el mismo nombre
    const usuarioExistente = usuarios.find(
        (u) => u.usuario === usuario
    );

    if (usuarioExistente) {
        return res.status(400).json({
            mensaje: "El usuario ya está registrado"
        });
    }

    // Crear y guardar el nuevo usuario
    const nuevoUsuario = {
        usuario,
        contraseña
    };

    usuarios.push(nuevoUsuario);

    // Responder al cliente
    return res.status(201).json({
        mensaje: "Usuario registrado correctamente",
        usuario: usuario
    });
};


// Iniciar sesión
const iniciarSesion = (req, res) => {

    // Recibir los datos enviados
    const { usuario, contraseña } = req.body;

    // Validar que los datos estén completos
    if (!usuario || !contraseña) {
        return res.status(400).json({
            mensaje: "El usuario y la contraseña son obligatorios"
        });
    }

    // Buscar el usuario y verificar la contraseña
    const usuarioEncontrado = usuarios.find(
        (u) =>
            u.usuario === usuario &&
            u.contraseña === contraseña
    );

    // Verificar las credenciales
    if (!usuarioEncontrado) {
        return res.status(401).json({
            mensaje: "Error en la autenticación"
        });
    }

    // Respuesta cuando la autenticación es correcta
    return res.status(200).json({
        mensaje: "Autenticación satisfactoria",
        usuario: usuario
    });
};


// Exportar las funciones para utilizarlas en las rutas
module.exports = {
    registrarUsuario,
    iniciarSesion
};