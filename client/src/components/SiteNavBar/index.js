import React, { Component } from 'react'
import { Navbar,Nav  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
/**
 * PetNavbar
 * Navbar used for all pages
 */
class PetNavBar extends Component {
  /**
   * Render
   */
  render () {
    return (
        <Navbar bg='light' variant='light'>
          <Navbar.Brand>
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
                        <Nav.Link>
                            <Link className='navLinks link' to='/searchNews' >News</Link>
                        </Nav.Link>
                </Nav>        
          {/* Buttons */}
          <div className='mr-2 ml-auto'>
            {this.props.actionButtons}
          </div>

        </Navbar>
    )
  }
}

export default PetNavBar
