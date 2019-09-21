const router = require("express").Router();
const db = require("../../models");

// // /api/categorys/all
// // get all categorys from the signed in user
router.get("/comments", function (req, res) {
    // console.log('I am the comment route', req, res);
    db.Comments.find()
    .then(comments => res.json(comments))
    .catch(err => res.json(err));
});

module.exports = router;