const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const questions = require("./data/questions.json");
const fs = require("fs");
app.use(express.json());

app.get("/questions", (req, res) => {
  res.json(questions);
});
app.post("/addpost", (req, res) => {
  res.json(req.body);
  const data = fs.readFileSync("./data/questions.json");
  const postList = JSON.parse(data);

  postList.unshift(req.body);
  const addedPost = JSON.stringify(postList);
  fs.writeFile("./data/questions.json", addedPost, (err) => {
    if (err) {
      throw err;
      console.log(`error ${err} `);
    } else {
      console.log("New data added");
    }
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
