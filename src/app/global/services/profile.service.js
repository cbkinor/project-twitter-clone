export class ProfileService {

  /* @ngInject */
  constructor ($log, $http, $state, $stateService) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$stateService = $stateService
    this.arrtweets = []
    $log.debug('ProfileService created')
  }

  refreshProfile (username) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/tweets'
    }).then(
      (response) => {
        this.username = username
        this.arrtweets = response.data
        this.username = username
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
}
