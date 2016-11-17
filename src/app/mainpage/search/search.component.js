import templateUrl from './search.component.html'

/* @ngInject */
class SearchController {
  constructor ($scope, $log, $searchService, $profileService, $tweetService, $stateService) {
    this.$scope = $scope
    this.$searchService = $searchService
    this.$tweetService = $tweetService
    this.$profileService = $profileService
    this.$stateService = $stateService
    this.$scope.$profileService = $profileService
    $log.debug('SearchController instantiated')
  }
  
  userProfile (username) {
    this.$profileService.refreshProfile(username)
    this.$stateService.state['profile']
  }
}
export const search = {
  templateUrl,
  controller: SearchController,
  controllerAs: '$search'
}
