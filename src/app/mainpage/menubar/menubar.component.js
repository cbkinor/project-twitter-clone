import templateUrl from './menubar.component.html'

/* @ngInject */
class MenubarController {
  constructor ($log) {
    $log.debug('menuBar instantiated')

    this.searchFabIsOpen = false
  }
}

export const menubar = {
  templateUrl,
  controller: MenubarController,
  controllerAs: '$menubar'
}
