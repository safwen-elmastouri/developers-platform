const express = require("express");
const router = express.Router();
const fs = require("fs");
const { MongoClient, ObjectId } = require("mongodb");
const Model = require("../models/model");
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
    const data = await collection.find({}).sort({ _id: -1 }).toArray();

    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/* router.post("/addpost", async (req, res) => {
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
 */

//Post Method
router.post("/addpost", async (req, res) => {
  const data = new Model({
    post: req.body,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    console.log("Post published");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/post/:id", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("postList");

    collection
      .updateOnee(
        { _id: ObjectId(req.body._id) }, // Filter
        { $set: { data: req.body } } // Update
      )
      .then((obj) => {
        console.log("Updated - " + obj);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
    console.log("updated");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
