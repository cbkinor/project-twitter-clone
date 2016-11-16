export class FollowService {

  /* @ngInject */
  constructor ($log, $http, $state, $authenticate, $cookies) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$cookies = $cookies
    this.$authenticate = $authenticate
    this.number = [1, 2, 3, 4]
    this.arrfollower = []
    this.arrfollowing = []
    $log.debug('FollowService created')
  }

  getfollower (username) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/followers'
    }).then(
      (response) => {
        this.arrfollower = response.data
      },
    )
  }
  getfollowing (username) {
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
