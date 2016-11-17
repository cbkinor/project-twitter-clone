export class TweetService {

  /* @ngInject */
  constructor ($http, $authenticate, $homeService) {
    this.$http = $http
    this.$authenticate = $authenticate
    this.$homeService = $homeService
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
    })
  }
}
