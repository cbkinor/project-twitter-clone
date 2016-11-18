export const mainpage = {
  name: 'mainpage',
  url: '/main',
  component: 'mainpage'
}

export const edit = {
  name: 'mainpage.edit',
  url: '/edit',
  component: 'edit'
}

export const page = {
  name: 'mainpage.page',
  url: '/page',
  component: 'page'
}

export const search = {
  name: 'mainpage.search',
  url: '/search',
  component: 'search',
  onExit: ($searchService) => {
    'ngInject'
    $searchService.inputText = ''
  }
}
