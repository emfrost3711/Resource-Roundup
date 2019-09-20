const router = require("express").Router();
const db = require("../../models");

// // /api/categorys/all
// // get all categorys from the signed in user
router.get("/category", function (req, res) {
    console.log('I am the category route', req, res);
    db.Resource.find({ }, (err, resources) => {
        res.json(category);
    });
});

module.exports = router;