import React, {Component} from 'react'
import { Card, Row } from 'react-bootstrap'
import './index.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class ArticleCard2 extends Component{
    render(){
        return (
            <div className="flex-fill">
                <Card className="flex-row">
                    <Card.Body className="flex-fill">
                        <p className="float-left flex-fill m-0">
                            Text From article will go here
                        </p>

                    </Card.Body>
                    <Card.Img variant="" src="https://via.placeholder.com/100x100" className='latestArticle2Card' />

                </Card>
            </div>
        )
    }
}

export default ArticleCard2