const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGODB_URI)
.then(bd=> console.log('Conexion exitosa a la BD'))
.catch(err => console.log('Error al conectar: '+err))