import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'


class BookShelf extends Component {

  render () {
    const { changeShelf } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading
              changeShelf={changeShelf}
              booksOnThisShelf={this.props.booksOnShelf.filter((book) => book.shelf === "currentlyReading")}
            />
            <WantToRead
              changeShelf={changeShelf}
              booksOnThisShelf={this.props.booksOnShelf.filter((book) => book.shelf === "wantToRead")}
            />
            <Read
              changeShelf={changeShelf}
              booksOnThisShelf={this.props.booksOnShelf.filter((book) => book.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf
