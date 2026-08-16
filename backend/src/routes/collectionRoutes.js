const express = require("express");

const {
  getCollections,
  createCollection
} = require("../controllers/collectionController");

const router = express.Router();

router.get("/", getCollections);

router.post("/", createCollection);

module.exports = router;