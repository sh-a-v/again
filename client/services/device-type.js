import angular from 'angular'

class DeviceType {
  constructor() {

  }

  isTouch() {
    return this.isSupportTouchEvent() && this.isTouchOS()
  }

  isSupportTouchEvent() {
    return 'ontouchstart' in document.documentElement || window.navigator.msMaxTouchPoints >= 2;
  }

  isTouchOS() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  isAndroid() {
    return /Android/i.test(navigator.userAgent);
  }

  isIOS() {
    return /iPhone|iPad|iPod|/i.test(navigator.userAgent);
  }
}

export default angular.module('app').service('deviceType', DeviceType);
