var xlsx = require('node-xlsx');
var fs = require('fs');
const Product = require('../models/Product');

async function readProductFromXlsx() {
  try {
    var obj = xlsx.parse(fs.readFileSync(__dirname + './../test.xlsx')); // parses a buffer
    var products = [];

    for (let i = 1; i < obj[0].data.length; i++) {
      console.log(' obj[0].data[1]', obj[0].data[i]);
      const row = {
        name: obj[0].data[i][0],
        company: obj[0].data[i][1],
        class: obj[0].data[i][2],
        releasedYear: obj[0].data[i][3],
        discountCode: obj[0].data[i][4],
        productLink: obj[0].data[i][5],
        youtubeReview: obj[0].data[i][6],
        discountedPrice: obj[0].data[i][7],
        shippingUSA: obj[0].data[i][8],
        shippingAustralia: obj[0].data[i][9],
        shippingUK: obj[0].data[i][10],
        height: obj[0].data[i][11],
        width: obj[0].data[i][12],
        weight: obj[0].data[i][13],
        cable: obj[0].data[i][14],
        pulsing: obj[0].data[i][15],
        modularSupport: obj[0].data[i][16],
        stands: obj[0].data[i][17],
        inbuiltTimer: obj[0].data[i][18],
        warranty: obj[0].data[i][19],
        returnsPolicy: obj[0].data[i][20],
        leds: obj[0].data[i][21],
        ledDualChip: obj[0].data[i][22],
        ledChipPower: obj[0].data[i][23],
        led480: obj[0].data[i][24],
        wavelengths610: obj[0].data[i][25],
        wavelengths630: obj[0].data[i][26],
        wavelengths660: obj[0].data[i][27],
        wavelengths810: obj[0].data[i][28],
        wavelengths830: obj[0].data[i][29],
        wavelengths850: obj[0].data[i][30],
        wavelengths930: obj[0].data[i][31],
        wavelengths950: obj[0].data[i][32],
        testedPeakWavelengths: obj[0].data[i][33],
        totalPowerOutput: obj[0].data[i][34],
        power9spots: obj[0].data[i][35],
        peakPowerCombined: obj[0].data[i][36],
        wattageDraw: obj[0].data[i][37],
        discountedPerLed: obj[0].data[i][38],
        discountedPerWatt: obj[0].data[i][39],
        EMFElectric3: obj[0].data[i][40],
        EMFElectric6: obj[0].data[i][41],
        magnetic3: obj[0].data[i][42],
        magnetic6: obj[0].data[i][43],
        micowave3: obj[0].data[i][44],
        micowave6: obj[0].data[i][45],
        flicker: obj[0].data[i][46],
        sound: obj[0].data[i][47],
        certificates: obj[0].data[i][48],
        dataValid: obj[0].data[i][49]
      };

      console.log(row);
      products.push(row);
    }

    for (let i = 0; i < products.length; i++) {
      await createProduct(products[i]);
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function readProductFromXlsx1() {
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
  return _product;
}

// Get Products data
async function getProducts() {
  const products = await Product.find();
  return products;
}

module.exports = { readProductFromXlsx, createProduct, getProducts };
