const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  post: {
    required: true,
    type: Object,
  },
});

module.exports = mongoose.model("Data", dataSchema);
