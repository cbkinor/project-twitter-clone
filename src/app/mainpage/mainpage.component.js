import templateUrl from './mainpage.component.html'

/* @ngInject */
class MainpageController {
  constructor ($log, $state) {
    $log.debug('mainpage instantiated')
    $state.go('mainpage.page.home')
  }
}

export const mainpage = {
  templateUrl,
  controller: MainpageController,
  controllerAs: '$mainpage'
}
