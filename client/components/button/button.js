import './button.css'
import template from './button.html'

import angular from 'angular'
import ngSanitize from 'angular-sanitize'

class Button {
  constructor($scope, $element) {

  }
}

export default angular.module('app', [ngSanitize]).directive('button', () => {
  return {
    restrict: 'E',
    template: template,
    replace: true,
    scope: {
      text: '@'
    },
    bindToController: true,
    controller: Button,
    controllerAs: 'button',
    link: (scope, element, attrs, controller) => {

    }
  };
});
