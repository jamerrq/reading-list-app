type HandleClick = (event: React.MouseEvent<HTMLDivElement>) => void

interface Root {
  library: Library[]
}

interface Library {
  book: Book
}

interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

interface Author {
  name: string
  otherBooks: string[]
}

interface Bookmarks {
  bookmarks: Array<Book['ISBN']>
}

interface Action {
  type: string
  payload: string
}

interface BookmarksContext {
  state: Array<Book['ISBN']>
  addBookmark: (ISBN: string) => void
  removeBookmark: (ISBN: string) => void
  clearBookmarks: () => void
  isBookmarked: (ISBN: string) => boolean
  setBookmarks: (bookmarks: string) => void
}
