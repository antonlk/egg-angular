(function() {
'use strict';

  // Usage:
  // 
  // Creates:
  // 

  angular
    .module('Links')
    .component('Link', {
      template:'htmlTemplate',
      //templateUrl: 'templateUrl',
      controller: LinkController,
      bindings: {
        Binding: '=',
      },
    });

 LinkController.inject = ['LinksService'];
  function LinkController(LinkService) {
    var $ctrl = this;
    
    LinkService.getLinks().then(
      function onSuccess(res){
        console.log(res.data);
        $ctrl.links=res.data;
      },
      function onError(res){
        
      }
    );
   
  }
})();