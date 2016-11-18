import templateUrl from './current.component.html'

/* @ngInject */
class CurrentController {
  constructor ($log, $authenticateService, $stateService) {
    this.$authenticateService = $authenticateService
    this.$stateService = $stateService
    $log.debug('LogController instantiated')
  }

  login () {
    if (this.$authenticateService.username)
      this.$authenticateService.login('home', true)
  }
}

export const current = {
  templateUrl,
  controller: CurrentController,
  controllerAs: '$current'
}
