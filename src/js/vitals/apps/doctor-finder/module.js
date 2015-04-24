(function (ng) {
	"use strict";

	/**
	 * @module vitals.apps.doctor-finder
	 */
	var app = ng.module('vitals.apps.doctor-finder', [

		// AngularJS Core Modules
		'ngRoute',
		'ngAnimate',

		// Vitals Modules
		'vitals.components'
	]);

	// Configure here, as needed.
	// app.config();

	app.run();

}(angular));