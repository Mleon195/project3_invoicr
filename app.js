var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var customers = require('./routes/customers');
var invoices = require('./routes/invoices');

// Mongoose Connect
mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOHQ_URL || 'mongodb://localhost/invoicr');
var db = mongoose.connection;

app.use("/static", express.static('Client'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	// console.log('is this running?');
	res.send(process.cwd() + "/Client/index.html");
});

app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

app.listen(process.env.PORT || 3000);

console.log('Started on port 3000...');
