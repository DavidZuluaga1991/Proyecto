(function(){
    var app = angular.module('proyecto',[])
    app.controller('ProyectoController', function(){
        this.proyecto = {
          barner: 'Asesorias en Contabilidad, tributaria, Analisis Financiero y Sistemas',
          footer: 'Cali - Valle del Cauca - Accex Asociados Outsoursing',
          menus:[
                  {name:'Inicio',typeform: 'list-group-item list-group-item-success',submenus:[{name:''}]},
                  {name:'Contabilidad',typeform: 'list-group-item list-group-item-success collapsed',submenus:[{name:'Actualización Contable'},{name:'Tributaria'},{name:'Auditoria y revisoria fiscal'},{name:'Normas internacionales'},{name:'Medios magneticos'},{name:'Costos y sistema productivo'},{name:'Analisis financiero'}]},
                  {name:'Sistemas',typeform: 'list-group-item list-group-item-success collapsed',submenus:[{name:'Mantenimiento de Equipos'}]},
                  {name:'Capacitaciones',typeform: 'list-group-item list-group-item-success collapsed',submenus:[{name:'Contabilidad basica'},{name:'Contabilidad intermedia'},{name:'Contabilidad de costos'},{name:'Actualizacion tributaria'},{name:'CG-UNO'},{name:'Normas internacionales'}]},
                  {name:'Contactenos',typeform: 'list-group-item list-group-item-success',submenus:[{name:''}]}
               ]
        };
    });
})();

