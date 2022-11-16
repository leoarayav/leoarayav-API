/**
 * @file UserController.js
 * @version 0.0.1
 * @author Leo Araya
 */

const { User } = require('../database').models

/**
 *  Crea un nuevo usuario.
 *  @param {Object} args - Argumentos o datos.
 *  @param {Object} save - Si es true, se guardará los datos del usuario.
*/
const createUser = async (args, save = true) => 
{
    const nuevoUsuario = new User(args)
    if (save) 
        await nuevoUsuario.save()
    return nuevoUsuario
}

module.exports = {
    createUser
}