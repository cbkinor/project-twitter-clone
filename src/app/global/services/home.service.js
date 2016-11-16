export class HomeService {

  /* @ngInject */
  constructor ($log, $http, $state) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.feed = []
    this.$log.debug('HomeService instantiated')
  }

  viewHome (username) {
    this.$log.debug('We have feeds')
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/feed'
    }).then(
      (response) => {
        this.feed = response.data
        this.$log.debug(response.data)
        this.$state.go('mainpage.page.home')
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }
}
