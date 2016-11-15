import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log) {
    $log.debug('page instantiated')
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
