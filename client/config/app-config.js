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
    .state('list', {
      url: '/'
    })
    .state('list.ideas', {
      url: '/ideas'
    })
    .state('list.processes', {
      url: '/processes'
    })
    .state('list.projects', {
      url: '/projects'
    })
    .state('detail', {
      url: '/:id'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

  $resourceProvider
    .defaults.stripTrailingSlashes = true;

});
