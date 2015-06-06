import angular from 'angular'
import _ from 'lodash'

class DeviceSize {
  constructor($rootScope, $window) {
    this.$rootScope = $rootScope;
    this.$window = $window;

    this.setEventListeners();
    this.updateDeviceSize();
  }

  get width() {
    return this.size.width;
  }

  get height() {
    return this.size.height;
  }

  setEventListeners() {
    angular.element(this.$window).on('resize', _.throttle(this.updateDeviceSize, 100).bind(this));
  }

  updateDeviceSize() {
    this.size = {
      width: this.$window.innerWidth,
      height: this.$window.innerHeight
    };

    this.notify();
  }

  notify() {
    this.$rootScope.$broadcast('device:resized');
  }
}

export default angular.module('app').service('deviceSize', DeviceSize);
