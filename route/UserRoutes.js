const express = require("express");
const {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/UserController");
const validateIDFormat = require("../middlewares/checkIDFormat");
const router = express.Router();

router.use("/user/:id", validateIDFormat);

router.route("/user").post(addUser);
router.route("/user").get(getAllUsers);
router.route("/user/:id").get(getUser);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

module.exports = router;
