import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate, $stateService, $profileService) {
    $log.debug('page instantiated')
    this.$stateService = $stateService
    this.$profileService = $profileService
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
