const mongoose = require('mongoose');

const ModelSchema = mongoose.Schema({
  test: {
    type: String
  }
});

function searchDocument(Query, callback) {
  let query = {
    Query //search query E.g: {user: "username"}
  };
  Model.findOne(query, callback);
}

const Model = module.exports = mongoose.model('Collection', ModelSchema);

module.exports.addDocument = function (data, callback) {
  data.save(callback);
}

module.exports.searchDocument = function (query, callback) {
  searchDocument(query, callback)
}
