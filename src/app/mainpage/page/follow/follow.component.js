import templateUrl from './follow.component.html'

/* @ngInject */
class followController {
  constructor ($log, $stateService, $followservice, $authenticate, $profileService) {
    this.$followservice = $followservice
    this.$authenticate = $authenticate
    this.$stateService = $stateService
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
    console.log(username)
    this.$followservice.getfollower(username)
    this.$followservice.getfollowing(username)
    this.$profileService.refreshProfile(username)
    this.$stateService.state['profile']()
  }
}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
