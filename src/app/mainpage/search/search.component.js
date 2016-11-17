import templateUrl from './search.component.html'

/* @ngInject */
class SearchController {
  constructor ($log, $searchService, $profileService, $tweetService) {
    this.$searchService = $searchService
    this.$tweetService = $tweetService
    this.$profileService = $profileService
    $log.debug('SearchController instantiated')
  }

  userProfile (username) {
    this.$profileService.viewProfile(username)
  }
}
export const search = {
  templateUrl,
  controller: SearchController,
  controllerAs: '$search'
}
