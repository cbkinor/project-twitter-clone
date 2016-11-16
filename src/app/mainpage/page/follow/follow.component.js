import templateUrl from './follow.component.html'

/* @ngInject */
class followController {
  constructor ($log, $followservice, $authenticate) {
    this.$followservice = $followservice
    this.$authenticate = $authenticate
    this.initiatefollowers = $followservice.getfollower($authenticate.$cookies.get('username'))
    this.initiatefollowings = $followservice.getfollowing($authenticate.$cookies.get('username'))
    console.log($followservice.number)
    console.log($authenticate.$cookies.get('username'))
    $log.debug('FollowController instantiated')
  }

  getfollower () {
    return this.$followservice.arrfollower
  }

  getfollowing () {
    return this.$followservice.arrfollowing
  }
}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
