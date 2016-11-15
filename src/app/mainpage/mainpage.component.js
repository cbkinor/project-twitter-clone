import templateUrl from './mainpage.component.html'

/* @ngInject */
class MainpageController {
  constructor ($log, $authenticate) {
    $log.debug('mainpage instantiated')

    if (!$authenticate.authenticate()) {
      $authenticate.logout()
    } else {
      $authenticate.login()
    }
  }
}

export const login = {
  templateUrl,
  controller: MainpageController,
  controllerAs: '$mainpage'
}
