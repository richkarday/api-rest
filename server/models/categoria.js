const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Usuario = require('./usuario');
//const Usuario = mongoose.model('Usuario')

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    nombre: {
       type: String,
       unique: true,
       required: [true, 'Porfavor ingresa el nombre de la categoría']
    },
    usuario:  {
       type: Schema.Types.ObjectId,
       ref: "Usuario",
       required: [true, 'Porfavor ingrese el usuario']
},
    disponible: {
        type: Boolean,
        default: true
    }
});

categoriaSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe que ser único y diferente'
});

module.exports =  mongoose.model('Categoria', categoriaSchema);

