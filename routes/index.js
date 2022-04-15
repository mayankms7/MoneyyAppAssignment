const express = require('express');
const router = express.Router();

//Routes
router.use('/api/v1/product', require('./productRoutes'));
router.use('/api/v1/review', require('./reviewRoutes'));

module.exports = router;
