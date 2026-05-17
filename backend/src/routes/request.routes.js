const express = require("express");
const {
  listRequestsHandler,
  getRequestDetailsHandler,
} = require("../controllers/request.controller");

const router = express.Router();

router.get("/", listRequestsHandler);
router.get("/:id", getRequestDetailsHandler);

module.exports = router;