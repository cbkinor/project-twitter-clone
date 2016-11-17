import templateUrl from './search.component.html'

/* @ngInject */
class SearchController {

  constructor ($scope, $log, $searchService, $profileService, $tweetService, $stateService, $followService) {
    this.$scope = $scope
    this.$searchService = $searchService
    this.$tweetService = $tweetService
    this.$profileService = $profileService
    this.$stateService = $stateService
    this.$followService = $followService
    this.$scope.$profileService = $profileService
    $log.debug('SearchController instantiated')
  }

  userProfile (username) {
    this.$profileService.refreshProfile(username)
    this.$stateService.state['profile']
  }

  goToProfile (name) {
    this.$followService.getfollower(name)
    this.$followService.getfollowing(name)
    this.$stateService.state['profile']()
    this.$profileService.refreshProfile(name)
  }

  getTweets() {
    return this.$searchService.tweets
  }

  search (searchText) {
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
