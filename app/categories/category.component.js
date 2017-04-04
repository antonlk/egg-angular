(function() {
'use strict';

  // Usage:
  // 
  // Creates:
  // 

  angular
    .module('Categories')
    .component('Category', {
      template:'htmlTemplate',
      //templateUrl: 'templateUrl',
      controller: CategoryController,
      bindings: {
        Binding: '=',
      },
    });

  CategryController.inject = ['CategoriesService'];
  function CategoryController(CategoryService) {
    var ctrl = this;
    
    CategoryService.getCategories().then(
      function onSuccess(res){
        console.log(res.data);
        $ctrl.categories=res.data;
      },
      function onError(res){
        
      }
    );
    
  }
})();