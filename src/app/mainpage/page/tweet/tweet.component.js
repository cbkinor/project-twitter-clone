import templateUrl from './tweet.component.html'

/* @ngInject */
class tweetController {
  constructor ($log, $state, $profileService, $authenticate, $followservice) {
    this.$profileService = $profileService
    this.$followservice = $followservice
    this.$authenticate = $authenticate
    this.$state = $state
    $log.debug('TweetController instantiated')
    this.$log = $log
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
    if (this.$followservice.arrfollower.length > 0 && this.$followservice.arrfollower.filter(function (follower) { return follower.username === shit }).length === 1) {
      return this.$followservice.arrfollower.filter(function (follower) { return follower.username === shit })[0].username === shit
    } else {
      return false
    }
    // this.$log.debug(this.$followservice.arrfollower.includes(this.$profileService.getSingleUser(this.$authenticate.username)))
}
}

export const tweet = {
  templateUrl,
  controller: tweetController,
  controllerAs: '$tweet'
}
