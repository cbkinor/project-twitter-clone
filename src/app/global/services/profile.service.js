export class ProfileService {

  /* @ngInject */
  constructor ($log, $http, $stateService, $authenticateService, $followService, $searchService) {
    this.$authenticateService = $authenticateService
    this.$log = $log
    this.$http = $http
    this.$stateService = $stateService
    this.$followService = $followService
    this.$searchService = $searchService
    this.arrtweets = []
    $log.debug('ProfileService created')
  }

  refreshProfile (username) {
    this.$searchService.getMentions(username)
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/tweets'
    }).then(
      (response) => {
        this.username = username
        this.arrtweets = this.checkAllTweetLikes(response.data)
        this.arrtweets = this.arrtweets
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
      url: 'http://localhost:8080/users/@' + username + '/mentions'
    }).then(
      (response) => {
        this.mentioned = response.data
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
        this.refreshFollow(username)
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }

  getTweets () {
    return this.arrtweets
  }

  followProfile (username) {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/users/@' + username + '/follow',
      data: {
          username: this.$authenticateService.username,
          password: this.$authenticateService.password
          }
    }).then( () => {
      this.refreshFollow(username)
    })

  }

  unfollowProfile (username) {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/users/@' + username + '/unfollow',
      data: {
        username: this.$authenticateService.username,
        password: this.$authenticateService.password
      }
    }).then( () => {
      this.refreshFollow(username)
    })
  }

  refreshFollow (username) {
    this.$followService.getFollower(username)
    this.$followService.getFollowing(username)
  }

  goToProfile = (name) => {
    this.$stateService.state['profile'](name)
    this.refreshProfile(name)
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
