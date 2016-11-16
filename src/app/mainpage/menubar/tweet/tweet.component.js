import templateUrl from './tweet.component.html'

/* @ngInject */
class TweetController {
  constructor ($log) {
    this.$log = $log
  }
}

export const tweet = {
  templateUrl,
  controller: TweetController,
  controllerAs: '$tweet'
}
