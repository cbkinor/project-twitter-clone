export class SearchService {

  /* @ngInject */
  constructor ($log, $http, $state, $authenticateService) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$authenticateService = $authenticateService
    this.tweets = undefined
    this.users = undefined
    this.hashtags = undefined
    this.mentioned = undefined
    this.searchText = ''
    $log.debug('SearchService created')
  }

  getMentions (username) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/mentions'
    }).then(
      (response) => {
        this.mentioned = this.checkAllTweetLikes(response.data)
        this.mentioned = this.mentioned
        .map(tweet => {
          if (tweet.content === null) tweet.content = ''
          tweet.content = tweet.content
            .split(' ')
            .map(word => {
              let temp = word.replace(/[^a-z0-9]/gmi, '')
              return (word.substring(0, 1) === '@')
                ? '<md-button class="tweet" ng-click="goToProfile(' + "'" + temp + "'" + ')"><text>' + word + '</text></md-button>'
                : (word.substring(0, 1) === '#')
                  ? '<md-button class="tweet" ng-click="search(' + "'" + temp + "'" + ')"><text>' + word + '</text></md-button>'
                  : word
            })
            .join(' ')

          return tweet
        })
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }

  search () {
    this.tweets = undefined
    this.users = undefined
    this.hashtags = undefined
    this.mentioned = undefined
    this.searchText = this.inputText
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/partial/@' + this.searchText + '/mentions'
    }).then(
      (response) => {
        this.mentioned = this.checkAllTweetLikes(response.data)
        this.mentioned = this.mentioned
        .map(tweet => {
          if (tweet.content === null) tweet.content = ''
          tweet.content = tweet.content
            .split(' ')
            .map(word => {
              let temp = word.replace(/[^a-z0-9]/gmi, '')
              return (word.substring(0, 1) === '@')
                ? '<md-button class="tweet" ng-click="goToProfile(' + "'" + temp + "'" + ')"><text>' + word + '</text></md-button>'
                : (word.substring(0, 1) === '#')
                  ? '<md-button class="tweet" ng-click="search(' + "'" + temp + "'" + ')"><text>' + word + '</text></md-button>'
                  : word
            })
            .join(' ')

          return tweet
        })
      },
      (error) => {
        this.$log.debug(error)
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
        this.$log.debug(error)
      }
    )
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/tags/partialtag/' + this.searchText
    }).then(
      (response) => {
        this.hashtags = response.data
      },
      (error) => {
        this.$log.debug(error)
      }
    )
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/tags/partial/' + this.searchText
    }).then(
      (response) => {
        this.tweets = this.checkAllTweetLikes(response.data)
        this.tweets = this.tweets
          .map(tweet => {
            if (tweet.content === null) tweet.content = ''
            tweet.content = tweet.content
              .split(' ')
              .map(word => {
                let temp = word.replace(/[^a-z0-9]/gmi, '')
                return (word.substring(0, 1) === '@')
                  ? '<md-button class="tweet" ng-click="goToProfile(' + "'" + temp + "'" + ')"><text>' + word + '</text></md-button>'
                  : (word.substring(0, 1) === '#')
                    ? '<md-button class="tweet" ng-click="search(' + "'" + temp + "'" + ')"><text>' + word + '</text></md-button>'
                    : word
              })
              .join(' ')

            return tweet
          })
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }

  checkAllTweetLikes (tweets) {
    tweets.forEach(tweet => {
      this.$http({
        method: 'GET',
        url: 'http://localhost:8080/tweets/' + tweet.id + '/likes',
        data: {
          username: this.$authenticateService.username,
          password: this.$authenticateService.password
        }
      }).then(
            (response) => {
              tweet.liked = false
              response.data.forEach(user => {
                if (user.username === this.$authenticateService.username) tweet.liked = true
              })
            },
            (error) => {
              this.$log.debug(error)
            }
          )
    })
    return tweets
  }
}
