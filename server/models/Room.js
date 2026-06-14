const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomId: String,

  roomName: {
    type: String,
    default: "Untitled Room",
  },

  code: String,

  language: {
    type: String,
    default: "javascript",
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Room", roomSchema);