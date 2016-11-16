import { page } from './page.component'
import { follow } from './follow/follow.component'
import { FollowService } from './follow/follow.service'
import { configure } from './page.config'
import { feed } from './feed/feed.component'
import { FeedService } from './feed/feed.service'
import { tweet } from './tweet/tweet.component'

export default
  angular
    .module('twitter-page', [])
    .component('page', page)
    .component('follow', follow)
    .service('$followservice', FollowService)
    .component('feed', feed)
    .service('$feedService', FeedService)
    .component('tweet', tweet)
    .config(configure)
    .name
