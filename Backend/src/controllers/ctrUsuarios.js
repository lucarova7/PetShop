const ctrUsuarios={};
const { json } = require('express/lib/response');
const usuarios = require('../models/usuarios')

ctrUsuarios.guardar = (req, res)=>{
    usuarios
    .create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

ctrUsuarios.buscar = async (req,res)=>{
    await usuarios
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// ctrUsuarios.modificar = async (req,res)=>{
//     await usuarios
//     .find()
//     .then(data => res.json(data))
//     .catch(err => res.json(err))
// }

ctrUsuarios.eliminar = async (req,res)=>{
    await usuarios
    .deleteOne({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

module.exports = ctrUsuarios;