import templateUrl from './page.component.html'

/* @ngInject */
class PageController {
  constructor ($log, $authenticate, $currentStateService, $profileService) {
    $log.debug('page instantiated')
    this.$currentStateService = $currentStateService
    this.$profileService = $profileService
  }
}

export const page = {
  templateUrl,
  controller: PageController,
  controllerAs: '$page'
}
