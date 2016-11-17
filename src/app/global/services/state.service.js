export class StateService {

  /* @ngInject */
  constructor ($log, $state) {

    this.$log = $log
    this.$state = $state
    this.$log.debug('StateService instantiated')

    this.state = {

      'login': () => {
        this.$state.go('login')
        this.currentState = 'login'
      },

      'home': () => {
        this.$state.go('mainpage.page.home')
        this.currentState = 'home'
        this.currentTab = 'feed'
      },

      'profile': () => {
        this.$state.go('mainpage.page.profile')
        this.currentState = 'profile'
        this.currentTab = 'tweets'
      },

      'edit': () => {
        this.$state.go('mainpage.edit')
        this.currentState = 'edit'
      },

      'search': () => {
        this.$state.go('mainpage.search')
        this.currentState = 'search'
      }
    }
  }

  ngInjectMandatoryMethod () {
    return
  }
}
