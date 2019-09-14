//ROUTER FILE CODE COPIED FROM THE "todoRoutes.js" as a reference to get started on the resourceRoutes.js
//See activity 18-mongoose Activity 14

const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

// // /api/todos/all
// // get all todos from the signed in user
// router.get("/all", authMiddleware.isLoggedIn, function (req, res, next) {
//     db.Roundup.find({ author: req.user.id }, (err, resources) => {
//         res.json(resources);
//     });