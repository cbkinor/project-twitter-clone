import templateUrl from './current.component.html'

/* @ngInject */
class CurrentController {
  constructor ($log, $authenticate, $stateService) {
    this.$authenticate = $authenticate
    this.$stateService = $stateService
    $log.debug('LogController instantiated')
  }

  login () {
    this.$authenticate.login()
    if (this.$authenticate.username)
      this.$stateService.state['home']()
  }
}

export const current = {
  templateUrl,
  controller: CurrentController,
  controllerAs: '$current'
}
