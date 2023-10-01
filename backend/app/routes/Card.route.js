const express = require("express");
const { cardController } = require("../controllers/Card.controller");
const store = require("../middlewares/multer");
const cardValidation = require("../validations/Card.validation");
const router = express.Router();
const multer = require("multer");

// Multer ile dosya yükleme ayarları
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Tüm kartları getir
router.get("/", cardController.getAll);

// Belirli bir kartı ID ile getir
router.get("/:id", cardController.getById);

// Yeni kart ekleme
router.post(
  "/",
  // "mainimage" adlı alan için bir resim yükleme izni
  upload.fields([
    { name: 'mainimage', maxCount: 1 },
  ]),
  cardController.add
);

// Kart düzenleme
router.put("/:id",
  // "mainimage" adlı alan için bir resim yükleme izni
  upload.fields([
    { name: 'mainimage', maxCount: 1 },
  ]),
  cardController.edit
);

// Kartı silme
router.delete("/:id", cardController.delete);

module.exports = router;
