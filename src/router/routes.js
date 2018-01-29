import Hello from '@/components/Hello'
import BookShelf from '@/components/book-shelf/book-shelf'
import BookFeature from '@/components/book-feature/book-feature'
import BookCategory from '@/components/book-category/book-category'
import BookRank from '@/components/book-rank/book-rank'
import ReadMore from '@/components/book-feature/read-more'

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
    name: 'hot',
    component: ReadMore
  }
]
