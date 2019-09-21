const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Resources collection and inserts the resources below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/roundup"
);

const resourcesSeed = [
  {
    title: "test title",
    tags: ["5d8429b9fb722d44fa3ee439"],
    category: ["5d8429b9fb722d44fa3ee43a"],
    comment: ["5d843c6ede37a447d542a2fc"],
    source_s3: "s3://resourceroundup/computer_theory/Wk 22 Day 3 - webdev-22-3-big-o-and-data-structures.pdf"
  },  
];

const testComment = [
  {
    resource: "5d82f5384af5ca4117aed2a7",
    user: "5d82efb4a160803fb64390a2",
    comment: "learning is fun"
  }

]

// const testFavorite = [
//   {

//   }
// ]

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourcesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  
  db.Comments.collection.insertMany(testComment)
  .then(data => {
    console.log(data.result.n + " comments inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });