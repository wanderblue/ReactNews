import axios from "axios"

export default {
    // Get headline


    getPets: function () {
      return fetch('/api/pet')
    },
    // Saves a book to the database
    savePet: function (petData) {
      return fetch('/api/pet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
      })
    },
    registerShelter: function (shelterData) {
      return fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(shelterData)
      })
    },
  
   getTopHeadlines: function() {
    return axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=393d029eff544dc5aed063a7c189bf90")
    
},    



getNews: function () {
    return fetch('/api/news')
  },

  // Saves a book to the database
  saveNews: function (Data) {
    return fetch('/api/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    })
  },

  saveBooks: function (Data) {
    return fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    })
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
    },
    
    getUser: function(id) {
        return fetch("/api/books/" + id);
      },

      saveRecord: function (saveRecords) {
        return axios.post("/api/records", saveRecords);
    },


}