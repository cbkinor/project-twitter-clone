export class FeedService {

  /* @ngInject */
  constructor ($log, $http, $authenticate) {
    this.$log = $log
    this.$http = $http
    this.$authenticate = $authenticate
    this.username = undefined
    this.tweet = undefined
  }

  getFeed = () => {
    // console.log('got feeds')
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
