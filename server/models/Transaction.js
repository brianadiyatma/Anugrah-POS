const mongoose = require("mongoose");

const { Schema } = mongoose;

const Transaction = new Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  user: {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  products: [
    {
      product: {
        require: true,
        type: Object,
      },
      productId: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
});

module.exports = mongoose.model("Transaction", Transaction);
