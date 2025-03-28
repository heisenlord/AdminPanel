const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  photo: String,
  title: String,
  zoomLink: String,
  description: String,
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
