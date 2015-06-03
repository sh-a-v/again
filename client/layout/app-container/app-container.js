import './app-container.css';
import template from './app-container.html'

import header from 'layout/header'

class AppContainerController {
  constructor() {

  }
}

export default () => {
  return {
    restrict: 'E',
    replace: true,
    template: template,
    controller: AppContainerController,
    controllerAs: 'app',
    bindToController: true
  };
}
