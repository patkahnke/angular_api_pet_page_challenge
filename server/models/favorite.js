var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoriteSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
});

var Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
