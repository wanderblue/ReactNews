import React, {Component} from 'react'
import './index.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Row } from 'react-bootstrap'

class Footer extends Component{
    render(){
        return (
            <div className="bg-dark container">
                <div>
                <Link className='whiteText link' to='/'>
                    <img
                        alt='Logo'
                        src= {process.env.PUBLIC_URL + '/logo192.png'}
                        width='30'
                        height='30'
                        className=''
                    />
                Martinez News Bruh
                    </Link>
                </div>
                <div>
                    <Row>
                    <Link className='navLinks link' to='/' >Home</Link>
                    <Link className='navLinks link' to='/' >Subscribe to ...</Link>
                    <Link className='navLinks link' to='/' >About</Link>    
                    <Link className='navLinks link' to='/' >Jobs</Link>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Footer