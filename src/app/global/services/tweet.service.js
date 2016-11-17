export class TweetService {

  /* @ngInject */
  constructor ($http, $authenticate, $log) {
    this.$http = $http
    this.$authenticate = $authenticate
    this.$log = $log
  }

  postTweet (content) {
    const tweet = {
      'content': content,
      'credentials': this.$authenticate.getCredentials()
    }

    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/tweets',
      data: tweet
    })
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
            item.liked = true
          },
          (error) => {
            this.$log.debug('tweet not liked')
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
            item.liked = false
          },
          (error) => {
            this.$log.debug('tweet not unliked')
          }
        )
  }

  checkAllTweetLikes (tweets) {
    tweets.data.forEach(tweet => {
      this.$http({
        method: 'GET',
        url: 'http://localhost:8080/tweets/' + tweet.id + '/likes',
        data: {
          username: this.$authenticate.username,
          password: this.$authenticate.password
        }
      }).then(
            (response) => {
              tweet.liked = false
              response.data.forEach(user => {
                if (user.username === this.$authenticate.username) tweet.liked = true
              })
            },
            (error) => {
              this.$log.debug('tweet had no likes')
            }
          )
    })
    return tweets
  }
}
