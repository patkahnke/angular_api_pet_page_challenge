var express = require('express');
var router = express.Router();
var Favorite = require('../models/favorite');

router.get('/', function (req, res) {
  Favorite.find({}, function (err, favorites) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(favorites);
  });
});

router.post('/', function (req, res) {
  var favorite = new Favorite(req.body);
  favorite.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    console.log('favorite from post', favorite);
    res.sendStatus(201);
  });
});

router.delete('/:id', function (req, res) {
  Favorite.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
