import { login } from './mainpage.component'
import { configure } from './mainpage.config'
import { menubar } from './menubar/menubar.component'
import { edit } from './edit/edit.component'

export default
  angular
    .module('twitter-mainpage', [])
    .component('mainpage', login)
    .component('menubar', menubar)
    .component('edit', edit)
    .component('hashtag', hashtag)
    .config(configure)
    .name
