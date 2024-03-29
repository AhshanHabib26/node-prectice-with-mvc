const {
  getProductService,
  createProductService,
  updateByIdProductService,
  bulkUpdateProductService,
  deletePoductServiceById,
  bulkDeleteProductService,
} = require("../services/productServices");

exports.getProduct = async (req, res, next) => {
  try {
    const productFilter = { ...req.query };
    const excludesField = ["sort", "page", "limit"];
    excludesField.forEach((field) => delete productFilter[field]);

    const queries = {};

    if (req.query.sort) {
      const bySort = req.query.sort.split(",").join(" ");
      queries.bySort = bySort;
    }

    if (req.query.fields) {
      const byFields = req.query.fields.split(",").join(" ");
      queries.byFields = byFields;
      console.log(byFields);
    }
    if (req.query.limit) {
      const byLimits = req.query.limit;
      queries.byLimits = byLimits;
    }

    const result = await getProductService(productFilter, queries);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Product Doesn't Get",
      error: error.message,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = await createProductService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Product Successfully Inserted",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product Doesn't Inserted",
      error: error.message,
    });
  }
};
exports.createProduct = async (req, res, next) => {
  try {
    const product = await createProductService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Product Successfully Inserted",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product Doesn't Inserted",
      error: error.message,
    });
  }
};
exports.updateProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const product = await updateByIdProductService(id, data);
    res.status(200).json({
      status: "Success",
      message: "Product Successfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product Doesn't Updated",
      error: error.message,
    });
  }
};
exports.bulkProductUpdate = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await bulkUpdateProductService(data);
    res.status(200).json({
      status: "Success",
      message: "Product Successfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product Doesn't Updated",
      error: error.message,
    });
  }
};
exports.deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await deletePoductServiceById(id);

    if (!product.deletedCount) {
      return res.status(400).json({
        status: "Failed",
        error: "Couldn't Delete the Product",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Product Successfully Deleted",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product Doesn't Deleted",
      error: error.message,
    });
  }
};
exports.bulkProductDelete = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await bulkDeleteProductService(data);

    res.status(200).json({
      status: "Success",
      message: "Product Successfully Deleted",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product Doesn't Delete",
      error: error.message,
    });
  }
};
