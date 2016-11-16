import templateUrl from './menubar.component.html'

/* @ngInject */
class MenubarController {
  constructor ($log, $state, $authenticate, $searchService, $mdDialog, $tweetService) {
    $log.debug('menuBar instantiated')

    this.$searchService = $searchService
    this.$authenticate = $authenticate
    this.$state = $state
    this.$tweetService = $tweetService

    this.openMenu = function ($mdOpenMenu, ev) {
      this.originatorEv = ev
      $mdOpenMenu(ev)
    }

    this.home = () => {
      this.$state.go('mainpage.page')
    }

    this.editProfile = () => {
      this.$state.go('mainpage.edit')
    }

    this.search = () => {
      this.$searchService.search()
      this.$state.go('mainpage.search')
    }

    this.logout = () => {
      this.$authenticate.logout()
    }

    this.setTweetElement = ($event) => {
      this.tweetElement = $event.target
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
        })
    }
  }
}

export const menubar = {
  templateUrl,
  controller: MenubarController,
  controllerAs: '$menubar'
}
