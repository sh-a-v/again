import 'list.css'
import template from './list.html'

import angular from 'angular'
import listItem from 'components/list-item'

class List {
  constructor() {

  }
}

export default angular.module('app').directive('list', () => {
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
