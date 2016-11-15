import { mainpage } from './mainpage.component'
import { configure } from './mainpage.config'
import { menubar } from './menubar/menubar.component'
import { page } from './page/page.component'
import { edit } from './edit/edit.component'
import { search } from './search/search.component'

export default
  angular
    .module('twitter-mainpage', [])
    .component('mainpage', mainpage)
    .component('menubar', menubar)
    .component('page', page)
    .component('edit', edit)
    .component('search', search)
    .config(configure)
    .name
