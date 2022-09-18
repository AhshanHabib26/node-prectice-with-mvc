const express = require("express");
const {
  getProduct,
  createProduct,
  updateProductById,
  bulkProductUpdate,
  deleteProductById,
  bulkProductDelete,
} = require("../controllers/product.controller");
const router = express.Router();

router.route("/").get(getProduct).post(createProduct);

router.route("/bulk-update").patch(bulkProductUpdate);
router.route("/bulk-delete").delete(bulkProductDelete);

router.route("/:id").patch(updateProductById).delete(deleteProductById)

module.exports = router;
