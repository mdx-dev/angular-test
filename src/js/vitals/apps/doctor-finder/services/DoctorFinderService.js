(function (ng) {
	"use strict";

	/**
	 * @module vitals.apps.doctor-finder
	 */
	ng.module('vitals.apps.doctor-finder').service('DoctorFinderService', DoctorFinderService);

	/**
	 * Defines the services that need to be injected. Allows a minifier to rename the function
	 * parameters without affecting which services are actually injected.
	 *
	 * Note: This must be kept in sync with the actual arguments in the constructor declaration.
	 *
	 * @type {string[]}
	 */
	DoctorFinderService.$inject = ['DoctorService'];

	/**
	 * This service acts as a model for all of the data that is shared between the controllers
	 * in this module. It also acts as an interface to all of the shared services.
	 *
	 * @constructor
	 */
	function DoctorFinderService(doctorService) {
		this.doctorService = doctorService;
	}

	/**
	 * @type {Array}
	 */
	DoctorFinderService.prototype.doctors = [];

	/**
	 * @type {null}
	 */
	DoctorFinderService.prototype.selectedDoctor = null;

	/**
	 * Load and cache the list of doctors.
	 */
	DoctorFinderService.prototype.loadDoctors = function () {
		var handler = new LoadDoctorsHandler(this);
		var promise = this.doctorService.getAll();

		promise.success(handler.onSuccess);
		promise.error(handler.onError);
	};

	/**
	 * @param doctor
	 */
	DoctorFinderService.prototype.selectDoctor = function (doctor) {
		this.selectedDoctor = doctor;
	};

	/**
	 * @param doctor
	 * @returns {boolean}
	 */
	DoctorFinderService.prototype.doctorIsSelected = function (doctor) {
		return this.selectedDoctor && doctor.id == this.selectedDoctor.id;
	};


	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

	/**
	 * Response handlers for loading doctors.
	 *
	 * @param {DoctorFinderService} target
	 * @constructor
	 */
	function LoadDoctorsHandler(target) {
		this.onSuccess = function (data, status, headers, config) {
			target.doctors = data['professionals'];
			target.selectedDoctor = target.doctors[0];
		};

		this.onError = function (data, status, headers, config) {
			// TODO: handle error
		};
	}

})(angular);