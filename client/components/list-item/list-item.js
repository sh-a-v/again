import './list-item.css'
import template from './list-item.html'

import angular from 'angular'

class ListItem {
  constructor() {

  }
}

export default angular.module('app').directive('listItem', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {},
    bindToController: true,
    controller: ListItem,
    controllerAs: 'listItem'
  }
});
