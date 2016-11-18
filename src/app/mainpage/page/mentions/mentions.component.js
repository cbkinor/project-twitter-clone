import templateUrl from './mentions.component.html'

/* @ngInject */
class MentionsController {
  constructor ($log, $stateService, $searchService, $profileService, $scope, $tweetService) {
    this.$log = $log
    this.$scope = $scope
    this.$profileService = $profileService
    this.$searchService = $searchService
    this.$stateService = $stateService
    this.$scope.goToProfile = this.goToProfile
    this.$scope.search = this.search
    this.$tweetService = $tweetService
    $log.debug('MentionsController instantiated')
  }

  goToProfile = (name) => {
    this.$stateService.state['profile'](name)
    this.$profileService.refreshProfile(name)
  }

  search = (searchText) => {
    this.$searchService.inputText = searchText
    this.$searchService.search()
    this.$stateService.state['search']()
  }
}

export const mentions = {
  templateUrl,
  controller: MentionsController,
  controllerAs: '$mentions'
}
