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
  console.log(storage.get('SHELFBOOK_LIST', []))
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

export function addshelfBookListCa(book) {
  let isExist = false
  let shelfBookList = loadBookList()
  for (let shelfBook of Object.values(shelfBookList)) {
    console.log(shelfBook._id, book._id)
    if (shelfBook._id === book._id) {
      isExist = true
      break
    }
  }
  if (!isExist) {
    shelfBookList.push(book)
    return storage.set('SHELFBOOK_LIST', shelfBookList)
  }
}

export function delshelfBookListCa(book) {
  let shelfBookList = loadBookList()
  shelfBookList = shelfBookList.splice(shelfBookList.find(book), 1)
  return storage.set('SHELFBOOK_LIST', shelfBookList)
}
