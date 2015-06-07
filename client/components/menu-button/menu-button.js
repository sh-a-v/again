import angular from 'angular'
import uiRouter from 'angular-ui-router'

import button from 'components/button'

import './menu-button.css'
import temlate from './menu-button.html'

class MenuButton {
  constructor($state) {
    this.$state = $state;
  }
}

let moduleName = 'app.menuButton';

angular.module(moduleName, [uiRouter, button]).directive('menuButton', () => {
  return {
    restrict: 'E',
    replace: true,
    template: temlate,
    bindToController: true,
    controller: MenuButton,
    controllerAs: 'menuButton'
  };
});

export default moduleName;
