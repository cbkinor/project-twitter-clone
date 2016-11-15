import { mainpage, edit, page } from './mainpage.states'

/* @ngInject */
export function configure ($stateProvider) {
  $stateProvider
    .state(mainpage)
    .state(edit)
    .state(page)
}
