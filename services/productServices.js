const Product = require('../models/product.schema')

exports.getProductService = async () =>{
    const result = await Product.find({})
    return result
}


exports.createProductService = async (data) =>{
    const product = await Product.create(data)
    return product
}