'use strict';

angular.module('store.allProducts', ['ngRoute'])
  .controller('allProductsController', allProductsController);

function allProductsController(scope, http) {

}

allProductsController.$inject = ['$scope', '$http'];