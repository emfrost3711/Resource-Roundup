//ROUTER FILE CODE COPIED FROM THE "todoRoutes.js" as a reference to get started on the resourceRoutes.js
//See activity 18-mongoose Activity 14

const router = require("express").Router();
const db = require("../../models");

// // /api/todos/all
// // get all todos from the signed in user
router.get("/resources", function (req, res) {
    console.log('I am the resources route', req, res);
    db.Resource.find({ }, (err, resources) => {
        res.json(resources);
    });
});

module.exports = router;

// // /api/todos/new
// // add new todo, update the user to have todo id
// router.post("/new", authMiddleware.isLoggedIn, function (req, res, next) {
//     const newTodo = new db.Todo({
//         author: req.user._id,
//         todo: req.body.todo
//     });

//     newTodo.save((err, newTodo) => {
//         if (err) throw err;
//         db.User.findByIdAndUpdate(req.user.id, { $push: { todos: newTodo._id } }, (err, user) => {
//             if (err) throw err;
//             res.send(newTodo, user);
//         });
//     });
// });