import React, {Component} from 'react'
import { Card } from 'react-bootstrap'
import './index.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function  MainArticleCard (prop) {
    
        return (
            <>
            <div className="">
                <Card className=''>
                    <Card.Img variant="top" src={prop.urlToImage} className='imageSize mt-3' />
                    <Card.Body>
                        <Card.Text>
                            Text From article will go here
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </>
        )
    }


export default MainArticleCard