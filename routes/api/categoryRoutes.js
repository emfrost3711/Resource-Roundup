const router = require("express").Router();
const db = require("../../models");

// // /api/categorys/all
// // get all categorys from the signed in user
router.get("/category", function (req, res) {
    console.log('I am the category route', req, res);
    db.Category_List.find()
        .then(categories => res.json(categories))
        .catch(err => res.json(err));
});

module.exports = router;