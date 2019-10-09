import React, {Component} from 'react'
import ArticleCard1 from '../ArticleCard1/index.js'
import ArticleCard2 from '../ArticleCard2/index.js'
import ArticleCard3 from '../ArticleCard3/index.js'
import { Card, Row } from 'react-bootstrap'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import OldNewsCard1 from '../OldNewsArticle1/index.js'
import OldNewsCard2 from '../OldNewsArticle2/index.js'
import OldNewsCard3 from '../OldNewsArticle2/index.js'
import OldNewsCard4 from '../OldNewsArticle2/index.js'
class OldNewsCluster extends Component{
    render(){
        return (            
            <div className='bg-light container m-auto'>
                <div className='bg-dark p-0'>
                    <div className='row bg-light m-0 container '>
                        <OldNewsCard1/>
                    </div>
                    <div className='row bg-light m-0 container'>
                        <OldNewsCard2/>
                    </div>
                    <div className='row bg-light m-0 container'>
                        <OldNewsCard3/>
                    </div>
                    <div className='row bg-light m-0 container'>
                        <OldNewsCard4/>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default OldNewsCluster