import React, {Component} from 'react'
import { Card } from 'react-bootstrap'
import './index.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class MainArticleCard extends Component{
    render(){
        return (
            <div className="">
                <Card className=''>
                    <Card.Img variant="top" src="https://via.placeholder.com/600x600" className='imageSize mt-3' />
                    <Card.Body>
                        <Card.Text>
                            Text From article will go here
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MainArticleCard