(function () {
  'use strict';

  angular
    .module('Categories')
    .service('CategoriesService', CategoryService);

  CategoryService.inject = ['$http'];
  function CategoryService($http) {

    this.getCategories = function () {
      return $http.get('datos/categories.json');
    }
  }
})();