const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  data: { type: String },
  rank2021: { type: String },
  discountCode: { type: String },
  discountedPrice: { type: String },
  intishipping: { type: String },
  warrantyReturn: { type: String },
  leds: { type: String },
  multiwave: { type: String },
  pulse: { type: String },
  control: { type: String },
  peakPower: { type: String },
  av9: { type: String },
  totalPowerWatts: { type: String },
  perLedPrice: { type: String },
  perWattPrice: { type: String },
  emfissues: { type: String },
  flickerIssues: { type: String },
  sound: { type: String },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('product', ProductSchema);
