import angular from 'angular'

import './detail.css'
import template from './detail.html'

class Detail {
  constructor() {

  }
}

let moduleName = 'app.detail';

angular.module(moduleName, []).directive('detail', () => {
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

export default moduleName;
