import templateUrl from './mainpage.component.html'

/* @ngInject */
class MainpageController {
  constructor ($log) {
    $log.debug('mainpage instantiated')
  }
}

export const login = {
  templateUrl,
  controller: MainpageController,
  controllerAs: '$mainpage'
}
