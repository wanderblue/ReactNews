import React, { Component } from 'react'
import { CardColumns, Container, Row } from 'react-bootstrap'

import PetCard from '../components/PetCard'
import MainAdvert from '../components//MainAdvertisment'
import LatestNewsCluster from '../components/latestNews'


import SecondaryNewsCluster from '../components/SecondaryNewsCluster'
import SubscribeCluster from '../components/SubscribeCluster'
import OldNewsCluster from '../components/OldNewsCluster'
import SocialMediaCluster from '../components/SocialMediaCluster'
import { Col } from 'react-bootstrap'
import SecondaryAdvert from '../components/SecondaryAdvertisment'

/**
 * Page used for splash, it will have two buttons to
 * route user || shelter to espesific page
 */
class AvaliablePetsPage extends Component {
  state = {
    pets: []
  }
  /**
   * gettingData()
   */
  gettingData = () => {
    fetch('/api/findAll')
      .then(response => response.json())
      .then(data => this.setState({ pets: data }))
  }
  /**
   * componentDidMount()
   */
  componentDidMount () {
    this.gettingData()
  }
  /**
   *
   * Render
   *
   */
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
    return _petsElements
  }
  
  renderTop1 = petsArray => {
      let latest_news
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
    latest_news = _petsElements[_petsElements.length - 1]
    // Return Array of <PetCard> elements
   // return _petsElements[0]
    return  latest_news
  }
  
  renderTop2 = petsArray => {
    let latest_news1
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
  latest_news1 = _petsElements[_petsElements.length - 2]
  // Return Array of <PetCard> elements
 // return _petsElements[0]
  return  latest_news1
}


renderTop3 = petsArray => {
  let latest_news3
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
latest_news3 = _petsElements[_petsElements.length - 3]
// Return Array of <PetCard> elements
// return _petsElements[0]
return  latest_news3
}

renderTop4 = petsArray => {
  let latest_news1
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
latest_news1 = _petsElements[_petsElements.length - 4]
// Return Array of <PetCard> elements
// return _petsElements[0]
return  latest_news1
}

renderTop5 = petsArray => {
  let latest_news1
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
latest_news1 = _petsElements[_petsElements.length - 5]
// Return Array of <PetCard> elements
// return _petsElements[0]
return  latest_news1
}


renderTop5 = petsArray => {
  let latest_news1
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
latest_news1 = _petsElements[_petsElements.length - 5]
// Return Array of <PetCard> elements
// return _petsElements[0]
return  latest_news1
}

renderTop6 = petsArray => {
  let latest_news1
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
latest_news1 = _petsElements[_petsElements.length - 6]
// Return Array of <PetCard> elements
// return _petsElements[0]
return  latest_news1
}

renderTop7 = petsArray => {
  let latest_news1
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
latest_news1 = _petsElements[_petsElements.length - 7]
// Return Array of <PetCard> elements
// return _petsElements[0]
return  latest_news1
}

renderTop8 = petsArray => {
  let latest_news1
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
latest_news1 = _petsElements[_petsElements.length - 8]
// Return Array of <PetCard> elements
// return _petsElements[0]
return  latest_news1
}

renderTop9 = petsArray => {
  let latest_news1
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
latest_news1 = _petsElements[_petsElements.length - 9]
// Return Array of <PetCard> elements
// return _petsElements[0]
return  latest_news1
}
  
  render () {
    return (
      <>
       
        <div className="App">
                 <Container className='my-2 p-2 text-center'>
                <MainAdvert/>
                </Container>
                <hr className='container'></hr>
                <Container className='my-2 p-2 text-center'>
                <div className='bg-light p-0'>
                    <div className='row bg-light m-0 container '>
                    {this.renderTop2(this.state.pets)}
                    </div>
                 </div>   
                 </Container>

        <SubscribeCluster/>


        <hr className='container'></hr>
                <h2>Just last Week</h2>

        <div className='row bg-light container m-auto'>
            <div className='col bg-light m-0 container'>
            {this.renderTop2(this.state.pets)}
            </div>
            <div className='col bg-light m-0 container '>
            {this.renderTop3(this.state.pets)}
            </div>
            <div className='col bg-light m-0 container'>
            {this.renderTop4(this.state.pets)}
            </div>
            <div className='col bg-light m-0 container'>
            {this.renderTop5(this.state.pets)}
            </div>
        </div>
        


   
       
                <hr className='container'></hr>

                <hr className='container'></hr>
                <h2>Latest News</h2>
   




                <Row className='container m-auto p-0 bg-danger'>
                    <Col className='col-8 float-left p-0'>
                    <div className='bg-light container m-auto'>
                <div className='bg-dark p-0'>
                    <div className='row bg-light m-0 container '>
                    {this.renderTop6(this.state.pets)}
                    </div>
                    <div className='row bg-light m-0 container'>
                    {this.renderTop7(this.state.pets)}
                    </div>
                    <div className='row bg-light m-0 container'>
                    {this.renderTop8(this.state.pets)}
                    </div>
                    <div className='row bg-light m-0 container'>
                    {this.renderTop9(this.state.pets)}
                    </div>
                </div>
            </div>
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


      </>
    )
  }
}

export default AvaliablePetsPage
