export class StateService {

  /* @ngInject */
  constructor ($log, $state) {
    this.$log = $log
    this.$state = $state
    this.$log.debug('StateService instantiated')

    this.state = {
      'login': () => { this.loadState('login', 'login') },
      'home': () => { this.loadState('mainpage.page.home', 'home', 'feed') },
      'profile': () => { this.loadState('mainpage.page.profile', 'profile', 'tweets') },
      'edit': () => { this.loadState('mainpage.edit', 'edit') },
      'search': () => { this.loadState('mainpage.search') }
    }
  }

  loadState (name, componentName, tabName) {
    this.$state.go(name)
    this.currentState = componentName
    this.currentTab = tabName
  }
}
