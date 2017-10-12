import React from 'react'
import './App.css'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class App extends React.Component {
  state = {
    booksOnShelf: [],
  }

  componentDidMount(){
      BooksAPI.getAll().then((booksOnShelf) => {
        this.setState({ booksOnShelf })
      })
    }

    changeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          this.componentDidMount()
      })
    }

  render() {
    const { booksOnShelf } = this.state


    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            changeShelf={this.changeShelf}
            booksOnShelf={booksOnShelf}
          />
        )}/>

        <Route path="/search" render={( {history} ) => (
          <SearchBooks
            changeShelf={this.changeShelf}
            booksOnShelf={booksOnShelf}
          />
        )}/>
      </div>
    )
  }
}

export default App
