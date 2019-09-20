const router = require("express").Router();
const db = require("../../models");

// // /api/todos/all
// // get all todos from the signed in user
router.get("/tags", function (req, res) {
    console.log('I am the tags route', req, res);
    db.Tag_List.find()
        .then(tags => res.json(tags))
        .catch(err => res.json(err));
});

module.exports = router;