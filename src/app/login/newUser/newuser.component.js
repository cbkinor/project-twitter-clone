import templateUrl from './newuser.component.html'

/* @ngInject */
class NewUserController {
  constructor ($log, $authenticate, $stateService) {
    this.$authenticate = $authenticate
    this.$stateService = $stateService
    $log.debug('NewUserController instantiated')
  }

  create () {
    this.$authenticate.create()
    if (this.$authenticate.username)
      this.stateService.state['home']()
  }

  validateUsername () {
    this.$authenticate.validateUsername()
  }
}

export const newuser = {
  templateUrl,
  controller: NewUserController,
  controllerAs: '$newuser'
}
