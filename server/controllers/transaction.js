const Product = require("../models/product");
const Transaction = require("../models/transaction");
const User = require("../models/user");

exports.addToCart = (req, res, next) => {
  const { productId } = req.body;
  const userId = req.user._id;
  Product.findById(productId).then((product) => {
    if (!product) {
      return res.status(404).json({
        message: "Produk tidak ditemukan",
      });
    }
    if (product.quantity < 1) {
      return res.status(400).json({
        message: "Produk tidak tersedia",
      });
    }
    return User.findById(userId).then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User tidak ditemukan",
        });
      }
      const cart = user.cart;
      const index = cart.findIndex(
        (item) => item.productId.toString() === productId
      );
      if (index === -1) {
        cart.push({
          productId,
          quantity: 1,
        });
      } else {
        cart[index].quantity += 1;
      }
    });
  });
};
