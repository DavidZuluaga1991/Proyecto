/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*-------------------- Proceso que sirve para linkear los botones ------------------------*/
'use strict';
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/main");
        var link = [
            {name: 'main', url: '/main', templateUrl: "views/main.html", controller: "proyectcontroller",as: "mainctrl"},
            {name: 'Inicio', url: '/Inicio', templateUrl: 'views/menu/initiate/start.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Actualizacion Contable', url: '/Actualización Contable', templateUrl: 'views/menu/accounting/accountingupdate.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Tributaria', url: '/Tributaria', templateUrl: 'views/menu/accounting/tributary.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Auditoria y revisoria fiscal', url: '/Auditoria y revisoria fiscal', templateUrl: 'views/menu/accounting/audit_and_tax_review.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Normas internacionales', url: '/Normas internacionales', templateUrl: 'views/menu/accounting/audit_and_tax_review.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Medios magneticos', url: '/Medios magneticos', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Costos y sistema productivo', url: '/Costos y sistema productivo', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Analisis financiero', url: '/Analisis financiero', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Mantenimiento de Equipos', url: '/Mantenimiento de Equipos', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Contabilidad basica', url: '/Contabilidad basica', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Contabilidad intermedia', url: '/Contabilidad intermedia', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Contabilidad de costos', url: '/Contabilidad de costos', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'Contactenos', url: '/Contactenos', templateUrl: 'views/menu/contact/contact.html', controller: "contactcontroller",as: "contactctrl",parent: "main"}
        ];
        for (var valor of link) {
            var MenuState = { name: valor.name, url: '/' + valor.name, templateUrl: valor.templateUrl,controller: valor.controller,controllerAs: valor.as,parent: valor.parent};
            $stateProvider.state(valor.name,MenuState);
        }
    }]);

