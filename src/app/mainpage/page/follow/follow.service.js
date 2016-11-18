export class FollowService {

  /* @ngInject */
  constructor ($log, $http, $state) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.number = [1, 2, 3, 4]
    this.arrfollower = []
    this.arrfollowing = []
    $log.debug('FollowService created')
  }

  getFollower (username) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/followers'
    }).then(
      (response) => {
        this.arrfollower = response.data
      },
    )
  }
  getFollowing (username) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/following'
    }).then(
      (response) => {
        this.arrfollowing = response.data
      }
    )
  }



}
