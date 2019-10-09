import axios from "axios"

export default {
    // Get book from google search 
    getTopHeadlines: function() {
        return axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=393d029eff544dc5aed063a7c189bf90")
        
    },
    
    getNutrition: function(query) {
        const API_KEY =  process.env.API_KEY;
        const API_ID = process.env.API_ID;
    //    return axios.get("https://api.edamam.com/api/nutrition-data?app_id=8a20c618&app_key=4edced0a7ac63a4a17315af2c11b13b1&ingr=one%20large%20apple")
        return axios.get("https://api.edamam.com/api/nutrition-data?app_id=8a20c618&app_key=4edced0a7ac63a4a17315af2c11b13b1&ingr=" + query)
     //return axios.get("https://api.edamam.com/api/nutrition-data?app_id=" + API_ID + "&app_key=" + API_KEY + "&ingr=" + query)
  
  
  },
 //   getBooks: function () {
   //     return axios.get("/api/books")
    //},

    getUser: function(id) {
        return fetch("/api/books/" + id);
      },
    
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

}