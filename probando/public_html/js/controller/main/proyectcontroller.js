/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    'use strict';
app.controller('proyectcontroller', function() {
    this.proyect = {
          barner: 'Asesorias en Contabilidad, tributaria, Analisis Financiero y Sistemas',
          footer: 'Cali - Valle del Cauca - Accex Asociados Outsoursing',
          menus:[
                  {
                      name:'Inicio',
                      submenus:[{name:'Quienes Somos'}]
                  },
                  {
                      name:'Contabilidad',
                      submenus:[
                          {name:'Actualizacion Contable'},
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
                          {name:'Mantenimiento de Equipos'},
                          {name:'Diseños Web'},
                          {name:'Proyectos'}
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