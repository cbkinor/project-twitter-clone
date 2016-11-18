import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {

  constructor ($scope, $log, $state, $homeService, $authenticateService, $profileService, $searchService, $stateService, $followService, $tweetService) {
    this.$log = $log
    this.$scope = $scope
    this.$homeService = $homeService
    this.$profileService = $profileService
    this.$searchService = $searchService
    this.$stateService = $stateService
    this.$followService = $followService
    this.$tweetService = $tweetService
    this.$state = $state
    this.$scope.$profileService = this.$profileService
    this.$scope.goToProfile = this.goToProfile
    this.$scope.search = this.search
    $log.debug('feedController instantiated')
    $authenticateService.authenticate('home')
    $homeService.refreshFeed($authenticateService.username)
  }

  getFeed () {
    return this.$homeService.feed
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

export const feed = {
  templateUrl,
  controller: feedController,
  controllerAs: '$feed'
}
