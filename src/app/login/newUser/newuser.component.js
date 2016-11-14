import templateUrl from './newuser.component.html'

/* @ngInject */
class NewUserController {
  constructor ($log) {
    $log.debug('NewUserController instantiated')
  }
}

export const newuser = {
  templateUrl,
  controller: NewUserController,
  controllerAs: '$newuser'
}
