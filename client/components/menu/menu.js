import angular from 'angular'
import velocity from 'velocity-animate'

import button from 'components/button'
import deviceSize from 'services/device-size'

import './menu.css'
import template from './menu.html'

class Menu {
  constructor($scope, $element, deviceSize) {
    this.expanded   = false;

    this.deviceSize = deviceSize;
    this.$element   = $element;
  }

  expandAnimate() {
    velocity(this.$element, {
      width: this.deviceSize.width - 4,
      paddingTop: 20,
      paddingBottom: 20
    }, {
      duration: 150,

      begin: () => {
        this.$element.addClass('background');
      },
      complete: () => {
        this.$element.addClass('items-visible');
      }
    });

    velocity(this.$element, {
      height: 200
    }, {
      duration: 200
    });
  }

  collapseAnimate() {
    velocity(this.$element, {
      opacity: 0
    }, {
      duration: 50,
      complete: () => {
        this.reset();
      }
    })
  }

  reset() {
    this.$element.removeClass('background no-border items-visible');
    this.$element.attr('style', '');
  }

  expand() {
    if (this.isExpanded()) {
      return;
    }

    this.expanded = true;
    this.expandAnimate();
  }

  collapse() {
    if (!this.isExpanded()) {
      return;
    }

    this.expanded = false;
    this.collapseAnimate();
  }

  toggle() {
    this.isExpanded() ? this.collapse() : this.expand();
  }

  isExpanded() {
    return this.expanded;
  }
}

let moduleName = 'app.menu';

angular.module(moduleName, [button, deviceSize]).directive('menu', () => {
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

export default moduleName;
