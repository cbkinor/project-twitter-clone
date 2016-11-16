import templateUrl from './follow.component.html'

/* @ngInject */
class followController {
  constructor ($log, $state, $followservice, $authenticate, $tweetservice) {
    this.$followservice = $followservice
    this.$authenticate = $authenticate
    this.$state = $state
    this.$tweetservice = $tweetservice
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
    this.$tweetservice.setusername(username)
    this.$tweetservice.gettweets()
    this.$state.go('mainpage.page.tweet')
  }

}

export const follow = {
  templateUrl,
  controller: followController,
  controllerAs: '$follow'
}
