import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {

  constructor ($log, $homeService, $authenticate, $profileService, $stateService) {
    this.$log = $log
    this.$homeService = $homeService
    this.$profileService = $profileService
    this.$stateService = $stateService
    $log.debug('feedController instantiated')
    $homeService.refreshFeed($authenticate.username)
  }

  getFeed () {
    return this.$homeService.feed
  }

  goToProfile (name) {
    this.$stateService.state['profile']()
    this.$profileService.refreshProfile(name)
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
