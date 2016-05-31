var express = require('express');
var router = express.Router();

Customer = require('../models/customer.js');
Invoice = require('../models/invoice.js');

// Get All Customers
router.get('/', function(req, res){
	Invoice.getInvoices(function(err, invoices){
		if(err){
			res.send(err);
		}
		res.json(invoices);
	});
});

// Get Single Invoice
router.get('/:id', function(req, res){
	Invoice.getInvoiceById(req.params.id, function(err, invoice){
		if(err){
			res.send(err);
		}
		res.json(invoice);
	});
});

// Add Invoice
router.post('/', function(req, res){
	var invoice = req.body;
	Invoice.addInvoice(invoice, function(err, invoice){
		if(err){
			res.send(err);
		}
		res.json(invoice);
	});
});
