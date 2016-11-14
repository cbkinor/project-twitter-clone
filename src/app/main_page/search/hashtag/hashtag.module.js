import { hashtag } from './hashtag.component'
import { configure } from './hashtag.config'

export default
  angular
    .module('search-hashtag', [])
    .component('searchHashtag', hashtag)
    .config(configure)
    .name
