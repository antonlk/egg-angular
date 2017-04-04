(function() {
'use strict';



  angular
    .module('App')
    .component('Component', {
      template:'',
      //templateUrl: '../index.html',
      controller: AppController,
      bindings: {
      
      },
    });

  //AppController.inject = ['dependency1'];
  function AppController() {
    var ctrl = this;

  }
})();