(function(){
    var app = angular.module('proyecto',[])
    app.controller('ProyectoController', function(){
        this.proyecto = {
          barner: 'Asesorias en Contabilidad, tributaria, Analisis Financiero y Sistemas',
          footer: 'Cali - Valle del Cauca - Accex Asociados Outsoursing'
        };
    });
})();

