import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './style.css'

function PetCard (props) {
  return (
    <Card border="secondary" className='mx-auto my-1 bg-light'>
      <Card.Header as='h6' className='mx-auto bg-primary text-center text-light'>{props.petName}</Card.Header>
      <Card.Img variant='top' className='p-2 bg-light' src={props.urlToImage} />
      <ListGroup className='p-2 bg-light' variant='flush'>
        <ListGroup.Item>Description: {props.description}</ListGroup.Item>
     
      </ListGroup>
    </Card>
  )
}

export default PetCard
