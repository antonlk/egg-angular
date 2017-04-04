(function() {
'use strict';


  angular
    .module('Categories')
    .component('appCategory', {
      //template:'',
      templateUrl: 'app/categories/category.component.html',
      controller: CategoryController,
      bindings: {
        
      }
    });

  CategoryController.$inject = ['CategoriesService'];
  function CategoryController(CategoryService) {
    var $ctrl = this;
    
   CategoryService.getCategories().then(
      function onSuccess(res){
        console.log(res.data);
        $ctrl.categories=res.data;
      },
      function onError(res){
        console.log("categorias fallo");
      }
    );
    
  }
})();