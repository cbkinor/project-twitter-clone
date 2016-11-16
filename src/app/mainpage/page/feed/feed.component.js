import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $state, $feedService, $authenticate) {
    this.$feedService = $feedService
    this.$state = $state
    this.feed = $feedService.getFeed()
    $log.debug('feedController instantiated')
    $authenticate.authenticate()
  }

  getFeed () {
    this.$feedService.getFeed()
    this.$log.debug('We have feeds')
  }

  getfeeds() {
    return this.$feedService.tweets
  }
}

export const feed = {
  templateUrl,
  controller: feedController,
  controllerAs: '$feed'
}
