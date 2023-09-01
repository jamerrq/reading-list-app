'use client'
import Image from 'next/image'
import { createElement, useEffect, useState } from 'react'

import data from '@/app/data/books.json'
import { Button } from '@nextui-org/react'
import {
  IconBookmarksFilled, IconBookmarksOff, IconChevronCompactLeft, IconChevronCompactRight
} from '@tabler/icons-react'

import { useBookmarks } from '@/app/hooks/useBookmarks'

export function onReadListChange (callback: (readList: Array<Book['ISBN']>) => void): () => void {
  function setReadList (): void {
    const readList = JSON.parse(globalThis.localStorage.getItem('bookmarks') ?? '[]')
    callback(readList)
  }
  window.addEventListener('storage', setReadList)
  setReadList()

  return () => {
    window.removeEventListener('storage', setReadList)
  }
}

export default function ReadingList (): JSX.Element | null {
  const [mounted, setMounted] = useState(false)
  const [hiddenState, setHidden] = useState(true)
  const {
    state: bookmarks,
    addBookmark,
    removeBookmark,
    // clearBookmarks,
    isBookmarked
  } = useBookmarks()

  useEffect(() => {
    setMounted(true)
  }, [])

  const addOrRemoveBookmark = (bookISBN: Book['ISBN']): void => {
    if (isBookmarked(bookISBN)) {
      removeBookmark(bookISBN)
    } else {
      addBookmark(bookISBN)
    }
  }

  const closeOpenIcon = hiddenState ? IconChevronCompactRight : IconChevronCompactLeft

  if (!mounted) return null

  return (
    <div className="flex flex-row fixed z-50">
      <main className="flex flex-col gap-2 bg-blue-200 p-2 rounded-r-sm h-screen overflow-scroll w-fit ease-in-out transition-all duration-300 " id="reading-list-container"
        style={{
          display: hiddenState ? 'none' : 'flex'
        }}>
        <h3 className="text-bold text-black self-center">
          Favoritos <IconBookmarksFilled size={22} className="inline" />
        </h3>
        <hr className="bg-black" />
        {bookmarks.map((isbn: string) => {
          const book = data.library.find(({ book }: { book: Book }) => book.ISBN === isbn)?.book
          if (book === null || book === undefined) return null
          return (
            <div key={isbn} className="relative [&>button]:hidden [&>button]:hover:flex group">
              <Button
                className="absolute brightness-100 top-[70%] left-[30%] text-white py-1 px-0 w-fit h-fit rounded z-10 group-hover:brightness-80"
                isIconOnly

                style={{
                  backgroundColor: '#ff0000'
                }}
                onClick={() => { addOrRemoveBookmark(book.ISBN) }}
              >
                <IconBookmarksOff size={20} />
              </Button>
              <Image
                src={book.cover} key={book.ISBN} alt=""
                width={100} height={150}
                style={{
                  objectFit: 'cover',
                  boxShadow: '0 0 10px 0 #00000088'
                }}
                className="rounded-md group-hover:brightness-50"
              />
            </div>
          )
        })}
      </main>
      <button className="bg-slate-400 w-4 flex items-center min-h-screen justify-center h-full rounded-r-md"
        onClick={() => { setHidden(!hiddenState) }}>
        {
          createElement(closeOpenIcon, {
            size: 30
          })
        }
      </button>
    </div>
  )
}
