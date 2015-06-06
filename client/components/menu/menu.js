import './menu.css'
import template from './menu.html'

import angular from 'angular'
import menuButton from './menu-button'

class Menu {
  constructor($scope, $element) {
    this.expanded = false;

    this.$element = $element;
  }

  expand() {
    if (this.isExpanded()) {
      return;
    }

    this.expanded = true;
  }

  collapse() {
    if (!this.isExpanded()) {
      return;
    }

    this.expanded = false;
  }

  toggle() {
    this.isExpanded() ? this.collapse() : this.expand();
  }

  isExpanded() {
    return this.expanded;
  }
}

export default angular.module('app').directive('menu', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {},
    bindToController: true,
    controller: Menu,
    controllerAs: 'menu'
  }
});
