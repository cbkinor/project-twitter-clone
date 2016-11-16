import templateUrl from './follow.component.html'

/* @ngInject */
class followController {
  constructor ($log, $state, $followservice, $authenticate, $profileService) {
    this.$followservice = $followservice
    this.$authenticate = $authenticate
    this.$state = $state
    this.$profileService = $profileService
    this.initiatefollowers = $followservice.getfollower($authenticate.$cookies.get('username'))
    this.initiatefollowings = $followservice.getfollowing($authenticate.$cookies.get('username'))
    $log.debug('FollowController instantiated')
  }

  getfollower () {
    return this.$followservice.arrfollower
  }

  getfollowing () {
    return this.$followservice.arrfollowing
  }

  google (username) {
    this.$profileService.viewProfile(username)
    }

}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
