const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Resources collection and inserts the resources below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/roundup"
);
const resourcesSeed = [
  {
    fileType: "pdf",
    title: "HTML5 Element Flowchart",
    link: "http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf",
    image: "",
    source_s3: "",
    likes: 0,
    dislikes: 0,
    tags: [],
    categories: ["html"],
    comments: []
  },
  {
    fileType: "article",
    title: "15 Funny Lorem Ipsum Generators to Shake Up Your Design Mockups",
    link: "https://www.shopify.com/partners/blog/79940998-15-funny-lorem-ipsum-generators-to-shake-up-your-design-mockups",
    image: "https://cdn.shopify.com/s/files/1/0533/2089/files/lorem-ipsum-generator.jpg?v=1555505887",
    source_s3: "",
    likes: 0,
    dislikes: 0,
    tags: [],
    categories: ["html"],
    comments: []
  },
  {
    fileType: "video",
    title: "Lesson 1.1 - My first HTML - YouTube",
    link: "https://www.youtube.com/watch?v=ieb6Svbc10E",
    image: "https://www.youtube.com/embededieb6Svbc10E",
    source_s3: "",
    likes: 0,
    dislikes: 0,
    tags: [],
    categories: ["javascript"],
    comments: []
  },
  {
    fileType: "video",
    title: "Git'n Pro With HTML and CSS",
    link: "https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8dae9a0b-1cbc-48d8-88f0-aa2d00085a60",
    image: "https:///codingbootcamp.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=8dae9a0b-1cbc-48d8-88f0-aa2d00085a60",
    likes: 0,
    dislikes: 0,
    tags: [],
    categories: ["javascript", "basics"],
    comments: []
  },
  {
    fileType: "pdf",
    title: "Steps To Upload to Github",
    link: "",
    image: "",
    contributor: "",
    author: "",
    source_s3: "https://resourceroundup.s3.us-east-2.amazonaws.com/resources/Git/Steps+To+Upload+to+Github.pdf",
    likes: 0,
    dislikes: 0,
    tags: [],
    categories: ["javascript", "ajax"],
    comments: []
  },
  {
    fileType: "pdf",
    title: "Git Branching Guide",
    link: "",
    image: "",
    contributor: "",
    author: "",
    source_s3: "https://resourceroundup.s3.us-east-2.amazonaws.com/resources/Git/Git+Branching+Guide.pdf",
    likes: 0,
    dislikes: 0,
    tags: [],
    categories: ["css"],
    comments: []
  },
  {
    fileType: "pdf",
    title: "MySQLHerokuDeploymentProcess.pdf",
    link: "",
    image: "",
    contributor: "",
    author: "",
    source_s3: "https://resourceroundup.s3.us-east-2.amazonaws.com/resources/Heroku/MySQLHerokuDeploymentProcess.pdf",
    likes: 0,
    dislikes: 0,
    tags: [],
    categories: ["css"],
    comments: []
  },
  {
    fileType: "pdf",
    title: "SequelizeHerokuDeploymentProcess.pdf",
    link: "",
    image: "",
    contributor: "",
    author: "",
    source_s3: "https://resourceroundup.s3.us-east-2.amazonaws.com/resources/Heroku/SequelizeHerokuDeploymentProcess.pdf",
    likes: 0,
    dislikes: 0,
    tags: [],
    categories: ["css"],
    comments: []
  },
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
    // process.exit(1);
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