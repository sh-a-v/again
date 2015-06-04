import './app-container.css';
import template from './app-container.html'

import angular from 'angular'
import header from 'components/header'

class AppContainerController {
  constructor() {

  }
}

export default angular.module('app').directive('appContainer', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    controller: AppContainerController,
    controllerAs: 'app',
    bindToController: true
  };
});
