import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $state, $homeService, $authenticate, $profileService) {
    this.$homeService = $homeService
    this.$state = $state
    this.$profileService = $profileService
    $log.debug('feedController instantiated')
    this.$log = $log
    if (!$authenticate.username) {
      $log.debug('Authenticating User')
      $authenticate.authenticate()
    }
    this.$homeService.viewHome($authenticate.username)
  }

  getFeed () {
    return this.$homeService.feed
  }

  test () {
    this.$log.debug('TESTING LINKS')
  }
}

export const feed = {
  templateUrl,
  controller: feedController,
  controllerAs: '$feed'
}
