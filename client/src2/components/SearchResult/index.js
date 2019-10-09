import React from 'react'
import './style.css'
import { Row, Col } from '../Grid'

const SearchResult = props => {
  return (props.books.length === 0) ? (
    <div className='card'>
        <div className='card-body player'>
        <div className='article'>
          <h3>Search Results</h3>
        </div>
      </div>
      </div>
  ) : (
    <div className='card'>
      <div className='card-body player'>
                <div className='article'>
          <h3>Search Results</h3>

          {props.books.map(book => {
            return (
              <li className='search-list list-group-item'>
                <Row className='SearchResult row' id={book.title + 'Card'} key={book._id}>
                  
                  {/* col-3 show image of the book */}
                  <Col size='1' className='emptyCol' />
                  {/* col-9 show information of the book */}
                  <Col size='9' className='bookInfo'>

                  <Row>
                    <img className='urlimg' src={book.urlToImage} ></img>
                    </Row>

                    <Row>
                      <h6 className='bookTitle'>Title: {book.title}</h6>
                                          </Row>
                    <Row>
                      <h6 className='bookAuthor'>Description: {book.description}</h6>
                    </Row>

 

                    <Row>
                      <h8 className='bookDescription'>url: <a  href={book.url}>{book.url}</a></h8>
                    </Row>

                    <Row className="buttonDiv ">
                    <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                       Save
                      </button>
                   </Row>                    

                  </Col>
                </Row>
                <br />
              </li>
            )
          })}
        </div>
              </div>
    </div>
  )
}
export default SearchResult
