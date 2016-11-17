export class ProfileService {

  /* @ngInject */
  constructor ($log, $http, $stateService, $authenticate, $followservice) {
    this.$authenticate = $authenticate
    this.$log = $log
    this.$http = $http
    this.$stateService = $stateService
    this.$followservice = $followservice
    this.arrtweets = []
    $log.debug('ProfileService created')
    $log.debug(this.$authenticate.getCredentials())
  }

  refreshProfile (username) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/tweets'
    }).then(
      (response) => {
        this.username = username
        this.arrtweets = response.data
      },
      (error) => {
        this.$log.debug(error)
      }
    )
    this.mentioned = undefined
    this.$log.debug('')
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/mentions'
    }).then(
      (response) => {
        this.mentioned = response
        this.refreshFollow(username)
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }

  followProfile (username) {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/users/@' + username + '/follow',
      data: {
          username: this.$authenticate.username,
          password: this.$authenticate.password
          }
    }).then( () => {
      this.refreshFollow(username)
    })

  }

  unfollowProfile (username) {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/users/@' + username + '/unfollow',
      data: {
        username: this.$authenticate.username,
        password: this.$authenticate.password
      }
    }).then( () => {
      this.refreshFollow(username)
    })
  }

  refreshFollow (username) {
    this.$followservice.getfollower(username)
    this.$followservice.getfollowing(username)
  }
}
