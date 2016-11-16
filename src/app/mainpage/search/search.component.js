import templateUrl from './search.component.html'

/* @ngInject */
class SearchController {
  constructor ($log, $searchService) {
    this.$searchService = $searchService
    $log.debug('SearchController instantiated')
  }
}

export const search = {
  templateUrl,
  controller: SearchController,
  controllerAs: '$search'
}
