(function (ng) {
	"use strict";

	/**
	 * @module vitals.apps.doctor-finder
	 */
	ng.module('vitals.apps.doctor-finder').controller('DoctorListController', DoctorListController);

	/**
	 * Defines the services that need to be injected into the controller. Allows a minifier to rename the function
	 * parameters without affecting which services are actually injected into the controller.
	 *
	 * Note: This must be kept in sync with the actual arguments in the constructor declaration.
	 *
	 * @type {string[]}
	 */
	DoctorListController.$inject = ['DoctorFinderService'];

	/**
	 * @constructor
	 */
	function DoctorListController(doctorFinderService) {
		this.doctorFinderService = doctorFinderService;
		this.doctorFinderService.loadDoctors();
	}



	// --------------------------------------------------------------------------------
	// While doctorFinderService could be called directly in the views, I prefer that
	// the view only know about the controller properties and methods. It just makes
	// it a little easier to refactor.
	//
	// The methods below just provide an interface to the service.
	// --------------------------------------------------------------------------------


	/**
	 * @type {Array}
	 */
	DoctorListController.prototype.doctors = function () {
		return this.doctorFinderService.doctors;
	};

	/**
	 * @param doctor
	 * @returns {boolean}
	 */
	DoctorListController.prototype.isSelected = function (doctor) {
		return this.doctorFinderService.doctorIsSelected(doctor);
	};

	/**
	 * @param doctor
	 */
	DoctorListController.prototype.select = function (doctor) {
		this.doctorFinderService.selectDoctor(doctor);
	};

}(angular));
