'use client'

import { useReducer, createContext } from 'react'
import { bookmarksReducer } from '../reducers/bookmark'

// const bookmarksInitialState =
// JSON.parse(globalThis.localStorage.getItem('bookmarks') ?? '[]')
const bookmarksInitialState: string[] = []

export const BookmarksContext = createContext({
  state: bookmarksInitialState,
  addBookmark: (bookmark: string): void => { },
  removeBookmark: (bookmark: string): void => { },
  clearBookmarks: (): void => { },
  isBookmarked: (bookmark: string): boolean => false,
  setBookmarks: (bookmarks: string): void => { }
})

function useBookmarks (): BookmarksContext {
  const [state, dispatch] = useReducer(bookmarksReducer, bookmarksInitialState)

  const onStorageChange = (e: StorageEvent): void => {
    const { key, newValue } = e
    if (key === 'bookmarks' && newValue !== null) {
      dispatch({ type: 'SET_BOOKMARKS', payload: newValue })
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', onStorageChange)
  }

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

  const setBookmarks = (bookmarks: string): void => {
    dispatch({ type: 'SET_BOOKMARKS', payload: bookmarks })
  }

  return {
    state,
    addBookmark,
    removeBookmark,
    clearBookmarks,
    isBookmarked,
    setBookmarks
  }
}

export function BookmarksProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const {
    state,
    addBookmark,
    removeBookmark,
    clearBookmarks,
    isBookmarked,
    setBookmarks
  } = useBookmarks()

  return (
    <BookmarksContext.Provider value={{
      state,
      addBookmark,
      removeBookmark,
      clearBookmarks,
      isBookmarked,
      setBookmarks
    }}
    >
      {children}
    </BookmarksContext.Provider>
  )
}
