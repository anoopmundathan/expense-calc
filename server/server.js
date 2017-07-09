const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// import model
var Expense = require('./models/expense').Expense;

const app = express();

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());

// Database configuration
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/expense-calc-db');
const db = mongoose.connection;

db.on('error', err => {
    console.log(`Mongoose error ${err}`);
});

db.once('open', () => {
    console.log('Mongoose connection opened');
});

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/expenses', (req, res, next) => {
    Expense.create(req.body, (err) => {
        if(err) return next(err);
        return res.status(201).end();
    });
});

// Send 404 if route is not found
app.use((req, res, next) => {
    var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

app.listen(PORT, () => {
    console.log(`API Server running at port ${PORT}`);
});