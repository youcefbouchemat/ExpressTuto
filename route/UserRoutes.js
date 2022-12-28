const express = require("express");
const { addUser, getUsers } = require("../controller/UserController");
const router = express.Router();

router.route("/user").post(addUser);
router.route("/user").get(getUsers);

module.exports = router;
