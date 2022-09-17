const express = require("express");
const {
  getProduct,
  createProduct,
  updateProductById,
  bulkProductUpdate,
} = require("../controllers/product.controller");
const router = express.Router();

router.route("/").get(getProduct).post(createProduct);

router.route("/bulk-update").patch(bulkProductUpdate);

router.route("/:id").patch(updateProductById);

module.exports = router;
