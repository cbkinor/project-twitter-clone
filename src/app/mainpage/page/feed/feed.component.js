import templateUrl from './feed.component.html'

/* @ngInject */
class feedController {
  constructor ($log, $state, $feedService, $authenticate) {
    this.$feedService = $feedService
    this.$state = $state
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
