'use strict';

angular.module('store.allProducts', ['ngRoute'])
  .controller('allProductsController', allProductsController);

  function getAllProducts($scope,$http){
    return $http.get(' http://demo6292426.mockable.io/more-store')
    .then(function(result) {
      $scope.allItems= result.data;
     });
  }

  function sortArr($scope, prop){
    var data = $scope.allItems || [];
    debugger;
    var newAllItems = [];
    for(var i= 0; i < data.lenght; i++){
      debugger;
      data[i][prop].localeCompare(data[i+1][prop])
    }
  }

function allProductsController($scope, $http) {
  getAllProducts($scope, $http);
  $scope.sortName = function(){
    var data = $scope.allItems || [];
    var newAllItems = [];
    var compare;
    for(var i= 0; i < data.length; i++){
      for(var j=0; j < newAllItems.length; j++){
        compare = data[i]['nameOfProduct'].localeCompare(newAllItems[j]['nameOfProduct']);
        if(newAllItems.length &&newAllItems[j].hasOwnProperty('nameOfProduct') && data[i]['nameOfProduct'] !== newAllItems[j]['nameOfProduct'] && compare == -1){
          newAllItems.splice(j,1, data[i]);
        }else{
          newAllItems.push(data[i]);
        }
      }
    }
    console.log(newAllItems)
    $scope.allItems = newAllItems;
  }
}


allProductsController.$inject = ['$scope', '$http'];