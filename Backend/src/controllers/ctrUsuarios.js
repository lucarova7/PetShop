const ctrUsuarios={};
const { json } = require('express/lib/response');
const usuarios = require('../models/usuarios')


//Create
ctrUsuarios.guardar = (req, res)=>{
    usuarios
    .create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

//Read
ctrUsuarios.buscar = async (req,res)=>{
    await usuarios
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//BuscarNombre
ctrUsuarios.buscarNombre = async (req,res)=>{
    let nom = req.params.nom
    await usuarios
    .find({nombre : RegExp(nom, 'i')})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//Update
ctrUsuarios.modificar = async (req,res)=>{
    let {_id, ...body} = req.body;
    await usuarios
    .updateOne({_id : _id}, {$set : body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

//Delete
ctrUsuarios.eliminar = async (req,res)=>{
    await usuarios
    .deleteOne({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

module.exports = ctrUsuarios;