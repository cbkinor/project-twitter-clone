import templateUrl from './search.component.html'

/* @ngInject */
class SearchController {
  constructor ($log) {
    $log.debug('SearchController instantiated')
  }
}

export const search = {
  templateUrl,
  controller: SearchController,
  controllerAs: '$search'
}
