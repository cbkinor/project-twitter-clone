import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $stateService, $searchService) {
    $log.debug('page instantiated')
    this.$stateService = $stateService  // NEEDED FOR HTML
    this.$searchService = $searchService
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
