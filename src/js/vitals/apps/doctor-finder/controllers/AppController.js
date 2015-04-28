(function (ng) {
	"use strict";

	/**
	 * @module vitals.apps.doctor-finder
	 */
	ng.module('vitals.apps.doctor-finder').controller('AppController', AppController);

	/**
	 * Defines the services that need to be injected into the controller. Allows a minifier to rename the function
	 * parameters without affecting which services are actually injected into the controller.
	 *
	 * Note: This must be kept in sync with the actual arguments in the constructor declaration.
	 *
	 * @type {string[]}
	 */
	AppController.$inject = ['DoctorFinderService'];

	/**
	 * @constructor
	 */
	function AppController(doctorFinderService) {
		this.doctorFinderService = doctorFinderService;
	}

	/**
	 * @returns {string}
	 */
	AppController.prototype.getPageTitle = function () {
		return 'Doctor Finder';
	};

}(angular));
