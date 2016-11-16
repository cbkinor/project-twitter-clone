export class AuthenticateService {

  /* @ngInject */
  constructor ($log, $http, $state, $cookies) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$cookies = $cookies
    this.profile = {
                      firstName: this.firstName,
                      lastName: this.lastName,
                      email: this.email,
                      phone: this.phone
                    }
    this.incorrectUser = false
    this.invalidUsername = false
    $log.debug('AuthenticateService created')
  }

  authenticate () {
    this.username = this.$cookies.get('username')
    this.password = this.$cookies.get('password')
    this.login()
  }

  login (initial) {
    if (initial === undefined) initial = false
    if (!this.username || !this.password) return
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.username + '/@' + this.password
    }).then(
      (response) => {
        this.$log.debug(response.data)
        this.$cookies.put('username', this.username)
        this.$cookies.put('password', this.password)
        this.profile = response.data.profile
        this.$state.go('mainpage.page.feed')
      },
      (error) => {
        this.$log.debug(error)
        if (error.data.message === 'Username not found' && !initial) {
          this.$log.debug('Username not found')
          this.$state.go('login')
          this.incorrectUser = true
        }
      }
    )
  }

  logout () {
    this.profile = undefined
    this.$cookies.remove('username')
    this.$cookies.remove('password')
    this.username = undefined
    this.password = undefined
    this.$state.go('login')
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
              "profile": this.profile
            }
    }).then(
      (response) => {
        this.$log.debug(response)
        this.$state.go('mainpage')
        this.profile = response.data.profile
        this.$cookies.put('username', this.username)
        this.$cookies.put('password', this.password)
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }

  update () {
    this.$http({
      method: 'PATCH',
      url: 'http://localhost:8080/users/@' + this.username,
      data: {
              "credentials": {
                                "username": this.username,
                                "password": this.password
                              },
              "profile": this.profile
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
