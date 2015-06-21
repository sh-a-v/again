import angular from 'angular'

import button from 'components/button'
import menu from 'components/menu'

import './menu-button.css'
import template from './menu-button.html'

class MenuButton {
  constructor($rootScope, $scope, $element) {
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$element = $element;
  }

  expand() {

  }
}

let moduleName = 'app.menuButton';

angular.module(moduleName, [button, menu]).directive('menuButton', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {},
    bindToController: true,
    controller: MenuButton,
    controllerAs: 'menuButton'
  };
});

export default moduleName;
