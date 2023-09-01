import data from '../data/books.json'
import Book from './book'

export default function BookList (): JSX.Element {
  return (
    <>
      <hr />
      <ul className="grid grid-cols-3 gap-5 md:grid-cols-4">
        {data.library.map(({ book }) => (
          <Book key={book.ISBN} book={book} />
        ))}
      </ul>
    </>
  )
}
