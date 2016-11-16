export class HomeService {

  /* @ngInject */
  constructor ($log, $http, $state, $authenticate) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$authenticate = $authenticate
    this.username = undefined
    this.tweet = undefined
    this.$log.debug("HomeService instantiated")
  }

  getFeed () {
    this.$log.debug('We have feeds')
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.$authenticate.username + '/feed'
    }).then(
      (response) => {
        this.tweets = response.data
        this.$log.debug(response.data)
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }
}
