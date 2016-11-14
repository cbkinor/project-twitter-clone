import templateUrl from './menubar.component.html'

/* @ngInject */
class LoginController {
  constructor ($log) {
    $log.debug('menuBar instantiated')
  }
}

export const login = {
  templateUrl,
  controller: MenubarController,
  controllerAs: '$menubar'
}
