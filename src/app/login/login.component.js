import templateUrl from './login.component.html'

/* @ngInject */
class LoginController {
  constructor ($log, $authenticate, $cookies) {
    this.$authenticate = $authenticate
    $authenticate.username = $cookies.get('username')
    $authenticate.password = $cookies.get('password')
    $authenticate.login(true)
    $log.debug('LoginController instantiated')
  }
}

export const login = {
  templateUrl,
  controller: LoginController,
  controllerAs: '$login'
}
