var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoriteSchema = new Schema({
  PetFinderId: String,
  name: String,
  image: String,
  description: String,
  Type: String,
});

var Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
