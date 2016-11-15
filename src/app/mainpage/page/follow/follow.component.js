import templateUrl from './follow.component.html'

/* @ngInject */
class followController {
  constructor ($log) {
    $log.debug('FollowController instantiated')
  }
}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
