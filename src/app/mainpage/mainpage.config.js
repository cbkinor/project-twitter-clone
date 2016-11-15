import { mainpage, edit, hashtag } from './mainpage.states'

/* @ngInject */
export function configure ($stateProvider) {
  $stateProvider
    .state(mainpage)
    .state(edit)
    .state(hashtag)
}
