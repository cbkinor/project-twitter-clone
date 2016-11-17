export class SearchService {

  /* @ngInject */
  constructor ($log, $http, $state, $cookies, $tweetService) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$cookies = $cookies
    this.$tweetService = $tweetService
    this.searchText = ''
    $log.debug('SearchService created')
  }
  search () {
    this.tweets = undefined
    this.users = undefined
    this.mentioned = undefined

    this.searchText = this.inputText
    this.$log.debug(this.searchText)
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.searchText + '/mentions'
    }).then(
      (response) => {
        this.mentioned = response.data
      },
      (error) => {
        this.$log.debug('no mentions with this text')
      }
    )
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/partial/@' + this.searchText
    }).then(
      (response) => {
        this.users = response.data
      },
      (error) => {
        this.$log.debug('no users with this name')
      }
    )
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/tags/partial/' + this.searchText
    }).then(
      (response) => {
        this.tweets = this.$tweetService.checkAllTweetLikes(response.data)
      },
      (error) => {
        this.$log.debug('no tags with this text')
      }
    )
  }
}
