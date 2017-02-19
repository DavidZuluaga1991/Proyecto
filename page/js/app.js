(function(){
    var app = angular.module('proyecto',['ui.bootstrap','ui.router'])
    app.controller('ProyectoController', function(){
        this.proyecto = {
          barner: 'Asesorias en Contabilidad, tributaria, Analisis Financiero y Sistemas',
          footer: 'Cali - Valle del Cauca - Accex Asociados Outsoursing',
          menus:[
                  {
                      name:'Inicio',
                      submenus:[{name:'Inicio'}]
                  },
                  {
                      name:'Contabilidad',
                      submenus:[
                          {name:'Actualización Contable'},
                          {name:'Tributaria'},
                          {name:'Auditoria y revisoria fiscal'},
                          {name:'Normas internacionales'},
                          {name:'Medios magneticos'},
                          {name:'Costos y sistema productivo'},
                          {name:'Analisis financiero'}
                      ]
                  },
                  {
                      name:'Sistemas',
                      submenus:[
                          {name:'Mantenimiento de Equiposss'}
                      ]
                  },
                  {
                      name:'Capacitaciones',
                      submenus:[
                          {name:'Contabilidad basica'},
                          {name:'Contabilidad intermedia'},
                          {name:'Contabilidad de costos'},
                          {name:'Actualizacion tributaria'},
                          {name:'CG-UNO'},
                          {name:'Normas internacionales'}
                      ]
                  },
                  {
                      name:'Contactenos',
                      submenus:[{name:'Contactenos'}]
                  }
               ]
        };
    });
    app.controller('ItemController', ['$scope', function (scope) {
        scope.$parent.isopen = (scope.$parent.default === scope.item);
        scope.$watch('isopen', function (newvalue, oldvalue, scope) { scope.$parent.isopen = newvalue; });
     }]);
    
    app.config(function($stateProvider) {
        
/*-------------------- Proceso que sirve para linkear los botones ------------------------*/
       
        var link = [
            {name: 'Inicio', url: '/Inicio', templateUrl: '<h3>Inicio!</h3>'},
            {name: 'Actualización Contable', url: '/Actualización Contable', templateUrl: '<h3>Actualización Contable!</h3>'},
            {name: 'Tributaria', url: '/Tributaria', templateUrl: '<h3>Tributaria!</h3>'},
            {name: 'Auditoria y revisoria fiscal', url: '/Auditoria y revisoria fiscal', templateUrl: '<h3>Auditoria y revisoria fiscal!</h3>'},
            {name: 'Normas internacionales', url: '/Normas internacionales', templateUrl: '<h3>Normas internacionales!</h3>'},
            {name: 'Medios magneticos', url: '/Medios magneticos', templateUrl: '<h3>Medios magneticos!</h3>'},
            {name: 'Costos y sistema productivo', url: '/Costos y sistema productivo', templateUrl: '<h3>Costos y sistema productivo!</h3>'},
            {name: 'Analisis financiero', url: '/Analisis financiero', templateUrl: '<h3>Analisis financiero!</h3>'},
            {name: 'Mantenimiento de Equipos', url: '/Mantenimiento de Equipos', templateUrl: '<h3>Mantenimiento de Equipos!</h3>'},
            {name: 'Contabilidad basica', url: '/Contabilidad basica', templateUrl: '<h3>Contabilidad basica!</h3>'},
            {name: 'Contabilidad intermedia', url: '/Contabilidad intermedia', templateUrl: '<h3>Contabilidad intermedia!</h3>'},
            {name: 'Contabilidad de costos', url: '/Contabilidad de costos', templateUrl: 'Contabilidad de costos!'},
        ]
        for (var valor of link) {
            var MenuState = 
                {
                    name: valor.name,
                    url: '/' + valor.name,
                    template: '<h5>'+valor.templateUrl+'!</h5>'
                }
          $stateProvider.state(MenuState);
    }
        /*link.forEach( function(){
            $stateProvider.state( {
                    name: link.name,
                    url: "/" + link.name,
                    templateUrl: link.templateUrl
            });
        });*/
        
      /*var helloState = {
        name: 'Actualización Contable',
        url: '/Actualización Contable',
        template: '<h3>Actualización Contable!</h3>'
      }

      var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!pro</h3>'
      }

      $stateProvider.state(helloState);
      $stateProvider.state(aboutState);*/
   });
    
})();

