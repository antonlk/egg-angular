(function() {
'use strict';

  // Usage:
  // 
  // Creates:
  // 

  angular
    .module('Links')
    .component('appLink', {
      //template:'htmlTemplate',
      templateUrl: 'app/links/link.component.html',
      controller: LinkController,
      bindings: {
        
      },
    });

 LinkController.$inject = ['LinksService'];
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