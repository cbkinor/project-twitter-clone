import templateUrl from './search.component.html'

/* @ngInject */
class SearchController {

  constructor ($scope, $log, $searchService, $profileService, $tweetService, $stateService, $followService, $authenticateService) {
    this.$scope = $scope
    $scope.goToProfile = this.goToProfile
    $scope.search = this.search
    this.$searchService = $searchService
    this.$tweetService = $tweetService
    this.$profileService = $profileService
    this.$stateService = $stateService
    this.$followService = $followService
    this.$scope.$profileService = $profileService
    $log.debug('SearchController instantiated')
    $authenticateService.authenticate('search')

  }

  userProfile (username) {
    this.$profileService.refreshProfile(username)
    this.$stateService.state['profile'](username)
  }

  goToProfile = (name) => {
    this.$stateService.state['profile'](name)
    this.$profileService.refreshProfile(name)
  }

  getTweets () {
    return this.$searchService.tweets
  }

  search = (searchText) => {
    this.$searchService.inputText = searchText
    this.$searchService.search()
    this.$stateService.state['search']()
  }
}

export const search = {
  templateUrl,
  controller: SearchController,
  controllerAs: '$search'
}
