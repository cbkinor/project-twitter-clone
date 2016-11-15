import { login } from './mainpage.component'
import { configure } from './mainpage.config'
import { menubar } from './menubar/menubar.component'
import { page } from './page/page.component'

export default
  angular
    .module('twitter-mainpage', [])
    .component('mainpage', login)
    .component('menubar', menubar)
    .component('page', page)
    .config(configure)
    .name
