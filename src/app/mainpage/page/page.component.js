import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate, $state) {
    $log.debug('page instantiated')
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
