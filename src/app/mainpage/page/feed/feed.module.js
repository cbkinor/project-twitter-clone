import { feed } from './feed.component'
import { configure } from './feed.config'

export default
  angular
    .module('twitter-feed', [])
    .component('twitterFeed', feed)
    .config(configure)
    .name
