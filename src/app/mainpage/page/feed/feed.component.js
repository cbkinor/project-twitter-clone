import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $state, $homeService, $authenticate) {
    this.$homeService = $homeService
    this.$state = $state
    this.$homeService.refreshFeed($authenticate.username)
    $log.debug('feedController instantiated')
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
