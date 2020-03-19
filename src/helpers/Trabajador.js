    //Schema
    const Trabajadores = require('../schemas/trabajadores');
    //Añadir trabajador
    function anadirTrabajador(trabajador){
    trabajador.save((err , trabajadorStored) =>{
        if (err) return "Error al añadir el trabajador";
        console.log("Usuario añadido")
    })
    }

    //Eliminar trabajador
    function eliminarTrabajador(id){
    Trabajadores.findById(id, function(err, trabajador){
        if(err) return console.error(err);
        trabajador.remove(function(err) {
            if(err) return console.error(err);
        })
    })
    }

    //Actualizar trabajador
    function actualizarTrabajador(id,Nombre){
    Trabajadores.findById(id, function(err, trabajador){
        if(err) return console.error(err);
        trabajador.updateOne({_id: id},{ Nombre: "AAAAA"}, function(err) {
            if(err) return console.error(err);
            console.log("Usuario actualizado");
        })
    })
    }

    //Busqueda de trabajadores
    function buscarTrabajadoresNombre(nombre){
    Trabajadores.find({Nombre : nombre}, function(err, trabajadores) {
        if (err) return console.error(err);
        console.log(trabajadores);
      });
    }


/*Ejemplo de trabajador
var Trabajador = new Trabajadores()
    Trabajador._id = 3
    Trabajador.Nombre = "Daniel"
    Trabajador.Apellidos = "Alcala Fernandez"
    Trabajador.FechaNac = new Date(2000,1,10)
    Trabajador.Ocupacion = "Sin ocupación"
    Trabajador.Sueldo = 1200*/
    module.exports.anadirTrabajador=anadirTrabajador
    module.exports.eliminarTrabajador=eliminarTrabajador
    module.exports.actualizarTrabajador=actualizarTrabajador
    module.exports.buscarTrabajadoresNombre=buscarTrabajadoresNombre
