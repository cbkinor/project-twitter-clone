import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $state, $homeService, $authenticate) {
    this.$homeService = $homeService
    this.$state = $state
    this.feed = $feedService.getFeed()
    $log.debug('feedController instantiated')
    $authenticate.authenticate()
  }

  getFeed () {
    this.$homeService.getFeed()
  }
}

export const feed = {
  templateUrl,
  controller: feedController,
  controllerAs: '$feed'
}
