export class TweetService {

  /* @ngInject */
  constructor ($http, $authenticate, $log, $homeService, $profileService, $mdDialog) {
    this.$log = $log
    this.$http = $http
    this.$authenticate = $authenticate
    this.$homeService = $homeService
    this.$profileService = $profileService
    this.$mdDialog = $mdDialog
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
    }).then((response) => {
      this.$homeService.refreshFeed(this.$authenticate.username)
      this.$profileService.refreshProfile(this.$profileService.username)
    })
  }
  showTweetPrompt ($event, id) {
    let confirm = this.$mdDialog.prompt()
      .title('Post a tweet!')
      .placeholder('Post content')
      .ariaLabel('Dog name')
      .initialValue('')
      .targetEvent($event)
      .ok('Post!')
      .cancel('Close')

    this.$mdDialog.show(confirm)
      .then((result) => {
        this.replyTweet(result, id)
      }, () => {
        console.log('tweet didn\'t have contents')
      })
  }
  replyTweet (content, id) {
    const tweet = {
      'content': content,
      'credentials': this.$authenticate.getCredentials()
    }

    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/tweets/' + id + '/reply',
      data: tweet
    }).then((response) => {
      this.$homeService.refreshFeed(this.$authenticate.username)
      this.$profileService.refreshProfile(this.$profileService.username)
    })
  }
  repostTweet (id) {
    this.$http({
      method: 'POST',
      url: 'http://localhost:8080/tweets/' + id + '/repost',
      data: this.$authenticate.getCredentials()
    }).then((response) => {
      this.$homeService.refreshFeed(this.$authenticate.username)
      this.$profileService.refreshProfile(this.$profileService.username)
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
            this.$log.debug(response)
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
            this.$log.debug(response)
          },
          (error) => {
            this.$log.debug('tweet not unliked')
          }
        )
  }

  checkAllTweetLikes (tweets) {
    tweets.forEach(tweet => {
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
