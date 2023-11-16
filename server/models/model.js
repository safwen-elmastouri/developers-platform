const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  post: {
    required: true,
    type: Object,
  },
});
const postList = mongoose.model("postList", dataSchema);
module.exports = postList;
