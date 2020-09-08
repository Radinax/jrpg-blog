const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Game Model
const Game = require("../../models/Game");

// @route  GET api/users/test
// @desc   Tests users route
// @access Public
router.get("/tests", (req, res) =>
  res.json({
    msg: "Users works",
  })
);

module.exports = router;
