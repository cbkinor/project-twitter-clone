import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $state, $homeService, $authenticate) {
    this.$homeService = $homeService
    this.$state = $state
    $log.debug('feedController instantiated')
    if (!$authenticate.username) {
      $log.debug('Authenticating User')
      $authenticate.authenticate()
    }
    this.$homeService.viewHome($authenticate.username)
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
