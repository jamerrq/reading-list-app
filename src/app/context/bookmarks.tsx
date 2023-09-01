import { useReducer, createContext } from 'react'
import { bookmarksReducer, bookmarksInitialState } from '../reducers/bookmark'

export const BookmarksContext = createContext({
  state: bookmarksInitialState,
  addBookmark: (bookmark: string): void => { },
  removeBookmark: (bookmark: string): void => { },
  clearBookmarks: (): void => { },
  isBookmarked: (bookmark: string): boolean => false
})

function useBookmarks (): BookmarksContext {
  const [state, dispatch] = useReducer(bookmarksReducer, bookmarksInitialState)

  const addBookmark = (bookmark: string): void => {
    dispatch({ type: 'ADD_BOOKMARK', payload: bookmark })
  }

  const removeBookmark = (bookmark: string): void => {
    dispatch({ type: 'REMOVE_BOOKMARK', payload: bookmark })
  }

  const clearBookmarks = (): void => {
    dispatch({ type: 'CLEAR_BOOKMARKS', payload: '' })
  }

  const isBookmarked = (bookmark: string): boolean => {
    return state.includes(bookmark)
  }

  return {
    state,
    addBookmark,
    removeBookmark,
    clearBookmarks,
    isBookmarked
  }
}

export function BookmarksProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const {
    state,
    addBookmark,
    removeBookmark,
    clearBookmarks,
    isBookmarked
  } = useBookmarks()

  return (
    <BookmarksContext.Provider value={{
      state,
      addBookmark,
      removeBookmark,
      clearBookmarks,
      isBookmarked
    }}
    >
      {children}
    </BookmarksContext.Provider>
  )
}
