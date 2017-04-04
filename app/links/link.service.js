(function () {
  'use strict';

  angular
    .module('Links')
    .service('LinksService', LinkService);

  LinkService.inject = ['$http'];
  function LinkService($http) {

    this.getLinks = function () {
      return $http.get('datos/links.json');
    }
  }
})();