const router = require("express").Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const resourceRoutes = require("./resourceRoutes");
const tagRoutes = require("./tagRoutes");
const commentRoutes = require("./commentRoutes")

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);
router.use("/resources", resourceRoutes);
router.use("/tagRoutes", tagRoutes);
// router.use("/commentRoutes", commentRoutes)

module.exports = router;
