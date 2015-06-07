import './app-container.css'
import './menu-wrapper.css'
import template from './app-container.html'

import angular from 'angular'
import menu from 'components/menu'
import deviceType from 'services/device-type.js'
import deviceSize from 'services/device-size.js'

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

export default angular.module('app').directive('appContainer', () => {
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
