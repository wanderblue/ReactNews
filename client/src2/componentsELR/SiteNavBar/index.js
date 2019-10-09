import React, {Component} from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

class SiteNavBar extends Component {
    render(){
        return(
            <Navbar className='nav container' >
                <Navbar.Brand className='navBrand'>
                    
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
                </Navbar.Brand>
                <Nav className='navLinkCluster'>
                        <Nav.Link>
                            <Link className='navLinks link' to='/' >Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='navLinks link' to='/shop' >Shop</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='navLinks link' to='/login' >Login</Link>
                        </Nav.Link>
                        
                </Nav>        
            </Navbar>

        )
    }
}

export default SiteNavBar