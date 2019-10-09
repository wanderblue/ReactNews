//const db = require("../models");
const Top = require('../models/topheadlines')
// Defining methods for the WeightsController
module.exports = {
  
  create: function(req, res) {
    Top.create(req.body)
    .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log("<<<<<");
        res.status(422).json(err));}
  },
}
