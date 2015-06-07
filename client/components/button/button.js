import angular from 'angular'

import './button.css'
import template from './button.html'

class Button {
  constructor($scope, $element) {
    console.log('button');
  }
}

let moduleName = 'app.button';

angular.module(moduleName, []).directive('button', () => {
  return {
    restrict: 'E',
    template: template,
    replace: true,
    scope: {
      text: '@'
    },
    bindToController: true,
    controller: Button,
    controllerAs: 'button'
  };
});

export default moduleName;
