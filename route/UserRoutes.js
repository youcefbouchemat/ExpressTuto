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

router.route("/user").post(addUser);
router.route("/user").get(getAllUsers);
router.route("/user/:id").get(validateIDFormat, getUser);
router.route("/user/:id").put(validateIDFormat, updateUser);
router.route("/user/:id").delete(validateIDFormat, deleteUser);

module.exports = router;
