const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
    maxLength: 20
  },
  type: {
    type: String,
    default: "Income"
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
}, { timestamps: true });

const Income = mongoose.model("Income", IncomeSchema);

module.exports = Income;