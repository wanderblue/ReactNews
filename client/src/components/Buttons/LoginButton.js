import React from 'react'
import { Link } from 'react-router-dom'
import { AccountCircle } from '@material-ui/icons'
import { Button } from 'react-bootstrap'

export function LoginButton(){
    return(
        <>
        <Button className='mx-1 bg-dark btn-outline-secondary'>
        <Link className='text-light' to='/NewsLogin'><AccountCircle/></Link>
        </Button>
        </>
    )
}
