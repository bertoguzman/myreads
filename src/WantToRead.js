import React from 'react'
import Book from './Book'


class WantToRead extends React.Component {

  render() {
    const { booksOnThisShelf, changeShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnThisShelf.map((book) => (
              <li key={book.id}>
                <Book
                  changeShelf={changeShelf}
                  thisBook={book}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
