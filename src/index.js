const express = require('express');

//Inicialización
require('./config/config')
require('./database/InitDB');
const app = express();
//Schemas
const Trabajadores = require('./schemas/trabajadores');
//Opciones
app.set('port', process.env.PORT || 3000);
//Funciones
const Objeto = require('./helpers/Trabajador');
//Variables globales

//Rutas
app.use(require('./routes/index'));
//app.use(require('./routes/users'));
//Archivos estaticos
//app.use(express.static('public'));
console.log(__dirname);
app.use('/src', express.static(__dirname + '/public'));
//Inico servidor
app.listen(app.get('port'), () =>{
    console.log('Server on port '+ app.get('port'))
});

var trabajador = new Trabajadores()
    trabajador._id = 4
    trabajador.Nombre = "AAA"
    console.log(trabajador);
Objeto.anadirTrabajador(trabajador);
Objeto.buscarTrabajadoresNombre("Daniel");