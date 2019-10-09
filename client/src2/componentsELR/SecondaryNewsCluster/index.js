import React, {Component} from 'react'
import SecondaryArticleCard1 from '../SecondaryArticle1'
import SecondaryArticleCard2 from '../SecondaryArticle2'
import SecondaryArticleCard3 from '../SecondaryArticle3'
import SecondaryArticleCard4 from '../SecondaryArticle4'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


class SecondaryNewsCluster extends Component{
    render(){
        return (            
            <div className='row bg-light container m-auto'>
                <div className='col bg-light m-0 container'>
                    <SecondaryArticleCard1/>
                </div>
                <div className='col bg-light m-0 container '>
                    <SecondaryArticleCard2/>
                </div>
                <div className='col bg-light m-0 container'>
                    <SecondaryArticleCard3/>
                </div>
                <div className='col bg-light m-0 container'>
                    <SecondaryArticleCard4/>
                </div>
            </div>
                
        )
    }
}

export default SecondaryNewsCluster