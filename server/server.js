const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const questions = require("./questions.json")
app.get("/questions", (req, res) => {
  res.json(questions);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
