import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>News that You Saved</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>News that You Saved</h3>
                    {props.savedBooks.reverse().map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                    {/* col-3 show image of the book */}
                                    <row>
                                    <a href= {savedbook.url}>
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.urlToImage} alt={savedbook.title} />
                                    </Col>
                                    </a>
                                    </row>
                                    <Col size="1" className="emptyCol"/>
                                    {/* col-9 show information of the book */}
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h2 className="bookTitle">{savedbook.title}</h2>
                                        </Row>
                                       
                                        <Row>
                                            <p className="bookDescription">{savedbook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteBook btn  btn-success" id={savedbook.id} onClick={() => props.handleDeleteButton(savedbook.id)}>
                                        Delete 
                                    </button>
                                    <a href={savedbook.url} target="_blank">
                                        <button className="viewBook btn btn-success">
                                            View 
                                        </button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedResult