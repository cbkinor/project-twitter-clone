export class StateService {

  /* @ngInject */
  constructor ($log, $state) {
    this.$log = $log
    this.$state = $state
    this.$log.debug('StateService instantiated')

    this.state = {
      'login': (refresh) => { this.loadState(refresh, 'login', 'login') },
      'home': (refresh) => { this.loadState(refresh, 'mainpage.page.home', 'home', 'feed') },
      'profile': (refresh) => { this.loadState(refresh, 'mainpage.page.profile', 'profile', 'tweets') },
      'edit': (refresh) => { this.loadState(refresh, 'mainpage.edit', 'edit') },
      'search': (refresh) => { this.loadState(refresh, 'mainpage.search') }
    }
  }

  loadState (refresh, name, componentName, tabName) {
    this.$state.go(name, {}, {reload: refresh, inherit: false, notify: true})
    this.currentState = componentName
    this.currentTab = tabName
  }
}
