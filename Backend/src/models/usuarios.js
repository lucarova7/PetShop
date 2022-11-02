const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({

    nombre: {
        type: String, requiered: true
    },
    numero_id: {
        type: Number, requiered: true
    },
    celular: {
        type: Number, requiered: true
    },
    email:{
        type: String, requiered: true
    },
    nacimiento:{
        type: Date, default: Date.now()
    }
    },{
        timestamps: true,
        versionKey: false

    })

module.exports = mongoose.model('usuarios', usuarioSchema);