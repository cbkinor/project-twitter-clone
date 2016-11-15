import { tweet } from './tweet.component'
import { configure } from './tweet.config'

export default
  angular
    .module('twitter-tweet', [])
    .component('twitterTweet', tweet)
    .config(configure)
    .name
