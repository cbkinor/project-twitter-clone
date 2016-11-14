import templateUrl from './tweets.component.html'

/* @ngInject */
class TweetsController {
  constructor ($log) {
    this.messge = "Welcome to TeamSlowTrack's own Twitter"
    $log.debug('HomeController instantiated')
  }
}

export const tweets = {
  templateUrl,
  controller: TweetsController,
  controllerAs: '$tweets'
}
