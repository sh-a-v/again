import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'
import ngTouch from 'angular-touch'

import appContainer from 'layout/app-container.js'

export default angular.module('app', [
  uiRouter,
  ngResource,
  ngTouch,
  appContainer
]).config(($stateProvider, $locationProvider, $resourceProvider, $httpProvider) => {

  $stateProvider
    .state('list', {
      url: ''
    })
    .state('list.ideas', {
      url: 'ideas',
      title: 'Идеи'
    })
    .state('list.processes', {
      url: 'processes',
      title: 'Процессы'
    })
    .state('list.projects', {
      url: 'projects',
      title: 'Проекты'
    })
    .state('detail', {
      url: ':id'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

  $resourceProvider
    .defaults.stripTrailingSlashes = true;

});
