var xlsx = require('node-xlsx');
var fs = require('fs');
const Product = require('../models/Product');

async function readProductFromXlsx() {
  try {
    var obj = xlsx.parse(fs.readFileSync(__dirname + './../test.xlsx')); // parses a buffer

    var products = [];

    for (let i = 1; i < obj[0].data.length; i++) {
      const row = {
        data: '',
        rank2021: '',
        discountCode: '',
        discountedPrice: '',
        intishipping: '',
        warrantyReturn: '',
        leds: '',
        multiwave: '',
        pulse: '',
        control: '',
        peakPower: '',
        av9: '',
        totalPowerWatts: '',
        perLedPrice: '',
        perWattPrice: '',
        emfissues: '',
        flickerIssues: '',
        sound: ''
      };
      products.push(row);
    }

    for (let i = 1; i < obj[0].data.length; i++) {
      const element = obj[0].data[i];
      for (let j = 1; j < 17; j++) {
        if (i === 1) products[j].data = element[j];
        if (i === 2) products[j].rank2021 = element[j];
        if (i === 3) products[j].discountCode = element[j];
        if (i === 4) products[j].discountedPrice = element[j];
        if (i === 5) products[j].intishipping = element[j];
        if (i === 7) products[j].warrantyReturn = element[j];
        if (i === 9) products[j].leds = element[j];
        if (i === 10) products[j].multiwave = element[j];
        if (i === 11) products[j].pulse = element[j];
        if (i === 12) products[j].control = element[j];
        if (i === 15) products[j].peakPower = element[j];
        if (i === 16) products[j].av9 = element[j];
        if (i === 17) products[j].totalPowerWatts = element[j];
        if (i === 19) products[j].perLedPrice = element[j];
        if (i === 20) products[j].perWattPrice = element[j];
        if (i === 22) products[j].emfissues = element[j];
        if (i === 23) products[j].flickerIssues = element[j];
        if (i === 24) products[j].sound = element[j];
      }
    }

    for (let i = 0; i < products.length; i++) {
      await createProduct(products[i]);
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function createProduct(product) {
  var _product = new Product(product);
  _product = await _product.save();
  console.log('Created new product', _product?._id);
  return _product;
}

// Get Products data
async function getProducts() {
  const products = await Product.find();
  console.log("products", products);
  return products;
}

module.exports = { readProductFromXlsx, createProduct, getProducts };
