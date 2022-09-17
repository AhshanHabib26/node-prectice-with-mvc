const {
  getProductService,
  createProductService,
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
