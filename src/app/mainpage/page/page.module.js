import { page } from './page.component'
import { follow } from './follow/follow.component'
// import { FollowService } from './follow/follow.service'
import { configure } from './page.config'
import { feed } from './feed/feed.component'
// import { FeedService } from './feed/feed.service'
import { tweet } from './tweet/tweet.component'
// import { TweetService } from './tweet/tweet.service'

export default
  angular
    .module('twitter-page', [])
    .component('page', page)
    .component('follow', follow)
    // .service('$follow', FollowService)
    .component('feed', feed)
    // .service('$feed', FeedService)
    .component('tweet', tweet)
    // .service('$tweet', TweetService)
    .config(configure)
    .name
