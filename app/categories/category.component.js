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
    })
    ;

  //CategoryController.$inject = ['CategoriesService'];
  function CategoryController() {
    var $ctrl = this;
    /*
   CategoryService.getCategories().then(
      function onSuccess(res){
        console.log(res.data);
        $ctrl.categories=res.data;
      },
      function onError(res){
        console.log("categorias fallo");
      }
    );
    */

//DATOS
      $ctrl.categories = [
  {
    "id": "0",
    "name":"Marvel"
  },
  {
    "id": "1",
    "name":"Kittens"
  }
    ];

   $ctrl.links= [
 {
    "id": "0",
    "title": "Iron Man",
    "category": "Marvel",
    "link":"https://lumiere-a.akamaihd.net/v1/images/3f1baa0812f35ac2910feeaf463a8d9c437a9b19.png?region=0%2C0%2C600%2C600"
  },
 {
    "id": "1",
    "title": "Kitten 1",
    "category": "Kittens",
    "link":"http://placekitten.com/280/360"
  },
 {
    "id": "2",
    "title": "Kitten 2",
    "category": "Kittens",
    "link":"http://placekitten.com/240/360"
  },
 {
    "id": "3",
    "title": "Pie",
    "category": "Food",
    "link":"http://www.guymondailyherald.com/sites/default/files/field/image/apple-pie.jpg"
  }
];
//FIN DATOS

// CATEGOTY TRACKING
    $ctrl.currentCategory = null;

      $ctrl.setCurrentCategory = function(category){
       $ctrl.currentCategory = category;
        console.log($ctrl.currentCategory);

        $ctrl.cancelCreating();
        $ctrl.cancelEditing();
     }

     $ctrl.isCurrentCategory = function(category){
       return $ctrl.currentCategory !== null && category.name === $ctrl.currentCategory.name;
     }
  

  // END CATEGORY TRACKING

  //CREATE / EDIT TRACKING

  $ctrl.isCreating = false;
  $ctrl.isEditing = false;

  $ctrl.startCreating = function(){
    $ctrl.isCreating= true;
    $ctrl.isEditing=false;
  }

  $ctrl.cancelCreating=function(){
    $ctrl.isCreating=false;
  }

  $ctrl.startEditing=function(){
    $ctrl.isCreating= false;
    $ctrl.isEditing=true;
    // JAVASCRIPT DE SEMANTIC

  $('.ui.modal').modal('show');
  }
  $ctrl.cancelEditing=function(){
    $ctrl.isEditing=false;
    // JAVASCRIPT DE SEMANTIC

  $('.ui.modal').modal('hide');
  }


  // END CREATE/EDIT

  }
})();