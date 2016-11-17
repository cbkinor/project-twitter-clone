import templateUrl from './mainpage.component.html'

/* @ngInject */
class MainpageController {
  constructor ($log, $stateService, $authenticate, $cookies) {
    $log.debug('mainpage instantiated')
    let currentState = $cookies.get('currentState')
    !currentState
      ? $authenticate.authenticate('login')
      : (currentState === 'login')
        ? $authenticate.authenticate('home')
        : $authenticate.authenticate(currentState)
  }
}

export const mainpage = {
  templateUrl,
  controller: MainpageController,
  controllerAs: '$mainpage'
}
