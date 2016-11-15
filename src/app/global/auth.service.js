export class AuthenticateService {

  /* @ngInject */
  constructor ($log, $http, $state) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.incorrectUser = false
    this.invalidUsername = false
    $log.debug('AuthenticateService created')
  }

  login (initial) {
    if (initial === undefined) initial = false
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.username + '/@' + this.password
    }).then(
      (response) => {
        this.$log.debug(response)
        this.$state.go('mainpage')
      },
      (error) => {
        this.$log.debug(error)
        if (error.data.message === 'Username not found' && !initial) {
          this.$log.debug('Username not found')
          this.incorrectUser = true
        }
      }
    )
  }

  validateUsername () {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/validate/username/available/@' + this.username
    }).then(
      (response) => {
        this.$log.debug(response.data)
        if (response.data === false) {
          this.$log.debug('Testing')
          this.invalidUsername = true
        } else this.invalidUsername = false
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }

  create () {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/users',
      data: {
      "credentials": {
        "username": this.username,
        "password": this.password
      },
      "profile": {
          "firstName": this.firstName,
          "lastName": this.lastName,
          "email": this.email,
          "phone": this.phone
        }
      }
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
