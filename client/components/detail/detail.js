import './detail.css'
import template from './detail.html'

import angular from 'angular'

class Detail {
  constructor() {

  }
}

export default angular.module('app').directive('detail', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {},
    bindToController: true,
    controller: Detail,
    controllerAs: 'detail'
  }
});
