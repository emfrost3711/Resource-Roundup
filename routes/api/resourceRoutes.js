//ROUTER FILE CODE COPIED FROM THE "todoRoutes.js" as a reference to get started on the resourceRoutes.js
//See activity 18-mongoose Activity 14
const router = require("express").Router();
const db = require("../../models");

// db.Resource.create({ title: "sample resource" })
// .then(function(dbResource) {
//   console.log(dbResource);
// })
// .catch(function(err) {
//   console.log(err.message);
// });

// // /api/todos/all
// // get all todos from the signed in user
router.get("/", function (req, res) {
    console.log('I am the resources route', req, res);
    db.Resource.find()
        .populate("category tags comment")
        .then(resources => res.json(resources))
        .catch(err => res.json(err));
});

router.get("/:id", function(req, res) {
    let ID = req.params.id
    console.log(ID)
    db.Resource.findOne({ _id: ID})
    // .populate("comment user")
    .then(function(dbResource) {
      res.json(dbResource);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  })

// router.get("/", function(req, res) {
//     // Find all users
//     db.Resource.find({})
//     // Specify that we want to populate the retrieved users with any associated notes
//     .populate("title")
//     .then(function(dbResource) {
//       // If able to successfully find and associate all Users and Notes, send them back to the client
//       res.json(dbResource);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
//   });
  
  router.post("/", function(req, res) {
    db.Resource.create(req.body)
    .then(dbResource => res.json(dbResource))
    .catch(err => res.json(err))
  })
  
  module.exports = router;

