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
    categories: ["5d8429b9fb722d44fa3ee43a"],
    comments: ["5d843c6ede37a447d542a2fc"],
    source_s3: "s3://resourceroundup/computer_theory/Wk 22 Day 3 - webdev-22-3-big-o-and-data-structures.pdf"
  },
  {
    type: "pdf",
    title: "HTML5 Element Flowchart",
    link: "http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf",
    image: "",
    source_s3: "",
    likes: 0,
    dislikes: 0,
    tags: ["5d8429b9fb722d44fa3ee439"],
    categories: ["5d8429b9fb722d44fa3ee43a"],
    comments: ["5d843c6ede37a447d542a2fc"]
  },
  {
    type: "article",
    title: "15 Funny Lorem Ipsum Generators to Shake Up Your Design Mockups",
    link: "https://www.shopify.com/partners/blog/79940998-15-funny-lorem-ipsum-generators-to-shake-up-your-design-mockups",
    image: "https://cdn.shopify.com/s/files/1/0533/2089/files/lorem-ipsum-generator.jpg?v=1555505887",
    likes: 0,
    dislikes: 0,
    tags: ["5d8429b9fb722d44fa3ee439"],
    categories: ["5d8429b9fb722d44fa3ee43a"],
    comments: ["5d843c6ede37a447d542a2fc"]
  },
  {
    type: "video",
    title: "Lesson 1.1 - My first HTML - YouTube",
    link: "https://www.youtube.com/watch?v=ieb6Svbc10E",
    image: "https://www.youtube.com/embededieb6Svbc10E",
    image: "",
    likes: 0,
    dislikes: 0,
    tags: ["5d8429b9fb722d44fa3ee439"],
    categories: ["5d8429b9fb722d44fa3ee43a"],
    comments: ["5d843c6ede37a447d542a2fc"]
  },
  {
    type: "video",
    title: "Git'n Pro With HTML and CSS",
    link: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8dae9a0b-1cbc-48d8-88f0-aa2d00085a60",
    image: "https:///codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=8dae9a0b-1cbc-48d8-88f0-aa2d00085a60",
    likes: 0,
    dislikes: 0,
    tags: ["5d8429b9fb722d44fa3ee439"],
    categories: ["5d8429b9fb722d44fa3ee43a"],
    comments: ["5d843c6ede37a447d542a2fc"]
  }
];


// const testComment = [
//   {
//     resource: "5d82f5384af5ca4117aed2a7",
//     user: "5d82efb4a160803fb64390a2",
//     comment: "learning is fun"
//   }

// ]

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

  
  
  // db.Comments.collection.insertMany(testComment)
  // .then(data => {
  //   console.log(data.result.n + " comments inserted!");
  //   process.exit(0);
  // })
  // .catch(err => {
  //   console.error(err);
  //   process.exit(1);
  // });