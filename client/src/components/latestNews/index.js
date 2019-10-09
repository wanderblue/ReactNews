import React, {Component} from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MainArticleCard from '../MainArticleCard'

import {Row, Col} from "../Grid"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function LatestNewsCluster(props) {

        return (            
<>
<div className="">
    
       <Card className=''>
       <a href= {props.url}>
                    <Card.Img variant="top" src={props.urlToImage} className='imageSize mt-3' />
                    </a>
                        <Card.Body>
                        <Card.Text>
                            
                             {props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
        
            </div>
  </>
        )
    }


export default LatestNewsCluster