import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {

  constructor ($scope, $log, $state, $homeService, $authenticate, $profileService, $searchService, $stateService, $followService) {
    this.$log = $log
    this.$scope = $scope
    this.$homeService = $homeService
    this.$profileService = $profileService
    this.$searchService = $searchService
    this.$stateService = $stateService
    this.$followService = $followService
    this.$state = $state
    this.$scope.$profileService = this.$profileService
    $log.debug('feedController instantiated')
    $homeService.refreshFeed($authenticate.username)
  }

  getFeed () {
    return this.$homeService.feed
  }

  goToProfile (name) {
    this.$followService.getfollower(name)
    this.$followService.getfollowing(name)
    this.$stateService.state['profile']()
    this.$profileService.refreshProfile(name)
  }

  test () {
    this.$log.debug('TESTING LINKS')
  }

  search (searchText) {
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
