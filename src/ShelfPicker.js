import React  from 'react'


class ShelfPicker extends React.Component {



  render() {
    const { thisBook, changeShelf } = this.props

    return (
              <select defaultValue={thisBook.shelf}  onChange={(event) => changeShelf(thisBook, event.target.value)}>
                <option value="disabled" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>

    )
  }
}

export default ShelfPicker
