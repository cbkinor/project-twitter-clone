export class ProfileService {

  /* @ngInject */
  constructor ($log, $http, $state, $stateService, $authenticate) {
    this.$authenticate = $authenticate
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$stateService = $stateService
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
        this.$stateService.state['profile']()
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
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }

  followProfile (username) {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/users/@' + this.username + '/follow',
      data: {
          username: this.$authenticate.username,
          password: this.$authenticate.password
          }
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
    })
  }
}
