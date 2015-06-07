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

    console.log('size updated');
  }

  notify() {
    this.$rootScope.$broadcast('device:resized');
  }

  isDesktop() {
    return this.size.width > 1024;
  }

  isTablet() {
    return this.size.width >= 640 && this.size.width <= 1024;
  }

  isMobile() {
    return this.size.width < 640;
  }
}

let moduleName = 'app.deviceSize';

angular.module(moduleName, []).service('deviceSize', DeviceSize);

export default moduleName;
