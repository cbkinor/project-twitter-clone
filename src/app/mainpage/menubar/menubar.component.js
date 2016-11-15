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

    this.logout = () => {
      this.$authenticate.logout()
    }

    this.editProfile = () => {
      this.$state.go('mainpage.edit')
    }
  }
}

export const menubar = {
  templateUrl,
  controller: MenubarController,
  controllerAs: '$menubar'
}
