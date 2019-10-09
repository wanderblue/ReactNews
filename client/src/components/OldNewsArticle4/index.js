import React, {Component} from 'react'
import { Card } from 'react-bootstrap'
import './index.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class OldNewsCard4 extends Component{
    render(){
        return (
            <div className="flex-fill">
                <Card className="flex-row">
                    <Card.Body className="flex-fill">
                        <p className="float-left flex-fill m-0">
                        Text From article will fill this area
                        </p>

                    </Card.Body>
                    <Card.Img variant="" src="https://via.placeholder.com/250x250" className='oldNewsCardImage1' />

                </Card>
            </div>
        )
    }
}

export default OldNewsCard4