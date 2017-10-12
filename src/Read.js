import React from 'react'
import Book from './Book'


class Read extends React.Component {

  render() {
    const { booksOnThisShelf, changeShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
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

export default Read
