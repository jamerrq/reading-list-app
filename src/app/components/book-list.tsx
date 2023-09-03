'use client'

import data from '../data/books.json'
import Book from './book'

import { useState } from 'react'

export default function BookList (): JSX.Element {
  const [genre, setGenre] = useState<string>('all')
  const genresSet = new Set(data.library.map(({ book }) => book.genre))

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setGenre(e.target.value)
  }

  return (
    <>
      <select name="genre" id="genre" className="rounded-sm p-1" value={genre} onChange={handleGenreChange}>
        <option value="all">Todos</option>
        {
          Array.from(genresSet).map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))
        }
      </select>
      <hr />
      <ul className="grid grid-cols-3 gap-5 md:grid-cols-4">
        {
          data.library.filter(({ book }) => genre === 'all' || book.genre === genre).map(({ book }) => (
            <Book key={book.ISBN} book={book} />
          ))
        }
      </ul>
    </>
  )
}
