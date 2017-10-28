'use strict';

angular.module('store.newProduct', ['ngRoute'])
  .controller('newProductController', newProductController);

function newProductController($location, $scope) {
  $scope.formData = {};
  $scope.saveProduct = function(){
    window.localStorage.removeItem('product')
    window.localStorage.setItem('product', JSON.stringify($scope.formData));
    console.log(window.localStorage.getItem('product'));
  }
}

newProductController.$inject = ['$location','$scope'];