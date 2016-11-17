import templateUrl from './mainpage.component.html'

/* @ngInject */
class MainpageController {
  constructor ($log, $stateService, $authenticate, $cookies) {
    $log.debug('mainpage instantiated')
    if (!$authenticate.username) {
      $log.debug('Authenticating User')
      const state = $cookies.get('currentState')
      $authenticate.authenticate(!state ? 'login' : state)
    }
  }
}

export const mainpage = {
  templateUrl,
  controller: MainpageController,
  controllerAs: '$mainpage'
}
