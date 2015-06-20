import angular from 'angular'
import velocity from 'velocity-animate'

import button from 'components/button'
import linkButton from 'components/link-button'
import deviceSize from 'services/device-size'

import './menu.css'
import template from './menu.html'

class Menu {
  constructor($scope, $element, deviceSize) {
    this.expanded   = false;

    this.deviceSize = deviceSize;
    this.$scope     = $scope;
    this.$element   = $element.children();
  }

  expandAnimate() {
    velocity(this.$element, {
      width: this.deviceSize.width - 4,
      paddingTop: 20,
      paddingBottom: 20
    }, {
      duration: 150,

      begin: () => {
        this.expanded = true;
      },
      complete: () => {

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
        this.expanded = false;
        this.reset();
      }
    })
  }

  reset() {
    this.update();
    this.$element.attr('style', '');
  }

  expand() {
    if (this.isExpanded()) {
      return;
    }

    this.expandAnimate();
  }

  collapse() {
    if (!this.isExpanded()) {
      return;
    }

    this.collapseAnimate();
  }

  toggle() {
    this.isExpanded() ? this.collapse() : this.expand();
  }

  update() {
    this.$scope.$digest();
  }

  isExpanded() {
    return this.expanded;
  }
}

let moduleName = 'app.menu';

angular.module(moduleName, [button, linkButton, deviceSize]).directive('menu', () => {
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
