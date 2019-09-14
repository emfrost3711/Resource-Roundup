const router = require("express").Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const resourceRoutes = require("./resourceRoutes");

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);
router.use("/resources", resourceRoutes)

module.exports = router;
