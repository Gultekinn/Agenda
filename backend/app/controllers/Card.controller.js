const mongoose = require("mongoose");
const { Card } = require("../models/Card.Model");

const cardController = {
  getAll: async (req, res) => {
    const target = await Card.find();
    res.send(target);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const target = await Card.findById(id);
    res.send(target);
  },
  add: async (req, res) => {
    const mainImageFile = req.files["mainimage"];

    if (!mainImageFile) {
      return res.status(400).json({ error: "No image files uploaded" });
    }

    const mainImage = mainImageFile[0].filename;

    let newCard = new Card({
      mainimage: mainImage,
      title: req.body.title,
      price: req.body.price,
    });
    await newCard.save();
    res.send(newCard);
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const { title,price } = req.body;
     const mainImageFile = req.files["mainimage"];

    try {
      const card = await Card.findById(id);

      if (!card) {
        return res.status(404).json({ error: "Card not found" });
      }

      // Update the card properties
      card.title = title;
      card.price = price;
      //Update the mainImage if uploaded
    if (mainImageFile) {
        card.mainimage = mainImageFile[0].filename;
      }

    
      // Save the updated card
      await card.save();

      res.status(200).json({ message: "Card updated successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update card" });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await Card.findByIdAndDelete(id);
    res.send(`${id}'s element has been deleted`);
  },
};
module.exports = { cardController };
