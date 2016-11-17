import templateUrl from './tweet.component.html'

/* @ngInject */
class tweetController {
  constructor ($log, $state, $profileService) {
    this.$profileService = $profileService
    this.$state = $state

    $log.debug('TweetController instantiated')
  }

  getuser () {
    return this.$profileService.username
  }

  gettweets () {
    return this.$profileService.arrtweets
  }

}

export const tweet = {
  templateUrl,
  controller: tweetController,
  controllerAs: '$tweet'
}
