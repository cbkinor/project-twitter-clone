import templateUrl from './follow.component.html'

/* @ngInject */
class followController {
  constructor ($log) {
    this.messge = "Welcome to TeamSlowTrack's own Twitter"
    $log.debug('HomeController instantiated')
  }
}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
