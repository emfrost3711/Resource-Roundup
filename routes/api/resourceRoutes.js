//ROUTER FILE CODE COPIED FROM THE "todoRoutes.js" as a reference to get started on the resourceRoutes.js
//See activity 18-mongoose Activity 14

const router = require("express").Router();
const db = require("../../models");

// // /api/todos/all
// // get all todos from the signed in user
router.get("/resources", function (req, res) {
    console.log('I am the resources route', req, res);
    db.Resource.find()
        .populate("category tags comment")
        .then(resources => res.json(resources))
        .catch(err => res.json(err));
});

module.exports = router;

