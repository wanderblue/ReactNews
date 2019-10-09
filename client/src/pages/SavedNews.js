import React, { Component } from 'react'
import { CardColumns, Container, Row } from 'react-bootstrap'
import API from "../utils/API";
import PetCard from '../components/PetCard'
import MainAdvert from '../components//MainAdvertisment'
import LatestNewsCluster from '../components/latestNews'

import SavedResult from '../components/SavedResult'

/**
 * Page used for splash, it will have two buttons to
 * route user || shelter to espesific page
 */
class AvaliableNewsPage extends Component {
  state = {
    news: []
  }
  /**
   * gettingData()
   */
  gettingData = () => {
    fetch('/api/findAll')
      .then(response => response.json())
      .then(data => this.setState({ news: data }))
  }
  /**
   * componentDidMount()
   */
  componentDidMount () {
    this.gettingData()
  }
  
    //function to remove book by id
    handleDeleteButton = id => {
      return fetch('api/news/' + id, {
        method: 'DELETE'
      })
      .then(res => this.gettingData())
    } 

  /**
   *
   * Render
   *
   */
  renderPets = petsArray => {
    let _petsElements = petsArray.map(petInfo => {
      // Each Pet available in the JSON will be
      // Added as <PetCard> element in _booksElements array
      return (
        <PetCard
          key={petInfo.id}
          id={petInfo.id}
          petName={petInfo.title}
          description={petInfo.description}
          urlToImage={petInfo.urlToImage}
          
          
        />
      )
    })
    // Return Array of <PetCard> elements
    return _petsElements
  }
  
  renderNews = petsArray => {
    let _petsElements = petsArray.map(petInfo => {
      // Each Pet available in the JSON will be
      // Added as <PetCard> element in _booksElements array
      return (
        <LatestNewsCluster 
   //       key={petInfo.petId}
    //      id={petInfo.petId}
          petName={petInfo.title}
          description={petInfo.description}
          urlToImage={petInfo.urlToImage}
          
          
        />
      )
    })
    // Return Array of <PetCard> elements
    return _petsElements[0]
  }

  render () {
    return (
      <>
                <Container>
                    <SavedResult savedBooks={this.state.news} handleDeleteButton={this.handleDeleteButton} />
                </Container>
           

       

   
      </>
    )
  }
}

export default AvaliableNewsPage
