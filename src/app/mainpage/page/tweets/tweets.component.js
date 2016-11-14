import templateUrl from './tweets.component.html'

/* @ngInject */
class tweetsController {
  constructor ($log, $tweets) {
    this.$tweets = $tweets
    this.messge = "Welcome to TeamSlowTrack's own Twitter"
    $log.debug('HomeController instantiated')
  }
}

export const tweets = {
  templateUrl,
  controller: tweetsController,
  controllerAs: '$tweets'
}
