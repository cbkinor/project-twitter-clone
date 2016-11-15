import { login } from './login.component'
import { configure } from './login.config'

import { current } from './current/current.component'
import { newuser } from './newUser/newuser.component'

import { AuthenticateService } from './../global/auth.service.js'

export default
  angular
    .module('twitter-login', [])
    .component('twitterLogin', login)
    .component('current', current)
    .component('newuser', newuser)
    .service('$authenticate', AuthenticateService)
    .config(configure)
    .name
