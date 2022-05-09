const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory");
const upload = require("../middlewares/multer");

router.post("/add-product",upload.single('image'), inventoryController.addProduct);
router.post("/update-put/:id", inventoryController.updateProduct);
router.get("/get-one-product/:id", inventoryController.getOneProduct);
router.get("/get-all-products", inventoryController.getAllProducts);

module.exports = router;
