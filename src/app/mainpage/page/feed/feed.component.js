import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $feedService) {
    this.$feedService = $feedService
    this.messge = "Welcome to TeamSlowTrack's own Twitter"
    $log.debug('HomeController instantiated')
  }

  getFeed () {
    this.$feedService.getFeed()
  }
}

export const feed = {
  templateUrl,
  controller: feedController,
  controllerAs: '$feed'
}
