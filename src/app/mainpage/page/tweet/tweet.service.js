export class TweetService {

  /* @ngInject */
  constructor ($log, $http, $state) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.username
    this.arrtweets = []
    $log.debug('TweetService created')
  }

  gettweets () {
    this.$http({
    method: 'GET',
    url: 'http://localhost:8080/users/@' + this.username + '/tweets'
  }).then(
    (response) => {
      console.log(response.data)
      this.arrtweets = response.data
    },
  )
}

  setusername (username) {
    this.username = username
  }

}
