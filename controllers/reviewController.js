const Review = require('../models/review');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const { format } = require('date-fns');

exports.getAllReviews = async (req, res, next) => {
  try {
    const features = new APIFeatures(Review.find(), req.query)
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

exports.createReview = async (req, res, next) => {
  try {
    const data = await Review.create({
      userId: req.body.userId,
      productId: req.body.productId,
      description: req.body.description,
    });

    res.status(201).json({
      status: 'Success',
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const data = await Review.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Success',
    });
  } catch (err) {
    next(err);
  }
};
