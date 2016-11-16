export class ProfileService {

  /* @ngInject */
  constructor ($log, $http, $state) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.arrtweets = []
    $log.debug('ProfileService created')
  }

  viewProfile (username) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/tweets'
    }).then(
      (response) => {
        this.$log.debug(response.data)
        this.arrtweets = response.data
        this.$state.go('mainpage.page.tweet')
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }
}
