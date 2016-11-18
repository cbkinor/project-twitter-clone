import templateUrl from './follow.component.html'

/* @ngInject */
class followController {

  constructor ($log, $stateService, $followService, $authenticateService, $profileService, $homeService) {
    this.$followService = $followService
    this.$authenticateService = $authenticateService
    this.$stateService = $stateService
    this.$profileService = $profileService
    this.$homeService = $homeService
    this.initiatefollowers = $followService.getfollower($authenticateService.$cookies.get('username'))
    this.initiatefollowings = $followService.getfollowing($authenticateService.$cookies.get('username'))
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
    this.$stateService.state['profile'](username)
  }
}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
