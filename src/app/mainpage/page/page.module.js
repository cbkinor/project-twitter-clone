import { page } from './page.component'
import { follow } from './follow/follow.component'
import { FollowService } from './follow/follow.service'
import { configure } from './page.config'
import { feed } from './feed/feed.component'
import { tweet } from './tweet/tweet.component'

export default
  angular
    .module('twitter-page', [])
    .component('page', page)
    .component('follow', follow)
    .service('$followservice', FollowService)
    .component('home', feed)
    .component('profile', tweet)
    .config(configure)
    .name
