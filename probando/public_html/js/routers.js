/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*-------------------- Proceso que sirve para linkear los botones ------------------------*/
'use strict';

var app = angular.module('proyecto',['ui.bootstrap','ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/main");
        var link = [
            {name: 'main', url: '/main', templateUrl: "views/main.html", controller: "ProyectoController"},
            {name: 'Inicio', url: '/Inicio', templateUrl: 'views/menu/initiate/start.html', controller: "ItemController",parent: "main"},
            {name: 'Actualizacion Contable', url: '/Actualización Contable', templateUrl: 'views/menu/accounting/accountingupdate.html', controller: "ItemController",parent: "main"},
            {name: 'Tributaria', url: '/Tributaria', templateUrl: '<h3>Tributaria!</h3>',parent: "main"},
            {name: 'Auditoria y revisoria fiscal', url: '/Auditoria y revisoria fiscal', templateUrl: '<h3>Auditoria y revisoria fiscal!</h3>', controller: "ItemController",parent: "main"},
            {name: 'Normas internacionales', url: '/Normas internacionales', templateUrl: '<h3>Normas internacionales!</h3>', controller: "ItemController",parent: "main"},
            {name: 'Medios magneticos', url: '/Medios magneticos', templateUrl: '<h3>Medios magneticos!</h3>', controller: "ItemController",parent: "main"},
            {name: 'Costos y sistema productivo', url: '/Costos y sistema productivo', templateUrl: '<h3>Costos y sistema productivo!</h3>', controller: "ItemController",parent: "main"},
            {name: 'Analisis financiero', url: '/Analisis financiero', templateUrl: '<h3>Analisis financiero!</h3>', controller: "ItemController",parent: "main"},
            {name: 'Mantenimiento de Equipos', url: '/Mantenimiento de Equipos', templateUrl: '<h3>Mantenimiento de Equipos!</h3>', controller: "ItemController",parent: "main"},
            {name: 'Contabilidad basica', url: '/Contabilidad basica', templateUrl: '<h3>Contabilidad basica!</h3>', controller: "ItemController",parent: "main"},
            {name: 'Contabilidad intermedia', url: '/Contabilidad intermedia', templateUrl: '<h3>Contabilidad intermedia!</h3>', controller: "ItemController",parent: "main"},
            {name: 'Contabilidad de costos', url: '/Contabilidad de costos', templateUrl: 'Contabilidad de costos!', controller: "ItemController",parent: "main"}
        ];
        for (var valor of link) {
            var MenuState = { name: valor.name, url: '/' + valor.name, templateUrl: valor.templateUrl,controller: valor.controller,parent: valor.parent};
            $stateProvider.state(valor.name,MenuState);
        }
    }]);

