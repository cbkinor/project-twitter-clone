import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate, $state) {
    $log.debug('page instantiated')
    $state.go('mainpage.page.feed')
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
