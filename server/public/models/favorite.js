var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoriteSchema = new Schema({
  name: String,
  image: String,
  description: String,
});

var Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
