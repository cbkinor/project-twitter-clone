import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $feedService, $authenticate) {
    this.$feedService = $feedService
    $log.debug('feedController instantiated')
    $authenticate.authenticate()
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
