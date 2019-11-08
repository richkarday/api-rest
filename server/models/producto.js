const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Usuario = require('./usuario');
const Categoria = require('./categoria');

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre:{
        type: String,
        unique: true,
        required: [true, 'Porfavor ingresa el nombre del producto']
    },
    preciouni: {
        type: Number,
        required: [true, 'Porfavor ingresa el precio del producto']
        
    },
    categoria: {
        type: Schema.Types.ObjectId, 
        ref: "Categoria",
        required: [true, 'Porfavor ingresa la categoría del producto'] 
    },
    diponible: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId, 
        ref: "Usuario",
        required: [true, 'Porfavor ingresa el usuario']
    }
});


productoSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe que ser único y diferente'
});

module.exports = mongoose.model("Producto", productoSchema);