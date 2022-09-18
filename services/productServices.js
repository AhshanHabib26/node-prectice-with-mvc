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

exports.bulkUpdateProductService = async (data) => {
  // 1st Way Without Send Data Object
  const result = await Product.updateMany({ _id: data.ids }, data, {
    runValidators: true,
  });
  return result;

  /*  ******Second Way With Send Data Object****** */

  //   const result = await Product.updateMany({ _id: data.ids }, data.data, {
  //     runValidators: true,
  //   });
  // return result;

  // // Bulk Update With Single ID And Single Product Update
  //   const products = [];
  //   data.ids.forEach((product) => {
  //     products.push(Product.updateOne({ _id: product.id }, product.data));
  //   });
  //   const result = await Promise.all(products);
  //   return result;
};

exports.deletePoductServiceById = async (productId) => {
  const result = await Product.deleteOne({ _id: productId });
  return result;
};

exports.bulkDeleteProductService = async (data) => {
  const result = await Product.deleteMany({ _id: data.ids });
  return result;
};
