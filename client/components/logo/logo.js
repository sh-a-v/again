import './logo.css'
import template from './logo.html'

import angular from 'angular'

class Logo {
  constructor() {
    this.state = '';
  }
}

export default angular.module('app').directive('logo', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    controller: Logo,
    controllerAs: 'logo',
    scope: {},
    bindToController: true
  }
});
