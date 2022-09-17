const {
  getProductService,
  createProductService,
  updateByIdProductService,
  bulkUpdateProductService,
} = require("../services/productServices");

exports.getProduct = async (req, res, next) => {
  const result = await getProductService();
  res.status(200).json({
    status: "Success",
    data: result,
  });
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
