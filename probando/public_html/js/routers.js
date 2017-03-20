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
            {name: 'main', templateUrl: "views/main.html", controller: "proyectcontroller",as: "mainctrl"},
            {name: 'I1', templateUrl: 'views/menu/initiate/start.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'C1', templateUrl: 'views/menu/accounting/accountingupdate.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'C2', templateUrl: 'views/menu/accounting/tributary.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'C3', templateUrl: 'views/menu/accounting/audit_and_tax_review.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'C4', templateUrl: 'views/menu/accounting/internationalstandards.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'C5', templateUrl: 'views/menu/accounting/exogenousinformation.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'C6', templateUrl: 'views/menu/accounting/costs_and_production_system.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'C7', templateUrl: 'views/menu/accounting/financial_analysis.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'C8', templateUrl: 'views/menu/accounting/accounting_implementation.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'S1', templateUrl: 'views/menu/systems/maintenance_of_equipment.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'S2', templateUrl: 'views/menu/systems/web_design.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'CA1', templateUrl: 'views/menu/trainings/basic_accounting.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'CA2', templateUrl: 'views/menu/trainings/intermediate _accounting.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'CA3', templateUrl: 'views/menu/trainings/cost_accounting.html', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'CA4', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'CA5', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'CA6', templateUrl: 'rutahtml', controller: "ItemController",as: "itemctrl",parent: "main"},
            {name: 'CO1', templateUrl: 'views/menu/contact/contact.html', controller: "contactcontroller",as: "contactctrl",parent: "main"}
        ];
        for (var valor of link) {
            var MenuState = { name: valor.name, url: '/' + valor.name, templateUrl: valor.templateUrl,controller: valor.controller,controllerAs: valor.as,parent: valor.parent};
            $stateProvider.state(valor.name,MenuState);
        }
    }]);

