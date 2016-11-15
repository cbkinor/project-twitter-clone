import { feed } from './feed.states'

/* @ngInject */
export function configure ($stateProvider) {
  $stateProvider
    .state(feed)
}
