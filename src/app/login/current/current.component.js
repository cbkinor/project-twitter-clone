import templateUrl from './current.component.html'

/* @ngInject */
class CurrentController {
  constructor ($log, $authenticate, $stateService) {
    this.$authenticate = $authenticate
    this.$stateService = $stateService
    $log.debug('LogController instantiated')
  }

  login () {
    if (this.$authenticate.username)
      this.$authenticate.login('home')
  }
}

export const current = {
  templateUrl,
  controller: CurrentController,
  controllerAs: '$current'
}
