export class HomeService {

  /* @ngInject */
  constructor ($log, $http, $state, $stateService) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$stateService = $stateService
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
        this.$stateService.home()
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }
}
