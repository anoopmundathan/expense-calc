const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    id: Number,     
    totalAmount: Number,
    perHeadAmount: Number,
    personOneFinalAmount: Number,
    personTwoFinalAmount: Number
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports.Expense = Expense;