import './app-container.css';
import template from './app-container.html'

class AppContainerController {
  constructor() {

  }
}

export default () => {
  return {
    restrict: 'E',
    controller: AppContainerController,
    controllerAs: 'app',
    bindToController: true,
    template: template
  };
}
