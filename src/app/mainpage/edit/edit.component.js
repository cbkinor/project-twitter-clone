import templateUrl from './edit.component.html'

/* @ngInject */
class EditController {
  constructor ($log, $authenticateService) {
    this.$authenticateService = $authenticateService
    $log.debug('EditController instantiated')
    $authenticateService.authenticate('edit')

  }

  update () {
    this.$authenticateService.update()
  }

  delete () {
    this.$authenticateService.delete()
  }
}

export const edit = {
  templateUrl,
  controller: EditController,
  controllerAs: '$edit'
}
