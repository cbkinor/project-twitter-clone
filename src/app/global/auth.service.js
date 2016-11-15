export class AuthenticateService {
  username = undefined
  password = undefined

  /* @ngInject */
  constructor ($log, $http, $state) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    $log.debug('AuthenticateService created')
  }

  login () {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.username
    }).then(
      (response) => {
        this.$log.debug(response)
        this.$state.go('mainpage')
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }

}
