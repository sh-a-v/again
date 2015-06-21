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

  get width() {
    return this.deviceSize.width - 4;
  }

  get height() {
    return 260;
  }

  setContentSize() {
    this.$content = this.$content || angular.element(this.$element[0].querySelector('.menu-content'));

    this.$content.css({
      width: `${this.width}px`,
      height: `${this.height}px`
    });
  }

  expandAnimate() {
    velocity(this.$element, {
      width: this.width,
      height: this.height
    }, {
      duration: 1500,

      begin: () => {
        this.expanded = true;
        this.setContentSize();
      },
      complete: () => {

      }
    });
  }

  collapseAnimate() {
    velocity(this.$element, 'reverse', {
      duration: 150,
      complete: () => {
        this.expanded = false;
        this.reset();
      }
    });
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
