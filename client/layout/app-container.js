import './app-container.css';
import template from './app-container.html'

import angular from 'angular'
import menu from 'components/menu'

class AppContainer {
  constructor() {

  }
}

export default angular.module('app').directive('appContainer', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    controller: AppContainer,
    controllerAs: 'app',
    bindToController: true
  };
});
