import { tweets } from './tweets.states'

/* @ngInject */
export function configure ($stateProvider) {
  $stateProvider
    .state(tweets)
}
