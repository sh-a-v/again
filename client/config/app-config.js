import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'
import ngTouch from 'angular-touch'

export default angular.module('app', [
  uiRouter,
  ngResource,
  ngTouch
]).config(($stateProvider, $locationProvider, $resourceProvider, $httpProvider) => {

  $stateProvider
    .state('index', {
      url: '/',
      title: 'Index'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

  $resourceProvider
    .defaults.stripTrailingSlashes = true;

});
