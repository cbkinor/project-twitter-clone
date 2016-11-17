export class SearchService {

  /* @ngInject */
  constructor ($log, $http, $state, $cookies, $authenticate) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$cookies = $cookies
    this.$authenticate = $authenticate
    this.searchText = undefined
    $log.debug('SearchService created')
  }
  likeTweet (item) {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/tweets/' + item.id + '/like',
      data: {
        username: this.$authenticate.username,
        password: this.$authenticate.password
      }
    }).then(
          (response) => {
            this.$log.debug(response)
            item.liked = true
          },
          (error) => {
            this.$log.debug(error)
          }
        )
  }
  unlikeTweet (item) {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/tweets/' + item.id + '/unlike',
      data: {
        username: this.$authenticate.username,
        password: this.$authenticate.password
      }
    }).then(
          (response) => {
            this.$log.debug(response)
            item.liked = false
          },
          (error) => {
            this.$log.debug(error)
          }
        )
  }

  checkLikeTweet (item) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/tweets/' + item.id + '/likes',
      data: {
        username: this.$authenticate.username,
        password: this.$authenticate.password
      }
    }).then(
          (response) => {
            this.$log.debug(response)
            response.data.filter(function (user) { return user.username === this.$authenticate.username })
            if (response.data.length() > 0) {
              item.liked = true
            } else {
              item.liked = false
            }
          },
          (error) => {
            this.$log.debug(error)
          }
        )
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
        this.mentioned = response
      },
      (error) => {
        this.$log.debug(error)
      }
    )
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.searchText
    }).then(
      (response) => {
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
        this.hashtag = response
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }
}
