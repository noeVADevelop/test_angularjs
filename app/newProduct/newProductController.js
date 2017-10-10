'use strict';

angular.module('store.newProduct', ['ngRoute'])
  .controller('newProductController', newProductController);

function newProductController(location) {
}

newProductController.$inject = ['$location'];