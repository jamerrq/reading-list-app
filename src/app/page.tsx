'use client'

// Components
import BookList from '@/app/components/book-list'
// import ReadingList from '@/app/components/reading-list'

export default function Home (): JSX.Element {
  return (
    <div>
      {/* <ReadingList /> */}
      <main className="flex min-h-screen flex-col items-center gap-3 flex-nowrap p-10 select-none ">
        <h1 className="text-4xl font-bold text-center">
          Lista de lectura
        </h1>
        <span className="justify text-sm max-w-md">
          Somos un sello editorial de libros multinacional. Queremos ofrecer
          a nuestro público una forma de ver nuestro catálogo y poder guardar
          los libros que les interesan en una lista de lectura.
        </span>
        <BookList />
      </main>
    </div>
  )
}
