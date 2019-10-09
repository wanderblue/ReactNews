import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import MainAdvert from '../MainAdvertisment'
import LatestNewsCluster from '../latestNews'
import SecondaryNewsCluster from '../SecondaryNewsCluster'
import SubscribeCluster from '../SubscribeCluster'
import OldNewsCluster from '../OldNewsCluster'
import SocialMediaCluster from '../SocialMediaCluster'
import { Container, Row, Col } from 'react-bootstrap'
import SecondaryAdvert from '../SecondaryAdvertisment'

class Home extends Component{
    render(){
        return (
            <div className="App">
                 <Container className='my-2 p-2 text-center'>
                <MainAdvert/>
                </Container>
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
                <hr className='container my-2 p-2 text-center'></hr>
                <Container className='my-2 p-2 text-center'>
                <SecondaryAdvert/>
                </Container>
               
            </div>
        )
    }
}

export default Home