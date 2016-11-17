import templateUrl from './mainpage.component.html'

/* @ngInject */
class MainpageController {
  constructor ($log, $stateService, $authenticate, $cookies) {
    $log.debug('mainpage instantiated')
    const currentstate = $cookies.get('currentState')
    $log.debug(currentstate)
    !currentstate
      ? $stateService.state['login']()
      : (currentstate === 'login')
        ? $stateService.state['home']()
        : $stateService.state[currentstate]()
  }
}

export const mainpage = {
  templateUrl,
  controller: MainpageController,
  controllerAs: '$mainpage'
}
