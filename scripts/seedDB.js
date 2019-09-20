const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Resources collection and inserts the resources below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/roundup"
);

const testSeed = [
  {
    title: "test title",
    tags: ["5d819bafe7b57f7eaac28a07"],
    category: ["5d819bafe7b57f7eaac28a08"],
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

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(testSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  
  db.Comments
  .remove({})
  .then(() => db.Comments.collection.insertMany(testComment))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });