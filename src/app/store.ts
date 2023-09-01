import { create } from 'zustand'

function getReadList (): string[] {
  const readList = globalThis.localStorage.getItem('bookmarks') ?? '[]'
  return JSON.parse(readList)
}

function updateReadList (readList: string[]): void {
  globalThis.localStorage.setItem('bookmarks', JSON.stringify(readList))
}

export const useBookmarksStore = create((set) => ({
  bookmarks: getReadList(),
  addBookmark: (ISBN: string) => {
    set((state: Bookmarks) => {
      const bookmarks = [...state.bookmarks, ISBN]
      updateReadList(bookmarks)
      return { bookmarks }
    })
  },
  removeBookmark: (ISBN: string) => {
    set((state: Bookmarks) => {
      const bookmarks = state.bookmarks.filter((bookmark) => bookmark !== ISBN)
      updateReadList(bookmarks)
      return { bookmarks }
    })
  },
  clearBookmarks: () => {
    set((state: Bookmarks) => {
      const bookmarks = [] as string[]
      updateReadList(bookmarks)
      return { bookmarks }
    })
  }
}))
