import templateUrl from './mainpage.component.html'

/* @ngInject */
class MainpageController {
  constructor ($log, $stateService, $authenticateService, $cookies) {
    $log.debug('mainpage instantiated')
    let currentState = $cookies.get('currentState')
    !currentState
      ? $authenticateService.authenticate('login')
      : (currentState === 'login')
        ? $authenticateService.authenticate('home')
        : $authenticateService.authenticate(currentState)
  }
}

export const mainpage = {
  templateUrl,
  controller: MainpageController,
  controllerAs: '$mainpage'
}
