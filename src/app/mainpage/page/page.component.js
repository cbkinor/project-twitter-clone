import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate, $currentStateService) {
    $log.debug('page instantiated')
    this.$currentStateService = $currentStateService
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
