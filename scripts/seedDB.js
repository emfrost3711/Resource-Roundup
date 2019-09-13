const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Resources collection and inserts the resources below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/resourceroundup"
);

const resourceSeed = [
  {
    title: "Placeholder.com",
    address: "https://placeholder.com/",
    tags: "html",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    address: "William Golding",
    tags: "",
    date: new Date(Date.now())
  },
  
];

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });