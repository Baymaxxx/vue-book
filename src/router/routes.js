import Hello from '@/components/Hello'
import BookShelf from '@/components/book-shelf/book-shelf'
import BookFeature from '@/components/book-feature/book-feature'
import BookCategory from '@/components/book-category/book-category'
import BookRank from '@/components/book-rank/book-rank'
import ReadMore from '@/components/book-feature/read-more'
import Search from '@/components/book-search/book-search'
import SearchModule from '@/components/book-search/search-module'
import SearchResult from '@/components/book-search/search-result'
import BookDetail from '@/components/book-detail/book-detail'
import BookReading from '@/components/book-reading/reading'

export default [
  {
    path: '/',
    component: Hello,
    children: [{
      path: '/',
      redirect: '/shelf'
    }, {
      path: '/shelf',
      name: 'BookShelf',
      component: BookShelf
    }, {
      path: '/feature',
      name: 'BookFeature',
      component: BookFeature
    }, {
      path: '/category',
      name: 'BookCategory',
      component: BookCategory
    }, {
      path: '/rank',
      name: 'BookRank',
      component: BookRank
    }]
  },
  {
    path: '/feature/hot',
    name: 'Hot',
    component: ReadMore
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    children: [{
      path: '/',
      redirect: '/search/index'
    }, {
      path: '/search/index',
      name: 'SearchModule',
      component: SearchModule
    }, {
      path: '/search/result',
      name: 'SearchResult',
      component: SearchResult
    }]
  }, {
    path: '/book-detail/:id',
    name: 'BookDetail',
    component: BookDetail
  }, {
    path: '/book-reading',
    name: 'BookReading',
    component: BookReading
  }
]
