import templateUrl from './tweet.component.html'

/* @ngInject */
class tweetController {
  constructor ($log, $state, $profileService, $homeService) {
    this.$profileService = $profileService
    this.$homeService = $homeService
    this.$state = $state

    $log.debug('TweetController instantiated')
  }

  getFeed () {
    return this.$homeService.feed
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
