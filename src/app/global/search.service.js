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
    this.$log.debug(this.searchText)
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.searchText + '/mentions'
    }).then(
      (response) => {
        this.mentioned.data = response.data
      },
    )
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.searchText + '/tweets'
    }).then(
      (response) => {
        this.author.data = response.data
      },
    )
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/tags/#' + this.searchText
    }).then(
      (response) => {
        this.hashtag.data = response.data
      },
    )
  }
}
