import React, {Component} from 'react'
import { Form, Col, Button, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


class SubscribeCluster extends Component{
    render(){
        return (            
            <div className='bg-light container m-auto '>
                <Form className='container'>
                    <Form.Group className=''>
                        <Row>
                        <Form.Label className='float-left text-black'>
                            Subscribe To Martinez News
                        </Form.Label>
                        </Row>
                        <Row className=''>
                            
                            <a href ='/Register'>
                            <Button className='' onclick="window.location.href ='/Register';">Subscribe</Button>
                            </a>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
                
        )
    }
}

export default SubscribeCluster