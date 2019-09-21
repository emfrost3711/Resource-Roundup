//ROUTER FILE CODE COPIED FROM THE "todoRoutes.js" as a reference to get started on the resourceRoutes.js
//See activity 18-mongoose Activity 14

const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

//test route for adding to the favorites array

router.post("/", function (req, res) {
    //create a new favorites in the database
    console.log(req.body);
    //when we get the front end wired up the front end should send and object containing a favorite id key value pair to steal and put in the favorites array (the mongo ID for the resource thing we want to save as a favorite); we will need to update the language below to grab the correct ids
    db.User.findOneAndUpdate({ _id: req.body.user_id}, {$push: {favorites: req.body.resource}}, {new: true})
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json (err)
    })
  });

router.get("/:id", function(req, res) {
    // Find one user
    db.User.findOne({_id: req.params.id})
    // Specify that we want to populate the retrieved favorites with the associated user
    .populate("favorites")
    .then(function(favorites) {
      // If able to successfully find and associate all favorites, send them back to the client
      res.json(favorites);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  });


module.exports = router;
