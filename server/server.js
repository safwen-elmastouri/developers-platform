require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
  const mongoString = process.env.DATABASE_URL;

const port = process.env.PORT || 8000;

const app = express();

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
app.use(express.json());
app.use(cors());
const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
