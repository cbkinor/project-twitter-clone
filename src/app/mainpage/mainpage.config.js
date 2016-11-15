import { mainpage, edit } from './mainpage.states'

/* @ngInject */
export function configure ($stateProvider) {
  $stateProvider
    .state(mainpage)
    .state(edit)
}
