import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LogInButton extends Component{
    render(){
        return (
            <Button className='bg-light'>
                <Link className='text-dark' to='/'>
                Login
                </Link>
            </Button>
        )
    }
}

export default LogInButton