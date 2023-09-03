'use client'

// Components
import BookList from './components/book-list'
// import ReadingList from '@/app/components/reading-list'
import { useEffect } from 'react'
import { useBookmarks } from './hooks/useBookmarks'

export default function Home (): JSX.Element {
  const { setBookmarks } = useBookmarks()

  const handleStorageChange = (event: StorageEvent): void => {
    if (event.key === 'bookmarks') {
      // El estado en localStorage ha cambiado, actualiza el estado local
      setBookmarks(event.newValue ?? '[]')
    }
  }

  useEffect(() => {
    const bookmarksInitialState = globalThis.localStorage.getItem('bookmarks') ?? '[]'
    setBookmarks(bookmarksInitialState)
    // Escucha los cambios en el almacenamiento local
    window.addEventListener('storage', handleStorageChange)
  }, [])

  return (
    <div>
      {/* <ReadingList /> */}
      <main className="flex min-h-screen flex-col items-center gap-3 flex-nowrap p-10 select-none ">
        <h1 className="text-4xl font-bold text-center">
          Libros Disponibles 📚
        </h1>
        {/* <span className="justify text-sm max-w-md">
          Somos un sello editorial de libros multinacional. Queremos ofrecer
          a nuestro público una forma de ver nuestro catálogo y poder guardar
          los libros que les interesan en una lista de lectura.
        </span> */}
        <BookList />
      </main>
    </div>
  )
}
