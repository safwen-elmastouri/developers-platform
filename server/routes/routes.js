const express = require("express");
const router = express.Router();
const fs = require("fs");
const { MongoClient } = require("mongodb");
const ListPost = require("../models/model");
const mongoURL = process.env.DATABASE_URL;
const dbName = "social-media";

const client = new MongoClient(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
router.get("/questions", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);

    const collection = db.collection("postList");
    const data = await collection.find({}).toArray();

    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/addpost", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("postList");
    let result = await collection.insertOne(req.body);
    res.send(result).status(204);
    console.log("Post published");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

router.patch("post/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    console.log(itemId);
    // Find and update the item in the MongoDB collection
    const updatedItem = await ListPost.findByIdAndUpdate(itemId, req.body);

    res.json(updatedItem);
    console.log("updated")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
