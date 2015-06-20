import angular from 'angular'

import './button.css'
import template from './button.html'

class Button {
  constructor($scope, $element) {
    this.$element = $element;
  }
}

let moduleName = 'app.button';

angular.module(moduleName, []).directive('button', () => {
  return {
    restrict: 'E',
    template: template,
    replace: true,
    transclude: true,
    scope: {
      'noBorder': '@'
    },
    bindToController: true,
    controller: Button,
    controllerAs: 'button'
  };
});

export default moduleName;
