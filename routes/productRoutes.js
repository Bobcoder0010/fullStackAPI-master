// productRoutes.js
const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController.js");

router.post("/create", createProduct);
router.get("/getAll", getAllProducts);
router.get("/get/:id", getProductById);
router.patch("/updateProduct/:id", updateProductById);
router.delete("/delete/:id", deleteProductById);
module.exports = router;
