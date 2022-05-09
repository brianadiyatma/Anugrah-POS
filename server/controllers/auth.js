const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const isEmail = require("validator/lib/isEmail");
const isStrongPassword = require("validator/lib/isStrongPassword");
require("dotenv").config();

exports.signIn = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Email dan Password Wajib diisi",
    });
  }
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({
        message: "User Tidak Ditemukan",
      });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({
          message: "Email Atau Password Salah",
        });
      }
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        privilege: user.privilege,
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            return res.status(500).json({
              message: "Token Gagal Dibuat",
            });
          }
          res.status(200).json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              privilege: user.privilege,
            },
          });
        }
      );
    });
  });
};
exports.signUp = (req, res) => {
  const { name, email, password, privilege } = req.body;
  if (!name || !email || !password || !privilege) {
    return res.status(400).json({
      message: "Tolong Isikan Semua Kolom",
    });
  }

  if (!isEmail(email)) {
    return res.status(400).json({
      message: "Tolong Masukan Email Dengan Benar !",
    });
  }
  if (!isStrongPassword(password, { minSymbols: 0 })) {
    return res.status(400).json({
      message:
        "Tolong Masukkan Password Dengan Benar ! (Minimal 8 Karakter Dengan Satu Huruf Kapital dan Satu Angka)",
    });
  }

  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User Pernah Dibuat" });
    } else {
      const newUser = new User({
        name,
        email,
        password,
        privilege,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            res.status(201).json({
              message: "User Sukses Dibuat",
              name: user.name,
              email: user.email,
              privilege: user.privilege,
            });
          });
        });
      });
    }
  });
};
