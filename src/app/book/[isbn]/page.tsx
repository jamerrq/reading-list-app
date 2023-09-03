'use client'

import Link from 'next/link'
import Image from 'next/image'
import { IconArrowBackUp, IconBookmarks, IconBookmarksOff } from '@tabler/icons-react'
import data from '../../data/books.json'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useBookmarks } from '@/app/hooks/useBookmarks'

export default function BookPage ({
  params
}: { params: { isbn: string } }): JSX.Element | null {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const {
    addBookmark,
    removeBookmark,
    isBookmarked
  } = useBookmarks()

  const book = data.library.find(({ book }: { book: Book }) =>
    book.ISBN === params.isbn)?.book

  const addOrRemoveBookmark = (isbn: string): void => {
    if (isBookmarked(isbn)) {
      removeBookmark(isbn)
    } else {
      addBookmark(isbn)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (book === null || book === undefined) {
    return (
      <section className="p-10 flex items-center justify-center flex-col gap-1">
        <h1 className="text-4xl font-bold text-center">
          No se encontró el libro
        </h1>
        <Link href="/">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            <IconArrowBackUp />
          </button>
        </Link>
      </section>
    )
  }

  return (
    <section className="p-10 flex items-center justify-center flex-col gap-3">
      <h1 className="text-4xl font-bold text-center">
        {book.title}
      </h1>
      <Image
        src={book.cover} key={book.ISBN} alt=""
        width={200} height={300}
        style={{
          objectFit: 'cover',
          borderRadius: '5px',
          boxShadow: `0 0 10px ${theme === 'dark' ? '#ffffff66' : '#00000088'}`
        }} />
      <span className="self-start text-sm max-w-md">
        <strong>Resumen:</strong> {book.synopsis}
      </span>
      <span className="self-start text-sm max-w-md">
        <strong>ISBN:</strong> {book.ISBN}
      </span>
      <span className="self-start text-sm max-w-md">
        <strong>Autor:</strong> {book.author.name}
      </span>
      <span className="self-start text-sm max-w-md">
        <strong>Año:</strong> {book.year}
      </span>
      <span className="self-start text-sm max-w-md">
        <strong>Páginas:</strong> {book.pages}
      </span>
      <div className="flex flex-row gap-3">
        <Link href="/">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            title="Volver a la lista de libros"
          >
            <IconArrowBackUp />
          </button>
        </Link>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => { addOrRemoveBookmark(book.ISBN) }}
          style={
            {
              backgroundColor: isBookmarked(book.ISBN) ? '#ff0000' : '#3B82F6',
              height: 'fit-content'
            }
          }
          title={isBookmarked(book.ISBN) ? 'Remover de lista de lectura' : 'Agregar a lista de lectura'}
        >
          {!isBookmarked(book.ISBN) ? <IconBookmarks /> : <IconBookmarksOff />}
        </button>
      </div>
    </section>
  )
}
