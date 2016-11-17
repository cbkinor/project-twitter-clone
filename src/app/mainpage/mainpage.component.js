import templateUrl from './mainpage.component.html'

/* @ngInject */
class MainpageController {
  constructor ($log) {
    $log.debug('mainpage instantiated')
  }
}

export const mainpage = {
  templateUrl,
  controller: MainpageController,
  controllerAs: '$mainpage'
}
