const Product = require("../models/product.schema");

exports.getProductService = async () => {
  const result = await Product.find({});
  return result;
};

exports.createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

exports.updateByIdProductService = async (id, data) => {
  const product = await Product.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return product;

  /* 
 Update Method 
*/

  //   const product = await Product.findById(id);
  //   const result = await product.set(data).save();
  //   return result;

/* 
 Increment Product Price 
*/

  // const product = await Product.updateOne(
  //     { _id: id },
  //     { $inc: data },
  //     {
  //       runValidators: true,
  //     }
  //   );
  //   return product;
};


