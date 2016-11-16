import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'
import ngCookies from 'angular-cookies'
import twitterLogin from './login/login.module'
import mainpage from './mainpage/mainpage.module'
import { SearchService } from './global/services/search.service.js'
import { TweetService } from './global/services/tweet.service.js'
import { ProfileService } from './global/services/profile.service.js'
import { HomeService } from './global/services/home.service.js'
import { CurrentStateService } from './global/services/currentState.service.js'
import { app } from './app.component'
import { configure } from './app.config'
import { visualizeRouting } from './app.run'
import { AuthenticateService } from './global/services/auth.service.js'

export default
  angular
    .module('twitter-app', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      uiRouter,
      ngCookies,
      twitterLogin,
      mainpage

    ])
    .component('app', app)
    .service('$authenticate', AuthenticateService)
    .service('$searchService', SearchService)
    .service('$tweetService', TweetService)
    .service('$profileService', ProfileService)
    .service('$homeService', HomeService)
    .service('$currentStateService', CurrentStateService)
    .config(configure)
    .run(visualizeRouting)
    .name
