import templateUrl from './hashtag.component.html'

/* @ngInject */
class CurrentController {
  constructor ($log) {
    this.messge = "Welcome to TeamSlowTrack's own Twitter"
    $log.debug('LogController instantiated')
  }
}

export const hashtag = {
  templateUrl,
  controller: HashtagController,
  controllerAs: '$hashtag'
}
