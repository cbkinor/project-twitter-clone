import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate, $stateService) {
    $log.debug('page instantiated')
    this.$stateService = $stateService
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
