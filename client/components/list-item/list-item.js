import angular from 'angular'

import './list-item.css'
import template from './list-item.html'

class ListItem {
  constructor() {

  }
}

let moduleName = 'app.listItem';

angular.module(moduleName, []).directive('listItem', () => {
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

export default moduleName;
