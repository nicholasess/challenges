const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  title: String
});

module.exports = mongoose.model("product", Schema);
