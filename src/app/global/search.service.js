export class SearchService {

  /* @ngInject */
  constructor ($log, $http, $state, $cookies) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$cookies = $cookies
    this.searchText = undefined
    $log.debug('SearchService created')
  }

  search () {
    this.mentioned = undefined
    this.author = undefined
    this.hashtag = undefined
    this.$log.debug(this.searchText)
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.searchText + '/mentions'
    }).then(
      (response) => {
        this.$log.debug("MENTIONS====================================")
        this.$log.debug(response)
        this.mentioned = response
      },
      (error) => {
        this.$log.debug(error)
      }
    )
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.searchText + '/tweets'
    }).then(
      (response) => {
        this.$log.debug("TWEETS====================================")
        this.$log.debug(response)
        this.author = response
      },
      (error) => {
        this.$log.debug(error)
      }
    )
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/tags/' + this.searchText
    }).then(
      (response) => {
        this.$log.debug("HASHTAGS====================================")
        this.$log.debug(response)
        this.hashtag = response
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }
}
