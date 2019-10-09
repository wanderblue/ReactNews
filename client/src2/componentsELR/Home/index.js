import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import MainAdvert from '../MainAdvertisment'
import LatestNewsCluster from '../latestNews'
import SecondaryNewsCluster from '../SecondaryNewsCluster'
import SubscribeCluster from '../SubscribeCluster'
import OldNewsCluster from '../OldNewsCluster'
import SocialMediaCluster from '../SocialMediaCluster'
import { Row, Col } from 'react-bootstrap'
import SecondaryAdvert from '../SecondaryAdvertisment'

class Home extends Component{
    render(){
        return (
            <div className="App">
                <MainAdvert/>
                <hr className='container'></hr>
                <LatestNewsCluster/>
                <SubscribeCluster/>
                <hr className='container'></hr>
                <h2>Just last Week</h2>
                <SecondaryNewsCluster/>
                <hr className='container'></hr>
                <h2>Latest News</h2>
                <Row className='container m-auto p-0 bg-danger'>
                    <Col className='col-8 float-left p-0'>
                        <OldNewsCluster/>
                    </Col>    
                    <Col className='col-4 float-right p-0 d-flex'>
                        <SocialMediaCluster/>
                    </Col>
                </Row>
                <hr className='container'></hr>
                <SecondaryAdvert/>
            </div>
        )
    }
}

export default Home