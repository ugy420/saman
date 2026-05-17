const express = require("express");
const {
  createUserHandler,
  getUserByIdHandler,
  listUsersHandler,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/", createUserHandler);
router.get("/", listUsersHandler);
router.get("/:id", getUserByIdHandler);

module.exports = router;