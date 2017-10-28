'use strict';

// Declare app level module which depends on views, and components
angular.module('store', [
  'ngRoute',
  'store.allProducts',
  'store.newProduct'
]).
config(config);

function config ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/newProduct', {
      templateUrl: 'newProduct/newProductView.html',
      controller: 'newProductController'
    })
    .when('/allProducts', {
      templateUrl: 'allProducts/allProductsView.html',
      controller: 'allProductsController'
    })
    .otherwise({redirectTo: '/allProducts'});
}

config.inject = ['$locationProvider', '$routeProvider'];
