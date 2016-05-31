var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoriteSchema = new Schema({
  petFinderId: { type: String, required: true },
  name: String,
  description: String,
  image: String,
  type: String,
});

var Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
