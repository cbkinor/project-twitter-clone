import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import twitterPage from './mainpage/page/page.module'
import twitterLogin from './login/login.module'
import mainpage from './mainpage/mainpage.module'

import { app } from './app.component'
import { configure } from './app.config'
import { visualizeRouting } from './app.run'

export default
  angular
    .module('twitter-app', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      uiRouter,
      twitterLogin,
      twitterPage,
      mainpage

    ])
    .component('app', app)
    .config(configure)
    .run(visualizeRouting)
    .name
