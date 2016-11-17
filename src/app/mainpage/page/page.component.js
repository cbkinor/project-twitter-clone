import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate, $cookies) {
    $log.debug('page instantiated')

    let currentState = $cookies.get('currentState')
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
