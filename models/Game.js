const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  console: {
    type: String,
    required: true,
  },
  graphics: {
    type: Number,
    required: true,
  },
  music: {
    type: Number,
    required: true,
  },
  gameplay: {
    type: Number,
    required: true,
  },
  fun: {
    type: Number,
    required: true,
  },
  npc: {
    type: Number,
    required: true,
  },
  exploration: {
    type: Number,
    required: true,
  },
  world: {
    type: Number,
    required: true,
  },
  story: {
    type: Number,
    required: true,
  },
});

module.exports = User = mongoose.model("games", GameSchema);
