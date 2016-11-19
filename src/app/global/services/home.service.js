export class HomeService {

  /* @ngInject */
  constructor ($log, $http, $state, $stateService, $followService, $profileService, $authenticateService, $searchService) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$stateService = $stateService
    this.$followService = $followService
    this.$profileService = $profileService
    this.$searchService = $searchService
    this.$authenticateService = $authenticateService
    this.feed = []
    this.$log.debug('HomeService instantiated')
  }

  refreshFeed (username) {
    this.$searchService.getMentions(username)
    this.$profileService.refreshFollow(username)
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/feed'
    }).then(
      (response) => {
        this.feed = this.checkAllTweetLikes(response.data)
        this.feed = this.feed
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
