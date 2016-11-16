import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $state, $homeService, $authenticate, $currentStateService) {
    this.$homeService = $homeService
    this.$state = $state
    $currentStateService.currentTab = 'Feed'
    $log.debug('feedController instantiated')
    if (!$authenticate.username) {
      $log.debug('Authenticating User')
      $authenticate.authenticate()
    }
  }

  getFeed () {
    return this.$homeService.feed
  }

}

export const feed = {
  templateUrl,
  controller: feedController,
  controllerAs: '$feed'
}
