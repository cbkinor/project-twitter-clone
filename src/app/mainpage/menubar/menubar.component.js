import templateUrl from './menubar.component.html'

/* @ngInject */
class MenubarController {
  constructor ($log, $state, $authenticate, $searchService, $mdDialog, $tweetService, $profileService, $stateService) {
    $log.debug('menuBar instantiated')

    this.$log = $log
    this.$searchService = $searchService
    this.$stateService = $stateService
    this.$authenticate = $authenticate
    this.$state = $state
    this.$tweetService = $tweetService
    this.$profileService = $profileService

    this.openMenu = function ($mdOpenMenu, ev) {
      this.originatorEv = ev
      $mdOpenMenu(ev)
    }

    this.home = () => {
      this.$stateService.state['home'](true)
    }

    this.editProfile = () => {
      this.$stateService.state['edit']()
    }

    this.search = () => {
      this.$searchService.search()
      this.$stateService.state['search']()
    }

    this.logout = () => {
      this.$authenticate.logout()
    }

    this.setTweetElement = ($event) => {
      this.tweetElement = $event.target
    }

    this.viewProfile = () => {
      this.$stateService.state['profile']()
    }

    this.showTweetPrompt = ($event) => {
      let confirm = $mdDialog.prompt()
        .title('Post a tweet!')
        .placeholder('Post content')
        .ariaLabel('Dog name')
        .initialValue('')
        .targetEvent($event)
        .ok('Post!')
        .cancel('Close')

      $mdDialog.show(confirm)
        .then((result) => {
          this.$tweetService.postTweet(result)
        }, () => {
          console.log('tweet didn\'t have contents')
        }).then(() => {
          this.$log.debug(this.$stateService.currentState)
          this.$stateService.state[this.$stateService.currentState](true)
        })
    }

    this.getUsername = () => {
      return this.$authenticate.username
    }

    this.mouseOnTweet = ($event) => {
      if ($event.target.id !== 'tweetIcon') {
        $event.target.setAttribute('stroke', 'rgba(231,236,238,.5)')
      }
    }

    this.mouseOffTweet = ($event) => {
      if ($event.target.id !== 'tweetIcon') {
        $event.target.setAttribute('stroke', 'white')
      }
    }
  }
}

export const menubar = {
  templateUrl,
  controller: MenubarController,
  controllerAs: '$menubar'
}
