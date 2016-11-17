import templateUrl from './tweet.component.html'

/* @ngInject */
class tweetController {
  constructor ($log, $state, $profileService, $authenticate, $followService, $homeService) {
    this.$profileService = $profileService
    this.$followService = $followService
    this.$authenticate = $authenticate
    this.$homeService = $homeService
    this.$state = $state
    $log.debug('TweetController instantiated')
    this.$log = $log
    this.$profileService.refreshProfile()
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

  followuser (username) {
    this.$profileService.followProfile(username)
  }
  unfollowuser (username) {
    this.$profileService.unfollowProfile(username)
  }

  checkfollower () {
    let shit = this.$authenticate.username
    if (this.$followService.arrfollower.length > 0 && this.$followService.arrfollower.filter(function (follower) { return follower.username === shit }).length === 1) {
      return this.$followService.arrfollower.filter(function (follower) { return follower.username === shit })[0].username === shit
    } else {
      return false
    }
    // this.$log.debug(this.$followService.arrfollower.includes(this.$profileService.getSingleUser(this.$authenticate.username)))
}
}

export const tweet = {
  templateUrl,
  controller: tweetController,
  controllerAs: '$tweet'
}
