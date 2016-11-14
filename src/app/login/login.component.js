import templateUrl from './login.component.html'

/* @ngInject */
class LoginController {
  constructor ($log) {
    $log.debug('LoginController instantiated')
  }
}

export const login = {
  templateUrl,
  controller: LoginController,
  controllerAs: '$login'
}
