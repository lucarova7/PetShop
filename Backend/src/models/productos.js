const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String, requiered: true
    },
    numero_id: {
        type: Number, default: 300
    },
    precio: {
        type: Number, default: 300
    },
    descripcion:{
        type: String, requiered: false
    },
    medida:{
        type: String, requiered: false
    }
    },{
        timestamps: true,
        versionKey: false

    })

module.exports = mongoose.model('productos', productoSchema);