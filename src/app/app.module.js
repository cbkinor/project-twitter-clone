import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import twitterTweets from './main-page/page/tweets/tweets.module'
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
      twitterTweets,
      mainpage

    ])
    .component('app', app)
    .config(configure)
    .run(visualizeRouting)
    .name
