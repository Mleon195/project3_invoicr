var mongoose = require('mongoose');

// Customer Schema
var customerSchema = mongoose.Schema({
	first_name:{
		type: String,
		required: true
	},
	last_name:{
		type: String,
		required: true
	},
	company:{
		type: String
	},
	logo_url:{
		type: String
	},
	email:{
		type: String,
		required: true
	},
	phone:{
		type: String
	},
	address:{
		street: String,
		city: String,
		state: String,
		zip: String
	},
	createdAt:{
		type: Date,
		default: Date.now
	},
});

var Customer = module.exports = mongoose.model('Customer', customerSchema);
