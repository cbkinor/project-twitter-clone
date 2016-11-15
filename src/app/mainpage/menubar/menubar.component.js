import templateUrl from './menubar.component.html'

/* @ngInject */
class MenubarController {
  constructor ($log, $state, $authenticate) {
    $log.debug('menuBar instantiated')

    this.$authenticate = $authenticate
    this.$state = $state

    let originatorEv

    this.openMenu = function ($mdOpenMenu, ev) {
      originatorEv = ev
      $mdOpenMenu(ev)
    }

    this.home = () => {
      this.$state.go('mainpage')
    }

    this.editProfile = () => {
      this.$state.go('mainpage.edit')
    }

    this.search = () => {
      this.$state.go('mainpage.search')
    }

    this.logout = () => {
      this.$authenticate.logout()
    }
  }
}

export const menubar = {
  templateUrl,
  controller: MenubarController,
  controllerAs: '$menubar'
}
