export class CurrentStateService {

  /* @ngInject */
  constructor ($log) {
    this.$log = $log
    this.$currentTab = 'Feed'
    this.$log.debug('StateService instantiated')
  }

  manditoryMethodForngInject () {
    return null
  }

}
