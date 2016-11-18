import templateUrl from './follow.component.html'

/* @ngInject */
class followController {

  constructor ($log, $stateService, $followService, $authenticateService, $profileService, $homeService) {
    this.$followService = $followService
    this.$authenticateService = $authenticateService
    this.$stateService = $stateService
    this.$profileService = $profileService
    this.$homeService = $homeService
    this.followTabBoolean = true
    this.initiatefollowers = $followService.getFollower($authenticateService.$cookies.get('username'))
    this.initiatefollowings = $followService.getFollowing($authenticateService.$cookies.get('username'))
    $log.debug('FollowController instantiated')
  }

  getFollower () {
    return this.$followService.arrfollower
  }

  getFollowing () {
    return this.$followService.arrfollowing
  }

  getTargetFollows () {
    if (this.inputText === undefined) {
      this.inputText = ''
    }
    let searchText = this.inputText
    if (this.followTabBoolean === true) {
      let follower = this.getFollower()
      if (follower.length < 0) {
        return undefined
      } else {
        return follower.filter(function (user) { return user.username.startsWith(searchText) })
      }
    } else {
      let following = this.getFollowing()
      if (following.length < 0) {
        return undefined
      } else {
        return following.filter(function (user) { return user.username.startsWith(searchText) })
      }
    }
  }

  setFollowerTabTrue () {
    this.followTabBoolean = true
  }
  setFollowingTabFalse () {
    this.followTabBoolean = false
  }

  goToProfileFollow (username) {
    this.$followService.getFollower(username)
    this.$followService.getFollowing(username)
    this.$profileService.refreshProfile(username)
    this.$stateService.state['profile'](username)
  }
}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
