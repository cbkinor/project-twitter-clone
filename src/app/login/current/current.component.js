import templateUrl from './current.component.html'

/* @ngInject */
class CurrentController {
  constructor ($log, $authenticate) {
    this.$authenticate = $authenticate
    $log.debug('LogController instantiated')
  }

  login () {
    this.$authenticate.login('home')
  }
}

export const current = {
  templateUrl,
  controller: CurrentController,
  controllerAs: '$current'
}
