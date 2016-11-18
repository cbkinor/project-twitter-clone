import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticateService, $cookies, $stateService, $searchService) {
    $log.debug('page instantiated')
    this.$stateService = $stateService  // NEEDED FOR HTML
    this.$searchService = $searchService
    let currentState = $cookies.get('currentState')
    $log.debug(currentState)
    !currentState
      ? $authenticateService.authenticate('login')
      : (currentState === 'login')
        ? $authenticateService.authenticate('home')
        : $authenticateService.authenticate(currentState)
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
