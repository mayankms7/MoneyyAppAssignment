const mongoose = require('mongoose');
const uuid = require('node-uuid');
const { format } = require('date-fns');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Product must have a name!'],
  },
  price: {
    type: Number,
    required: [true, 'A Product must have a price!'],
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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
