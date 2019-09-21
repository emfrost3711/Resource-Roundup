const router = require("express").Router();
const db = require("../../models");

// // /api/categorys/all
// // get all categorys from the signed in user
router.get("/", function (req, res) {
    console.log('I am the category route', req, res);
    db.Category_List.find()
        .then(categories => res.json(categories))
        .catch(err => res.json(err));
});

// db.Category_List.create({ category: "sample category" })
// .then(function(dbCategory_List) {
//   console.log(dbCategory_List);
// })
// .catch(function(err) {
//   console.log(err.message);
// });

module.exports = router;