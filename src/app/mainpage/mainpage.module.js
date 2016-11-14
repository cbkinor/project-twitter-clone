import { login } from './main_page.component'
import { configure } from './main_page.config'

export default
  angular
    .module('twitter-mainpage', [])
    .component('mainpage', login)
    .config(configure)
    .name
