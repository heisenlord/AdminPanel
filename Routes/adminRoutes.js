const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

// Initialize Admin Document if not exists
async function initializeAdmin() {
  let admin = await Admin.findOne();
  if (!admin) {
    admin = new Admin({ advertisements: [], events: [] });
    await admin.save();
  }
  return admin;
}

// Add an Advertisement
router.post("/advertisements", async (req, res) => {
  try {
    const admin = await initializeAdmin();
    admin.advertisements.push(req.body);
    await admin.save();
    res.status(201).json(admin.advertisements);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Advertisements
router.get("/advertisements", async (req, res) => {
  try {
    const admin = await Admin.findOne();
    res.json(admin ? admin.advertisements : []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add an Event
router.post("/events", async (req, res) => {
  try {
    const admin = await initializeAdmin();
    admin.events.push(req.body);
    await admin.save();
    res.status(201).json(admin.events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Events
router.get("/events", async (req, res) => {
  try {
    const admin = await Admin.findOne();
    res.json(admin ? admin.events : []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an Advertisement
router.delete("/advertisements/:id", async (req, res) => {
  try {
    const admin = await Admin.findOne();
    if (!admin) return res.status(404).json({ message: "No Admin Data Found" });

    admin.advertisements = admin.advertisements.filter(
      (ad) => ad._id.toString() !== req.params.id
    );
    await admin.save();
    res.json({ message: "Advertisement deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an Event
router.delete("/events/:id", async (req, res) => {
  try {
    const admin = await Admin.findOne();
    if (!admin) return res.status(404).json({ message: "No Admin Data Found" });

    admin.events = admin.events.filter(
      (event) => event._id.toString() !== req.params.id
    );
    await admin.save();
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
