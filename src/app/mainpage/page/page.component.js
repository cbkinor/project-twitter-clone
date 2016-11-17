import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate, $stateService, $cookies) {
    $log.debug('page instantiated')
    const currentstate = $cookies.get('currentState')
    currentstate ? $stateService.state[currentstate] : $stateService.state['login']
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
