import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {
  LoginButton,
  LogoutButton,
  AddPetButton,
  HomieButton
} from './components/Buttons'
import { Row } from 'react-bootstrap'
import PetNavBar from './components/PetNavBar'
import PetinderLogo from './components/PetinderLogo'
import PetFooter from './components/PetFooter'
import SplashPage from './pages/SplashPage'
import ShelterRegister from './pages/Shelter_Register'
import AvaliablePetsPage from './pages/AvaliablePetsPage'
import ShelterLogin from './pages/Shelter_Login'
import AddPet from './pages/AddPet'

import SearchNews from "./pages/SearchNews";
//import Home from './components/Home'


import SiteNavBar from './components/SiteNavBar'
import Shop from './components/Shop'
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/login'
import Home from './components/Home'
import Myhome from './components/myhome'
//import SearchNews from "./pages/SearchNews";
//import { Row } from 'react-bootstrap'
import Footer from './components/Footer';

import MyWatcher1 from "./pages/MyWatcher1";
import martinezNews from './pages/martinezNews'
import SavedNews from './pages/SavedNews'
import TopNews from './pages/topNews'
class App extends Component {
  state = {
    user: {
      id: ''
    }
  }
  /**
   * componentDidMount()
   */
  componentDidMount () {
    fetch('/auth', { method: 'GET' })
      .then(response => response.json())
      .then(results =>
        this.setState({ user: results })
      )
      .catch(err => console.log(err))
  }
  /**
   * onLoginClickHandler
   */
  onLoginClickHandler = data => {
    this.setState({ user: data })
  }
  /**
   * onLogoutClick()
   */
  onLogoutClick = event => {
    fetch('/logout').then(result => {
      this.setState({ user: result })
    })
  }
  /**
   * 
   * Render
   * 
   */
  render () {
    return (
      <>
         <BrowserRouter>

         <PetNavBar
            actionButtons={
              <Row>
                {this.state.user.id ? (
                  <>
                    <LogoutButton onLogoutClick={this.onLogoutClick} />
                    <AddPetButton />
                  </>
                ) : (
                  <>
                    <LoginButton />
                  </>
                )}
                
              </Row>
            }
          />


        <div>
        <Switch>
        
        <Route exact path="/" component={TopNews} />
         
             
       
             
              <Route
                exact
                path='/topnews'
                component={TopNews}
              />

             <Route exact path="/update" component={SearchNews} />

             <Route
                exact
                path='/SavedNews'
                component={SavedNews}
              />
               <Route
                exact
                path='/martineznews'
                component={martinezNews}
              />


<Route exact path='/home' component={SplashPage} />

<Route exact path="/" component={TopNews} />

              <Route
                exact
                path='/Register'
                component={ShelterRegister}
              />
              <Route
                exact
                path='/AvaliablePetsPage'
                component={AvaliablePetsPage}
              />

                       <Route
                exact
                path='/localnews'
                component={TopNews}
              />

               <Route
                exact
                path='/martineznews'
                component={martinezNews}
              />
               <Route
               exact
               path="/myweight"
                component={MyWatcher1}
                />

              <Route
                exact
                path='/NewsLogin'
                render={props =>
                  this.state.user.id ? (
                    <Redirect to='/' />
                  ) : (
                    <ShelterLogin saveData={this.onLoginClickHandler} />
                  )
                }
              />
              <Route
                exact
                path='/shop'
                render={props =>
                  !this.state.user.id ? (
                    <Redirect to='/Login' />
                  ) : (
                    <Shop />
                  )
                }
              />
            </Switch>
          </div>
        </BrowserRouter>
      
      </>
    )
  }
}

export default App
