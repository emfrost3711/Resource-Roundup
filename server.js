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

app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/roundup", { useNewUrlParser: true }, function(err) {
    if (err) throw err;
    console.log(`mongoose connection successful`.yellow);
    app.listen(PORT, (err)=> {
        if (err) throw err;
        console.log(`connected on port ${PORT}`.cyan)
    });
});







//test route for adding to the favorites array
// app.post("/favorites", function (req, res) {
//   //create a new favorites in the database
//   console.log(req.user.id);
//   console.log(req.body);
//   //when we get the front end wired up the front end should send and object containing a favorite id key value pair to steal and put in the favorites array (the mongo ID for the resource thing we want to save as a favorite)
//   db.User.findOneAndUpdate({ _id: req.user.id}, {$push: {favorites: req.body.resourceID}}, {new: true})
//   .then(function(dbUser) {
//     res.json(dbUser);
//   })
//   .catch(function(err) {
//     res.json (err)
//   })
// });



// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/roundup", { useNewUrlParser: true }, function(err) {
//   if (err) throw err;
//   console.log(`mongoose connection successful`.yellow);
//   app.listen(PORT, (err)=> {
//     if (err) throw err;
//     console.log(`connected on port ${PORT}`.cyan)
//   });
// });
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
