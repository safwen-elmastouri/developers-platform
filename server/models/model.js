const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  post: {
    required: true,
    type: Object,
  },
});
const post = mongoose.model("Data", dataSchema);
module.exports = post;
