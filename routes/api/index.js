const router = require("express").Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const resourceRoutes = require("./resourceRoutes");
const tagRoutes = require("./tagRoutes");

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);
router.use("/resources", resourceRoutes)
router.use("/tagRoutes", tagRoutes)

module.exports = router;
