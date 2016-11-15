export class SearchService {

  /* @ngInject */
  constructor ($log, $http, $state, $cookies) {
    this.$log = $log
    this.$http = $http
    this.$state = $state
    this.$cookies = $cookies
    $log.debug('SearchService created')
  }

  SearchByMention (mentioned) {
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/users/@' + mentioned + '/mentions'
    }).then(
      (response) => {
        this.data = response.data
      },
    )
  }
}
