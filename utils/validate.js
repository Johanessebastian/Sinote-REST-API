// validate.js

const { check, validationResult } = require('express-validator');

exports.validateRegister = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('Nama tidak boleh kosong'),
  check('email')
    .isEmail()
    .withMessage('Email tidak valid'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Kata sandi harus terdiri dari minimal 6 karakter'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validateLogin = [
  check('nameOrEmail')
    .not()
    .isEmpty()
    .withMessage('Nama atau Email tidak boleh kosong'),
  check('password')
    .not()
    .isEmpty()
    .withMessage('Kata sandi tidak boleh kosong'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validateTask = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('Nama tugas tidak boleh kosong'),
  check('description')
    .not()
    .isEmpty()
    .withMessage('Deskripsi tugas tidak boleh kosong'),
  check('deadline')
    .isISO8601()
    .toDate()
    .withMessage('Deadline harus berupa tanggal yang valid'),
  check('assignedTo')
    .not()
    .isEmpty()
    .withMessage('Penerima tugas tidak boleh kosong'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];
