import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $state, $homeService, $authenticate, $profileService) {
    this.$homeService = $homeService
    this.$profileService = $profileService
    this.$state = $state
    this.$homeService.refreshFeed($authenticate.username)
    $log.debug('feedController instantiated')
  }

  getFeed () {
    return this.$homeService.feed
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
