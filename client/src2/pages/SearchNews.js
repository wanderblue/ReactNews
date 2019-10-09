import React, { Component } from "react";
import API from "../utils/API";
//import Jumbotron from "../components/Jumbotronb";
import { Container, Row, Col } from "../components/Grid";
import SearchFormNews from "../components/SearchFormNews";
import SearchResult from "../components/SearchResult"


class SearchBooks extends Component {
    //create state
    state = {
        search: "",
        books: [{author: "",title: "", description: "", content: "", urlToImage:"", url: "", publishedAt: ""}],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
//let q = this.state.search.replace(/\s/g, "%20");
  //      console.log("$$$$$$$$$$>", APP.API_ID)

       
 //    API. getNutrition(this.state.search)
 API. getTopHeadlines()
 .then(res => {
    console.log(">>>>>",res.data)

// .then(res => {
  //  if (res.data.items === "error") {
    //    throw new Error(res.data.items);
    //}
    //else {
        // store response in a array
        let results = res.data.articles
        //map through the array 
        results = results.map(result => {
            //store each book information in a new object 
            result = {
                
                title: result.title,
                author: result.author,
                content: result.content,
          //      publishedAt: result.publishedAt,
                description: result.description,
                urlToImage: result.urlToImage,
                url: result.url,
            }
            return result;
        })
        // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
        this.setState({ books: results, error: "" })
    //}
})
//.catch(err => this.setState({ error: err.items }));
}

 
     handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log("&&&&&&&&&&&&",this.state.books)
        console.log("&&&&&&&&&&&&",event.target.id)
       // let savedBooks = this.state.books.filter(book => book.id === event.target.id)
       let savedBooks = this.state.books 
       savedBooks = savedBooks[0];
        console.log("&&&&&&&&&&&&",savedBooks)

        API.saveBook(savedBooks)
  //          .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                        
          
            <Container fluid>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchFormNews
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                
                <br></br>
                <Container>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
            </>
        )
    }


}

export default SearchBooks