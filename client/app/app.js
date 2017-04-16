 angular.module('myapp',[
	'myapp.services',
	'myapp.pharam',
	'myapp.healthcare',
	'myapp.Equipment',
	'myapp.labo',
	'ngRoute'
	])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'app/main/main.html',
		controller:'AumetContr'
	})
	.when('/pharam', {
		templateUrl:'app/pharam/pharam.html',
		controller:'AumetContr'
	})
	.when('/healthcare', {
		templateUrl:'app/healthcare/healthcare.html',
		controller:'healthcareContr'
	})
	.when('/Equipment', {
		templateUrl:'app/Equipment/Equipment.html',
		controller:'EquipmentContr'
	})
	.when('/Laboratory', {
		templateUrl:'app/Laboratory/Laboratory.html',
		controller:'laborContr'
	})
	 .otherwise({redirectTo:'/'});

})
