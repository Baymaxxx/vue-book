import storage from 'good-storage'

export function loadSearch() {
  return storage.get('SEARCH_KEY', [])
}

export function loadPlay() {
  return storage.get('PLAY_KEY', [])
}

export function loadUserSex() {
  return storage.get('USER_SEX', 'man')
}

export function changeUserSexCa(usersex) {
  storage.set('USER_SEX', usersex)
  return usersex
}

export function savePlay(song) {
  return storage.set('PLAY_KEY', song)
}

export function delPlay(song) {
  return storage.remove('PLAY_KEY', [])
}

export function loadBookList() {
  return storage.get('SHELFBOOK_LIST', [])
}

export function saveFavorite(song) {
  return storage.set('FAVORITE_KEY', song)
}

export function deleteFavorite() {
  return storage.remove('FAVORITE_KEY', [])
}

export function setcurBook(book) {
  return storage.set('CUR_BOOK', book)
}

export function loadCurBook() {
  return storage.get('CUR_BOOK', null)
}

export function addshelfBookList(book) {
  let shelfBookList = [...new Set([book, ...storage.get('SHELFBOOK_LIST')])]
  return storage.set('SHELFBOOK_LIST', shelfBookList)
}
