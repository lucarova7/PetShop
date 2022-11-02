const express = require('express');
const router = express.Router();
const ctrUsuarios = require('../controllers/ctrUsuarios')

//Create
router.post('/usuarios',ctrUsuarios.guardar)

//Read
router.get('/usuarios',ctrUsuarios.buscar)

//Update
// router.put('/usuarios',ctrUsuarios.modificar)

//Delete
router.delete('/usuarios/:id',ctrUsuarios.eliminar)

module.exports = router;