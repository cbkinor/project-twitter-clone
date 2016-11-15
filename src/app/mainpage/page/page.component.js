import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate) {
    $log.debug('page instantiated')
    $authenticate.authenticate()
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
