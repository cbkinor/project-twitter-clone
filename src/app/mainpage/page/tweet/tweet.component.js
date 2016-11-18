import templateUrl from './tweet.component.html'

/* @ngInject */
class tweetController {
  constructor ($log, $state, $cookies, $profileService, $authenticateService, $followService, $homeService, $scope, $stateService, $searchService, $tweetService, $stateParams) {
    $cookies.put('currentState', 'profile')
    $scope.username = $stateParams.currentProfile || ''
    this.$profileService = $profileService
    this.$followService = $followService
    this.$authenticateService = $authenticateService
    this.$homeService = $homeService
    this.$tweetService = $tweetService
    this.$state = $state
    $scope.$profileService = $profileService
    $scope.goToProfile = this.goToProfile
    $scope.search = this.search
    this.$stateService = $stateService
    this.$searchService = $searchService
    $log.debug('TweetController instantiated')
    $authenticateService.authenticate('profile')
    this.$log = $log
    this.$profileService.refreshProfile($scope.username)
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
    let checkUser = this.$authenticateService.username
    if (this.$followService.arrfollower.length > 0 && this.$followService.arrfollower.filter(function (follower) { return follower.username === checkUser }).length === 1) {
      return this.$followService.arrfollower.filter(function (follower) { return follower.username === checkUser })[0].username === checkUser
    } else {
      return false
    }
  }

  goToProfile = (name) => {
    this.$stateService.state['profile'](name)
    this.$profileService.refreshProfile(name)
  }

  search = (searchText) => {
    this.$searchService.inputText = searchText
    this.$searchService.search()
    this.$stateService.state['search']()
  }
}

export const tweet = {
  templateUrl,
  controller: tweetController,
  controllerAs: '$tweet'
}
