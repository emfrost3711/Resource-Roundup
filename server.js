const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;
const colors = require("colors");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");
const flash = require('connect-flash');

// Require all models
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(flash())
app.use(express.static("public"));
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/test", function(req, res) {
  db.Resource.find()
  .populate("tags category")
  .then(resource => res.json(resource))
  .catch(err => res.json(err))
})

app.get("/resources/:id", function(req, res) {
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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/roundup", { useNewUrlParser: true }, function(err) {
    if (err) throw err;
    console.log(`mongoose connection successful`.yellow);
    app.listen(PORT, (err)=> {
        if (err) throw err;
        console.log(`connected on port ${PORT}`.cyan)
    });
});

db.Resource.create({ title: "sample resource" })
  .then(function(dbResource) {
    console.log(dbResource);
  })
  .catch(function(err) {
    console.log(err.message);
  });

  db.Tag_List.create({ tag: "sample tag" })
  .then(function(dbTag_List) {
    console.log(dbTag_List);
  })

  db.Category_List.create({ category: "sample category" })
  .then(function(dbCategory_List) {
    console.log(dbCategory_List);
  })
  .catch(function(err) {
    console.log(err.message);
  });

//test route for adding to the favorites array
app.post("/favorites", function (req, res) {
    //create a new favorites in the database
    console.log(req.user.id)
//when we get the front end wired up the front end should send and object containing a favorite id key value pair to steal and put in the favorites array (the mongo ID for the resource thing we want to save as a favorite)
    db.User.findOneAndUpdate({ _id: req.user.id}, {$push: {favorites: req.body.resourceID}}, {new: true})
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json (err)
    })
});

  app.get("/resources", function(req, res) {
    // Find all users
    db.Resource.find({})
      // Specify that we want to populate the retrieved users with any associated notes
      .populate("title")
      .then(function(dbResource) {
        // If able to successfully find and associate all Users and Notes, send them back to the client
        res.json(dbResource);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  });

app.post("/resources", function(req, res) {
  db.Resource.create(req.body)
  .then(dbResource => res.json(dbResource))
  .catch(err => res.json(err))
})



