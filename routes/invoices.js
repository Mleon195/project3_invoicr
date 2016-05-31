var express = require('express');
var router = express.Router();

// Get All Invoices
router.get('/', function(req, res){
  res.send('/invoices route');
});

module.exports = router;
