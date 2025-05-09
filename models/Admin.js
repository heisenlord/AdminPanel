const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
  photo: String,
  title: String,
  linkDescription: String,
  createdAt: { type: Date, default: Date.now }, // Adds timestamp when inserted
});

const eventSchema = new mongoose.Schema({
  photo: String,
  title: String,
  zoomLink: String,
  description: String,
  createdAt: { type: Date, default: Date.now }, // Adds timestamp when inserted
});

const adminSchema = new mongoose.Schema({
  advertisements: [advertisementSchema], // Array of ads
  events: [eventSchema], // Array of events
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
