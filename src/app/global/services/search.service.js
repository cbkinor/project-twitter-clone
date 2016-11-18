export class SearchService {

  /* @ngInject */
  constructor ($log, $http, $state, $cookies, $tweetService) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$cookies = $cookies
    this.$tweetService = $tweetService
    this.tweets = undefined
    this.users = undefined
    this.hashtag = undefined
    this.searchText = ''
    $log.debug('SearchService created')
  }
  search () {
    this.searchText = this.inputText
    this.$log.debug(this.searchText)
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + this.searchText + '/mentions'
    }).then(
      (response) => {
        this.mentioned = response.data
        .map(tweet => {
          if (tweet.content === null) tweet.content = ''
          tweet.content = tweet.content
            .split(' ')
            .map(word => {
                  let temp = word.replace(/[^a-z0-9]/gmi, '')
                  this.$log.debug(word)
                  return (word.substring(0, 1) === '@')
                    ? '<a href="#" ng-click="$search.goToProfile(' + "'" + temp + "'" + ')">' + word + '</a>'
                    : (word.substring(0, 1) === '#')
                      ? '<a href="#" ng-click="$search.search(' + "'" + temp + "'" + ')">' + word + '</a>'
                      : word
                })
            .join(' ')

          return tweet
        })
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
        this.tweets = this.tweets
          .map(tweet => {
            if (tweet.content === null) tweet.content = ''
            tweet.content = tweet.content
              .split(' ')
              .map(word => {
                    let temp = word.replace(/[^a-z0-9]/gmi, '')
                    this.$log.debug(word)
                    return (word.substring(0, 1) === '@')
                      ? '<a href="#" ng-click="$search.goToProfile(' + "'" + temp + "'" + ')">' + word + '</a>'
                      : (word.substring(0, 1) === '#')
                        ? '<a href="#" ng-click="$search.search(' + "'" + temp + "'" + ')">' + word + '</a>'
                        : word
                  })
              .join(' ')

            return tweet
          })
      },
      (error) => {
        this.$log.debug('no tags with this text')
      }
    )
  }
}
