import './menu-button.css'
import temlate from './menu-button.html'

import angular from 'angular'
import button from 'components/button'

class MenuButton {
  constructor() {

  }
}

export default angular.module('app').directive('menuButton', () => {
  return {
    restrict: 'E',
    replace: true,
    template: temlate,
    bindToController: true,
    controller: MenuButton,
    controllerAs: 'menuButton'
  };
})
