const mongoose = require("mongoose");
const model = require("../models/model")
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL /*database url*/ , (err) => {
  if (err) {
    throw err;
  }
  console.log(`Connected to ${DB_URL}`)
})

class example {
  constructor() {}
  addDocument(content, callback) {
    let data = new model(content)
    /* 
    E.g:
      {
         test: "Hello World!"
       } 
    */
    model.addDocument(data, (err, data) => {
      if (err) {
        throw err;
      }
      callback(err, data)
    });
  }
  searchDocument(query, callback) {
    model.searchDocument(query, (err, data) => {
      callback(err, data)
    })
  }
}