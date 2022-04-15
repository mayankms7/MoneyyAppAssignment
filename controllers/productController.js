const Product = require('../models/product');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const { format } = require('date-fns');

exports.getAllProducts = async (req, res, next) => {
  try {
    const features = new APIFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const data = await features.query;

    res.status(200).json({
      status: 'Success',
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const data = await Product.findById(req.params.id);

    if (!data) {
      return next(new AppError('No Product with thid id!!!'));
    }
    res.status(200).json({
      status: 'Success',
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const data = await Product.create({
      name: req.body.name,
      price: req.body.price,
    });

    res.status(201).json({
      status: 'Success',
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      uDate: format(new Date(), 'yyyy/MM/dd/HH/mm/ss'),
    });

    if (!data) {
      return next(new AppError('No Product with thid id!!!'));
    }

    res.status(200).json({
      status: 'Success',
      data,
    });
  } catch (err) {
    next(err);
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Success',
    });
  } catch (err) {
    next(err);
  }
};
