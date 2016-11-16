export class HomeService {

  /* @ngInject */
  constructor ($log, $http, $authenticate) {
    this.$log = $log
    this.$http = $http
    this.$authenticate = $authenticate
    this.$log.debug("HomeService instantiated")
  }

  getFeed () {
    this.$log.debug('We have feeds')
    this.$log.debug(this.$authenticate.username)
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
