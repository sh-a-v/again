import './header.css'
import template from './header.html'

import angular from 'angular'
import logo from 'components/logo'

class Header {
  constructor() {

  }
}

export default angular.module('app', () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    controller: Header,
    controllerAs: 'header',
    scope: {},
    bindToController: true
  };
});
