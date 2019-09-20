//ROUTER FILE CODE COPIED FROM THE "todoRoutes.js" as a reference to get started on the resourceRoutes.js
//See activity 18-mongoose Activity 14

const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");




router.post("/favorites", function (req, res) {
    //create a new favorites in the database
    console.log(req.body);
    //when we get the front end wired up the front end should send and object containing a favorite id key value pair to steal and put in the favorites array (the mongo ID for the resource thing we want to save as a favorite); we will need to update the language below to grab the correct ids
    db.User.findOneAndUpdate({ _id: req.body.user._id}, {$push: {favorites: req.body.user.favorites}}, {new: true})
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json (err)
    })
  });


module.exports = router;


// // /api/todos/all
// // get all todos from the signed in user
// router.get("/all", authMiddleware.isLoggedIn, function (req, res, next) {
//     db.Roundup.find({ author: req.user.id }, (err, resources) => {
//         res.json(resources);
//     });