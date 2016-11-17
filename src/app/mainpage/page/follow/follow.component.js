import templateUrl from './follow.component.html'

/* @ngInject */
class followController {
  constructor ($log, $stateService, $followService, $authenticate, $profileService) {
    this.$followService = $followService
    this.$authenticate = $authenticate
    this.$stateService = $stateService
    this.$profileService = $profileService
    this.initiatefollowers = $followService.getfollower($authenticate.$cookies.get('username'))
    this.initiatefollowings = $followService.getfollowing($authenticate.$cookies.get('username'))
    $log.debug('FollowController instantiated')
  }

  getfollower () {
    return this.$followService.arrfollower
  }

  getfollowing () {
    return this.$followService.arrfollowing
  }

  google (username) {
    console.log(username)
    this.$followService.getfollower(username)
    this.$followService.getfollowing(username)
    this.$profileService.refreshProfile(username)
    this.$stateService.state['profile']()
  }
}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
