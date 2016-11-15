export class AuthenticateService {

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
