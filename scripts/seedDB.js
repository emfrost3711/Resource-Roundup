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
    category: ["5d819bafe7b57f7eaac28a08"]
  },
  
];

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