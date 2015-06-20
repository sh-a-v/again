import angular from 'angular'
import uiRouter from 'angular-ui-router'

import './link-button.css'
import template from './link-button.html'

class Link {
  constructor($scope, $element, $state) {
    this.$element = $element;
    this.$state   = $state;
  }

  go($event) {
    $event.preventDefault();
    $event.stopPropagation();

    this.$state.go(this.uiSref);
  }
}

let moduleName = 'app.linkButton';

angular.module(moduleName, [uiRouter]).directive('linkButton', () => {
  return {
    restrict: 'E',
    template: template,
    replace: true,
    transclude: true,
    scope: {
      'noBorder': '@',
      'uiSref': '@'
    },
    bindToController: true,
    controller: Link,
    controllerAs: 'linkButton'
  };
});

export default moduleName;
