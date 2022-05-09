const Product = require("../models/product");

exports.addProduct = (req, res) => {
  const { name, price, description, image, buyPrice, category, quantity } =
    req.body;

  if (
    !name ||
    !price ||
    !description ||
    !image ||
    !buyPrice ||
    !category ||
    !quantity
  ) {
    return res.status(400).json({
      message: "Tolong isi semua field",
    });
  }

  if (
    typeof price !== "number" ||
    typeof buyPrice !== "number" ||
    typeof quantity !== "number"
  ) {
    return res.status(400).json({
      message: "Harga, harga beli, dan quantity harus berupa angka",
    });
  }

  const product = new Product({
    name,
    price,
    description,
    image: req.file.filename,
    buyPrice,
    category,
    createdBy: req.user._id,
    quantity,
  });

  product
    .save()
    .then(() =>
      res.json({
        message: "Produk Berhasil Ditambahkan",
      })
    )
    .catch((err) =>
      res.status(400).json({
        error: err,
      })
    );
};

exports.updateProduct = (req, res) => {
  const { name, price, description, image, buyPrice, category, quantity } =
    req.body;
  if (
    !name ||
    !price ||
    !description ||
    !image ||
    !buyPrice ||
    !category ||
    !quantity
  ) {
    return res.status(400).json({
      message: "Tolong isi semua field",
    });
  }

  if (
    typeof price !== "number" ||
    typeof buyPrice !== "number" ||
    typeof quantity !== "number"
  ) {
    return res.status(400).json({
      message: "Harga, harga beli, dan quantity harus berupa angka",
    });
  }

  Product.findByIdAndUpdate(req.params.id, {
    name,
    price,
    description,
    image: req.file.filename,
    buyPrice,
    category,
    createdBy: req.user._id,
    quantity,
  })
    .then(() =>
      res.json({
        message: "Product Berhasil Diedit",
      })
    )
    .catch((err) =>
      res.status(404).json({
        error: err,
      })
    );
};

exports.getOneProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) =>
      res.status(404).json({
        error: err,
      })
    );
};
exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) =>
      res.status(404).json({
        error: err,
      })
    );
};
