import templateUrl from './login.component.html'

/* @ngInject */
class LoginController {
  constructor ($log, $authenticate, $cookies, $stateService) {
    this.$authenticate = $authenticate
    this.$authenticate.incorrectUser = undefined
    $authenticate.username = $cookies.get('username')
    $authenticate.password = $cookies.get('password')
    $authenticate.login('home', true)
    $log.debug('LoginController instantiated')
  }
}

export const login = {
  templateUrl,
  controller: LoginController,
  controllerAs: '$login'
}
