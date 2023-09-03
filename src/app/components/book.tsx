'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
// import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { IconBookmarks, IconBookmarksOff, IconInfoSquareRoundedFilled } from '@tabler/icons-react'
import { useBookmarks } from '../hooks/useBookmarks'

export default function Book ({
  book
}: {
  book: Book
}): JSX.Element {
  const { theme } = useTheme()

  const {
    // state: bookmarks,
    addBookmark,
    removeBookmark,
    // clearBookmarks,
    isBookmarked
  } = useBookmarks()

  function addOrRemoveBookmark (bookISBN: Book['ISBN']): void {
    if (isBookmarked(bookISBN)) {
      removeBookmark(bookISBN)
    } else {
      addBookmark(bookISBN)
    }
  }

  return (
    <div
      key={book.ISBN}
      className="flex flex-col items-center gap-3 p-2 shadow-md ease-in-out hover:scale-105 hover:ease-in-out transition-all duration-300 rounded-md border-2 relative [&>button]:hidden [&>button]:hover:inline [&>a]:hidden [&>a]:hover:inline [&>img]:hover:brightness-50 cursor-pointer select-none group"
      style={{
        boxShadow: `0 0 10px 0 ${isBookmarked(book.ISBN)
          ? '#b29700'
          : theme === 'dark' ? '#ffffff66' : '#00000088'}`,
        border: `2px solid ${isBookmarked(book.ISBN)
          ? '#b29700'
          : theme === 'dark' ? '#ffffff66' : '#00000088'}`
      }}
    >
      <Button
        className="absolute top-[15%] text-white px-2 rounded z-10"
        isIconOnly
        onClick={() => { addOrRemoveBookmark(book.ISBN) }}
        style={
          {
            backgroundColor: isBookmarked(book.ISBN) ? '#ff0000' : '#3B82F6'
          }
        }
        title={isBookmarked(book.ISBN) ? 'Remover de lista de lectura' : 'Agregar a lista de lectura'}
      >
        {!isBookmarked(book.ISBN) ? <IconBookmarks /> : <IconBookmarksOff />}
      </Button>
      <Link href={`/book/${book.ISBN}`} className="absolute top-[45%]">
        <Button
          className="bg-blue-500 text-white px-2 rounded z-10"
          isIconOnly
          title="Ver detalles"
        >
          <IconInfoSquareRoundedFilled />
        </Button>
      </Link>
      <Image src={book.cover} key={book.ISBN}
        alt="" width={100} height={300}
        style={{
          objectFit: 'cover',
          borderRadius: '5px'
        }}
      />
      <span className="text-sm font-semibold">{book.title}</span>
    </div >
  )
}
