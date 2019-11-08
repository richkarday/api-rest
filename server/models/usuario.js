const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Porfavor ingresa el nombre']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Porfavor ingrese el email']
    },
    password: {
        type: String,
        required: [true, 'Porfavor ingresa la contraseña']
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    },
    img: {
        type: String,
        required: [true, 'Porfavor ingrese una imagen']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe que ser único y diferente'
});

module.exports = mongoose.model('Usuario', usuarioSchema);

