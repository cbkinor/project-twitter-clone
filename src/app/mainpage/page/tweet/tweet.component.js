import templateUrl from './tweet.component.html'

/* @ngInject */
class tweetController {
  constructor ($log) {
    this.messge = "Welcome to TeamSlowTrack's own Twitter"
    $log.debug('HomeController instantiated')
  }
}

export const tweet = {
  templateUrl,
  controller: tweetController,
  controllerAs: '$tweet'
}
