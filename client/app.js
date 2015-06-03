import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'
import ngTouch from 'angular-touch'
import appContainer from 'layout/app-container'

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

}).directive('appContainer', appContainer);

angular.bootstrap(document, ['app']);
