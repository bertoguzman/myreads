import React from 'react'
import ShelfPicker from './ShelfPicker'
import defaultImg from './icons/noCover.png'


class Book extends React.Component {


  render() {
    const { thisBook, changeShelf } = this.props


    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193,
              backgroundImage: `url(${thisBook.imageLinks ? thisBook.imageLinks.smallThumbnail : defaultImg})` }}></div>
            <div className="book-shelf-changer">
              <ShelfPicker
                changeShelf={changeShelf}
                thisBook={thisBook}/>
            </div>
          </div>
          <div className="book-title">{thisBook.title}</div>
           {thisBook.authors !== undefined &&
            thisBook.authors.map((author) => (
              <div key={author} className="book-authors">{author}</div>
          ))}

        </div>

    )
  }
}

export default Book
