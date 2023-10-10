const express = require("express");
const router = express.Router();
const fs = require("fs");
const { MongoClient } = require("mongodb");
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
  await client.connect();
  const db = client.db(dbName);

  const collection = db.collection("postList");
  let result = await collection.insertOne(req.body);
  res.send(result).status(204);
  console.log("Post published");
});

module.exports = router;
