import * as types from './mutation-types'
import storage from 'good-storage'

const mutations = {
  [types.SET_SEARCH_HISTORY](state, history) {
    state.searchHistory = history
  },
  [types.SET_PLAY_HISTORY](state, history) {
    state.history = history
  },
  [types.SET_USER_SEX](state, usersex) {
    state.userSex = usersex
  },
  [types.SET_SHELFBOOK_LIST](state, list) {
    state.shelfBookList = list
  },
  [types.ADD_TO_SHELF](state, book) {
    state.shelfBookList = book
  },
  [types.SET_CUR_BOOK](state, book) {
    state.curBook = book
    if (state.curBook.isInShelf) {
      for (let [idx, shelfBook] of Object.entries(state.shelfBookList)) {
        if (shelfBook.id === state.curBook.id) {
          state.shelfBookList.splice(idx, 1, state.curBook)
          storage.set('SHEFLBOOK', state.shelfBookList)
          break
        }
      }
    }
  }
}

export default mutations
