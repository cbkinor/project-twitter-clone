import { page } from './page.component'
import { configure } from './page.config'
import { follow } from './follow/follow.component'

export default
  angular
    .module('twitter-page', [])
    .component('page', page)
    .component('follow', follow)
    .config(configure)
    .name
