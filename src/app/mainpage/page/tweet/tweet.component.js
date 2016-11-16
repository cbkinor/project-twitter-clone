import templateUrl from './tweet.component.html'

/* @ngInject */
class tweetController {
  constructor ($log, $state, $tweetservice) {
    this.$tweetservice = $tweetservice
    this.$state = $state
    $log.debug('TweetController instantiated')
  }

  getuser () {
    return this.$tweetservice.username
  }

  gettweets () {
    return this.$tweetservice.arrtweets
  }

}

export const tweet = {
  templateUrl,
  controller: tweetController,
  controllerAs: '$tweet'
}
