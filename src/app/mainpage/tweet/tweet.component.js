import templateUrl from './tweet.component.html'

/* @ngInject */
class TweetController {
  constructor ($log, $scope, $searchService, $profileService, $authenticateService, $tweetService, $stateService) {
    this.$log = $log
    this.$scope = $scope
    this.$searchService = $searchService
    this.$profileService = $profileService
    this.$stateService = $stateService
    this.$authenticateService = $authenticateService
    this.$tweetService = $tweetService
    this.$scope.goToProfile = $profileService.goToProfile
    this.$scope.search = this.search
    $log.debug('TweetController instantiated')
  }

  search = (searchText) => {
    this.$searchService.inputText = searchText
    this.$searchService.search()
    this.$stateService.state['search']()
  }
}
export const tweet = {
  templateUrl,
  controller: TweetController,
  controllerAs: '$tweet',
  bindings: {
    tweet: '='
  }
}
