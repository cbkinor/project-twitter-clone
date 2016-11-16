export class FeedService {

  /* @ngInject */
  constructor ($log, $http, $authenticate) {
    this.$log = $log
    this.$http = $http
    this.$authenticate = $authenticate
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
      })
  }
}
