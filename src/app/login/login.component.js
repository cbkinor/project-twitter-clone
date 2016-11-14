import templateUrl from './login.component.html'

/* @ngInject */
class LoginController {
  constructor ($log) {
    this.messge = "Welcome to TeamSlowTrack's own Twitter"
    $log.debug('HomeController instantiated')
  }
}

export const login = {
  templateUrl,
  controller: LoginController,
  controllerAs: '$login'
}
