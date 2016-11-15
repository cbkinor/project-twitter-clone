import templateUrl from './mentions.component.html'

/* @ngInject */
class MentionsController {
  constructor ($log) {
    $log.debug('MentionsController instantiated')
  }
}

export const mentions = {
  templateUrl,
  controller: MentionsController,
  controllerAs: '$mentions'
}
