import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $state, $homeService, $authenticate, $profileService) {
    this.$homeService = $homeService
    this.$profileService = $profileService
    this.$state = $state
    $log.debug('feedController instantiated')
    this.$log = $log
    $homeService.refreshFeed($authenticate.username)
  }

  getFeed () {
    return this.$homeService.feed
  }

  test () {
    this.$log.debug('TESTING LINKS')
  }

  feedUser (username) {
    this.$profileService.viewProfile(username)
  }
}

export const feed = {
  templateUrl,
  controller: feedController,
  controllerAs: '$feed'
}
