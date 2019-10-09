import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/SaveBooks";

import SearchNews from "./pages/SearchNews";
import './App.css';
import SiteNavBar from './components/SiteNavBar'
import Shop from './components/Shop'
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/login'
import Home from './components/Home'
import { Row } from 'react-bootstrap'
import Footer from './components/Footer';



function App() {
  return (
    
    <Router>
      <div>

        <Switch>
        <Route exact path="/" component={Home} />

          
          <Route exact path="/searchNews" component={SearchNews} />
          
{/* 
          <Route exact path="/watcher" component={MyWatcher} />
<Route exact path="/search" component={SearchBooks} />
          <Route exact path="/cc" component={SearchBooks1} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} /> 
          */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
