var myApp = angular.module('myApp', ['ngRoute']);
console.log('running');
myApp.config(function($routeProvider){
	$routeProvider.when('/',{
		controller: 'DashboardController',
		templateUrl: '/static/views/dashboard.html'
	})
	.when('/customers',{
		controller: 'CustomersController',
		templateUrl: '/static/views/customers.html'
	})
	.when('/customers/details/:id',{
		controller: 'CustomersController',
		templateUrl: '/static/views/customer_details.html'
	})
	.when('/invoices',{
		controller: 'InvoicesController',
		templateUrl: '/static/views/invoices.html'
	})
	.when('/invoices/details/:id',{
		controller: 'InvoicesController',
		templateUrl: '/static/views/invoice_details.html'
	})
	.when('/customers/add', {
    	controller: 'CustomersController',
    	templateUrl: '/static/views/add_customer.html'
  	})
  	.when('/invoices/add', {
    	controller: 'InvoicesController',
    	templateUrl: '/static/views/add_invoice.html'
  	})
  	.when('/customers/edit/:id',{
		controller: 'CustomersController',
		templateUrl: '/static/views/edit_customer.html'
	})
	.when('/invoices/edit/:id',{
		controller: 'InvoicesController',
		templateUrl: '/static/views/edit_invoice.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
