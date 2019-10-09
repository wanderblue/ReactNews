import React, {Component} from 'react'
import './index.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class SecondaryAdvert extends Component{
    render(){
        return (
            <div className="mainAdvertisment">
                <a href='https://www.eventbrite.com/e/zombie-brew-crawl-in-downtown-martinez-tickets-69239698803?aff=ebdssbdestsearch'>
                <img src='./MainAdvert.jpg' className='mainAdvertismentSize'></img>
                </a>
            </div>
        )
    }
}

export default SecondaryAdvert