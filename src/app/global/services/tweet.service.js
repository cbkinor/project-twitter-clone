export class TweetService {

  /* @ngInject */
  constructor ($http, $authenticate) {
    this.$http = $http
    this.$authenticate = $authenticate
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
}
