export class HomeService {

  /* @ngInject */
  constructor ($log, $http, $state, $stateService) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$stateService = $stateService
    this.feed = []
    this.$log.debug('HomeService instantiated')
  }

  refreshFeed (username) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + username + '/feed'
    }).then(
      (response) => {
        this.feed = response.data
          .map(tweet => {
            if (tweet.content === null) tweet.content = ''
            tweet.content = tweet.content
              .split(' ')
              .map(word => {
                    let temp = word.replace(/[^a-z0-9]/gmi, '')
                    this.$log.debug(word)
                    return (word.substring(0, 1) === '@')
                      ? '<a href="#" ng-click="$feed.goToProfile(' + "'" + temp + "'" + ')">' + word + '</a>'
                      : (word.substring(0, 1) === '#')
                        ? '<a href="#" ng-click="$feed.test()">' + word + '</a>'
                        : word
                  })
              .join(' ')

            return tweet
          })
        this.$log.debug(this.feed)
      },
      (error) => {
        this.$log.debug(error)
      }
    )
  }
}
