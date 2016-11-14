import { login } from './login.component'
import { configure } from './login.config'

export default
  angular
    .module('twitter-login', [])
    .component('twitterLogin', login)
    .config(configure)
    .name
