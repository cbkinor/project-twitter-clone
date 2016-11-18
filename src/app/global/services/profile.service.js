export class ProfileService {

  /* @ngInject */
  constructor ($log, $http, $stateService, $authenticateService, $followService) {
    this.$authenticateService = $authenticateService
    this.$log = $log
    this.$http = $http
    this.$stateService = $stateService
    this.$followService = $followService
    this.arrtweets = []
    $log.debug('ProfileService created')
    $log.debug(this.$authenticateService.getCredentials())
  }

  refreshProfile (username) {
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
                      ? '<a href="#" ng-click="goToProfile(' + "'" + temp + "'" + ')">' + word + '</a>'
                      : (word.substring(0, 1) === '#')
                        ? '<a href="#" ng-click="search(' + "'" + temp + "'" + ')">' + word + '</a>'
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
                      ? '<a href="#" ng-click="goToProfile(' + "'" + temp + "'" + ')">' + word + '</a>'
                      : (word.substring(0, 1) === '#')
                        ? '<a href="#" ng-click="search(' + "'" + temp + "'" + ')">' + word + '</a>'
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
    this.$followService.getfollower(username)
    this.$followService.getfollowing(username)
  }

  goToProfile = (name) => {
    this.$stateService.state['profile']()
    this.refreshProfile(name)
    this.$log.debug('CALLED')
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
            () => {
              this.$log.debug('tweet had no likes')
            }
          )
    })
    return tweets
  }
}
