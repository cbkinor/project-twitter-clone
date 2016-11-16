import templateUrl from './search.component.html'

/* @ngInject */
class SearchController {
  constructor ($log, $searchService, $profileService) {
    this.$searchService = $searchService
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
