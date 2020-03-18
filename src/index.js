const express = require('express');

//Inicialización
const app = express();
//Modelos
const Trabajadores = require('./models/trabajadores')
require('./schemas/InitDB');
var Trabajador = new Trabajadores()
    Trabajador._id = 3
    Trabajador.Nombre = "Daniel"
    Trabajador.Apellidos = "Alcala Fernandez"
    Trabajador.FechaNac = new Date(2000,1,10)
    Trabajador.Ocupacion = "Sin ocupación"
    Trabajador.Sueldo = 1200
    //Añadir trabajador
    Trabajador.save((err , trabajadorStored) =>{
        if (err) return "Error al añadir el trabajador";
        console.log("Usuario añadido")
    })
    //Eliminar trabajador
    /*Trabajadores.findById(1, function(err, trabajador){
        if(err) return console.error(err);
        trabajador.remove(function(err) {
            if(err) return console.error(err);
        })
    })*/
    //Actualizar trabajador
    Trabajadores.findById(1, function(err, trabajador){
        if(err) return console.error(err);
        trabajador.updateOne({_id: 1},{ Nombre: "AAAAA"}, function(err) {
            if(err) return console.error(err);
            console.log("Usuario actualizado");
        })
    })
    //Busqueda de trabajadores
    Trabajadores.find({Nombre : "Daniel"}, function(err, trabajadores) {
        if (err) return console.error(err);
        console.log(trabajadores);
      });
//Opciones
app.set('port', process.env.PORT || 3000);
//Funciones

//Variables globales

//Rutas
app.use(require('./routes/index'));
app.use(require('./routes/users'));
//Archivos estaticos
//Inico servidor
app.listen(app.get('port'), () =>{
    console.log('Server on port '+ app.get('port'))
});