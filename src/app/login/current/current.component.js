import templateUrl from './current.component.html'

/* @ngInject */
class CurrentController {
  constructor ($log) {
    this.messge = "Welcome to TeamSlowTrack's own Twitter"
    $log.debug('LogController instantiated')
  }
}

export const current = {
  templateUrl,
  controller: CurrentController,
  controllerAs: '$current'
}
