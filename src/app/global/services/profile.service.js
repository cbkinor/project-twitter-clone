export class ProfileService {

  /* @ngInject */
  constructor ($log, $http, $state, $stateService, $authenticate, $followservice, $homeService) {
    this.$authenticate = $authenticate
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$stateService = $stateService
    this.$followservice = $followservice
    this.$homeService = $homeService
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
      },
      (error) => {
        this.$log.debug(error)
      }
    )
    this.$followservice.getfollower(this.username)
    this.$followservice.getfollowing(this.username)
  }

  followProfile (username) {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/users/@' + username + '/follow',
      data: {
          username: this.$authenticate.username,
          password: this.$authenticate.password
          }
    })
    this.$followservice.getfollower(this.username)
    this.$followservice.getfollowing(this.username)
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
    this.$followservice.getfollower(username)
    this.$followservice.getfollowing(username)
  }
}
