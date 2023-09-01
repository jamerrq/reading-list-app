export const bookmarksInitialState = JSON.parse(localStorage.getItem('bookmarks') ?? '[]')

export const BOOKMARKS_ACTIONS_TYPES = {
  ADD_BOOKMARK: 'ADD_BOOKMARK',
  REMOVE_BOOKMARK: 'REMOVE_BOOKMARK',
  CLEAR_BOOKMARKS: 'CLEAR_BOOKMARKS'
}

export const updateLocalStorage = (bookmarks: string[]): void => {
  globalThis.localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

export function bookmarksReducer (state: string[], action: Action): string[] {
  switch (action.type) {
    case BOOKMARKS_ACTIONS_TYPES.ADD_BOOKMARK: {
      const addBookmarks = [...state, action.payload]
      updateLocalStorage(addBookmarks)
      return addBookmarks
    }
    case BOOKMARKS_ACTIONS_TYPES.REMOVE_BOOKMARK: {
      const removeBookmarks = state.filter((bookmark) =>
        bookmark !== action.payload)
      updateLocalStorage(removeBookmarks)
      return removeBookmarks
    }
    case BOOKMARKS_ACTIONS_TYPES.CLEAR_BOOKMARKS: {
      const clearBookmarks = [] as string[]
      updateLocalStorage(clearBookmarks)
      return clearBookmarks
    }
    default:
      return state
  }
}
