import angular from 'angular'

import menu from 'components/menu'
import menuButton from 'components/menu-button'
import deviceType from 'services/device-type'
import deviceSize from 'services/device-size'

import './app-container.css'
import template from './app-container.html'

class AppContainer {
  constructor($rootScope, $scope, deviceType, deviceSize) {
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.deviceType = deviceType;
    this.deviceSize = deviceSize;

    this.setEventListeners();
  }

  setEventListeners() {
    this.$rootScope.$on('device:resized', () => this.update());
  }

  getDeviceType() {
    return this.deviceType.isTouch() ? 'touch' : 'no-touch';
  }

  getDeviceSize() {
    return this.deviceSize.isDesktop() ? 'desktop' : this.deviceSize.isTablet() ? 'tablet' : 'mobile';
  }

  update() {
    this.$scope.$digest();
  }
}

let moduleName = 'app.container';

angular.module(moduleName, [menu, menuButton, deviceType, deviceSize]).directive('appContainer', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {},
    bindToController: true,
    controller: AppContainer,
    controllerAs: 'app'
  };
});

export default moduleName;
