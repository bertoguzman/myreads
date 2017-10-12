import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'



class SearchBooks extends Component {

  state = {
    query: '',
    searchResults: []
  }

  searchBooks = (event) => {
    const query = event.target.value.trim()
    this.setState({ query: query.trim() })
    if(query){
      BooksAPI.search(query, 1).then((searchResults) => {
        if(searchResults.length > 0){
          this.setState({ searchResults })
        } else {
          this.setState({ searchResults: [] })
        }
      })
    } else this.setState({ searchResults: [] })
  }


  render () {
    const { changeShelf } = this.props
    const { query, searchResults, booksOnShelf } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.map((book) => (
              <li key={book.id}>
                <Book
                  booksOnShelf={booksOnShelf}
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

export default SearchBooks
