import angular from 'angular'

import listItem from 'components/list-item'

import 'list.css'
import template from './list.html'

class List {
  constructor() {

  }
}

let moduleName = 'app.list';

angular.module(moduleName, [listItem]).directive('list', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {},
    bindToController: true,
    controller: List,
    controllerAs: 'list'
  }
});

export default moduleName;
