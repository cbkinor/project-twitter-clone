import { tweets } from './tweets.component'
import { configure } from './tweets.config'

export default
  angular
    .module('twitter-tweets', [])
    .component('twitterTweets', tweets)
    .config(configure)
    .name
