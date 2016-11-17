import templateUrl from './edit.component.html'

/* @ngInject */
class EditController {
  constructor ($log, $authenticate) {
    this.$authenticate = $authenticate
    $log.debug('EditController instantiated')

  }

  update () {
    this.$authenticate.update()
  }
}

export const edit = {
  templateUrl,
  controller: EditController,
  controllerAs: '$edit'
}
