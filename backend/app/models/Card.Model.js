const mongoose = require("mongoose");
const Card = mongoose.model(
  "Card",
  new mongoose.Schema(
    {
      mainimage: String,
      title: String,
      price: Number,
    },
    {
      timestamps: true,
    }
  )
);
module.exports = { Card };
