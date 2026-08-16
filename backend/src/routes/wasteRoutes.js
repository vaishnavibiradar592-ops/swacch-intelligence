const express = require("express");

const {
  getWasteRecords,
  createWasteRecord
} = require("../controllers/wasteController");

const router = express.Router();

router.get("/", getWasteRecords);

router.post("/", createWasteRecord);

module.exports = router;