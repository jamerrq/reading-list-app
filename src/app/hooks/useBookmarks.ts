import { useContext } from 'react'
import { BookmarksContext } from '../context/bookmarks'

export function useBookmarks (): BookmarksContext {
  const context = useContext(BookmarksContext)

  if (context === undefined || context === null) {
    throw new Error('useBookmarks must be used within a BookmarksProvider')
  }

  return context
}
