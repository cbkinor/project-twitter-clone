import templateUrl from './search.component.html'

/* @ngInject */
class SearchController {
  constructor ($log, $searchService, $profileService, $tweetService, $stateService) {
    this.$searchService = $searchService
    this.$tweetService = $tweetService
    this.$profileService = $profileService
    this.$stateService = $stateService
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
