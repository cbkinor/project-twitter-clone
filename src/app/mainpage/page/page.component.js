import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate, $cookies, $stateService, $searchService) {
    $log.debug('page instantiated')
    this.$stateService = $stateService  // NEEDED FOR HTML
    this.$searchService = $searchService
    let currentState = $cookies.get('currentState')
    $log.debug(currentState)
    !currentState
      ? $authenticate.authenticate('login')
      : (currentState === 'login')
        ? $authenticate.authenticate('home')
        : $authenticate.authenticate(currentState)
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
