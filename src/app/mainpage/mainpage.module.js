import { login } from './mainpage.component'
import { configure } from './mainpage.config'
import { menubar } from './menubar/menubar.component'

export default
  angular
    .module('twitter-mainpage', [])
    .component('mainpage', login)
    .component('menubar', menubar)
    .config(configure)
    .name
