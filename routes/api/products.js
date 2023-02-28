const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Product = require('../../models/Product');
const checkObjectId = require('../../middleware/checkObjectId');
const { getProducts } = require('../../controllers/products');

// @route    POST api/products
// @desc     Create a products
// @access   Private
router.post(
  '/',
  auth,
  check('text', 'Text is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const product = await Product.findById(req.user.id).select('-password');

      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/products
// @desc     Get all prodcuts
// @access   Public
router.get(
  '/',
  async (req, res) => {
    try {
      const products = await getProducts()

      res.json({
        success: true,
        products
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
