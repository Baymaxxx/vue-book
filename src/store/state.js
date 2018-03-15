// import { playMode } from '~/js/config'
import {
  loadSearch,
  loadPlay,
  loadUserSex,
  loadBookList,
  loadCurBook
} from '~/js/cache'

const state = {
  userSex: loadUserSex(),
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  shelfBookList: loadBookList(), // 书架书籍对象数
  curBook: loadCurBook() // 当前打开图书
}

export default state
