const mongoose = require("mongoose");

// Product Schema Create

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, " Name Minimum Three Characters"],
      maxLength: [100, "Name Maximum Three Characters"],
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    unit: {
      type: String,
      required: true,
      enum: {
        // If You Have Predefined Data Then Use  Enum
        values: ["kg", "litre", "pcs"],
        meassage: "unit value can't {VALUE}, must be kg/litre/pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: (value) => {
          // Custom Validatior
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quntity is Must be an Integer",
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        meassage: "Status can't be {VALUE}",
      },
    },
  },
  { timestamps: true }
);

// Product Model Create

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
