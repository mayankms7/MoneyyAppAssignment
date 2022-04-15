const mongoose = require('mongoose');
const uuid = require('node-uuid');
const { format } = require('date-fns');

const reviewSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  productId: {
    type: String,
    required: [true, 'A review must have a product id!'],
  },
  description: {
    type: String,
    required: [true, 'A review must have a description.!'],
  },
  cDate: {
    type: String,
    default: format(new Date(), 'yyyy/MM/dd/HH/mm/ss'),
  },
  uDate: {
    type: String,
    default: format(new Date(), 'yyyy/MM/dd/HH/mm/ss'),
  },
  _id: {
    type: String,
    default: uuid.v4,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
