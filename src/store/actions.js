import * as types from './mutation-types'
// import {playMode} from '~/js/config'
import {
  delPlay,
  saveFavorite,
  changeUserSexCa,
  setcurBook,
  addshelfBookListCa
} from '~/js/cache'

export const delPlayHistory = ({ commit }, song) => {
  commit(types.SET_SHELFBOOK_LIST, delPlay(song))
}

export const changeUserSex = ({ commit }, usersex) => {
  commit(types.SET_USER_SEX, changeUserSexCa(usersex))
}

export const saveshelfBookList = ({ commit }, song) => {
  commit(types.SET_SHELFBOOK_LIST, saveFavorite(song))
}

export const addshelfBookList = ({ commit }, book) => {
  commit(types.SET_SHELFBOOK_LIST, addshelfBookListCa(book))
}

export const setCurBook = ({ commit }, book) => {
  commit(types.SET_CUR_BOOK, setcurBook(book))
}
