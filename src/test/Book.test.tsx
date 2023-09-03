import { render } from '@testing-library/react'
import Book from '../app/components/book'
import { test, expect } from 'vitest'
import data from '../app/data/books.json'

const book = data.library[0].book
test('Book', () => {
  const { container } = render(<Book book={book} />)
  expect(container).toMatchSnapshot()
})
