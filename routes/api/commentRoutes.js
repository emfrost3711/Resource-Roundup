const router = require("express").Router();
const db = require("../../models");

// // /api/categorys/all
// // get all categorys from the signed in user
router.get("/", function (req, res) {
    // console.log('I am the comment route', req, res);
    db.Comments.findAll()
    .then(comments => res.json(comments))
    .catch(err => res.json(err));
});

router.post("/", function (req, res) {
    //create a new favorites in the database
    console.log("req.body", req.body);
    //when we get the front end wired up the front end should send and object containing a favorite id key value pair to steal and put in the favorites array (the mongo ID for the resource thing we want to save as a favorite); we will need to update the language below to grab the correct ids
    db.Comments.create(req.body)
    .then(function(Comment) {
        console.log("Comment", Comment)
        return db.Resource.findOneAndUpdate({ _id: req.body.resource_id}, {$push: {comments: Comment._id }}, {new: true})
    })
    .then(function(dbComments) {
        console.log("are we every getting here?")
      res.json(dbComments);
    })
    .catch(function(err) {
      res.json (err)
    })
  });

router.get("/:id", function(req, res) {
    // Find one user
    db.Comments.findOne({_id: req.params.id})
    // Specify that we want to populate the retrieved favorites with the associated user
    .populate("comments")
    .then(function(comments) {
      // If able to successfully find and associate all favorites, send them back to the client
      res.json(favorites);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  });


module.exports = router;

