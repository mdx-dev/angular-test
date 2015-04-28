(function (ng) {
	"use strict";

	/**
	 * @module vitals.components
	 */
	ng.module('vitals.components').service('DoctorService', DoctorService);

	/**
	 * Defines the services that need to be injected. Allows a minifier to rename the function
	 * parameters without affecting which services are actually injected.
	 *
	 * Note: This must be kept in sync with the actual arguments in the constructor declaration.
	 *
	 * @type {string[]}
	 */
	DoctorService.$inject = ['$http'];

	/**
	 * @constructor
	 */
	function DoctorService($http) {
		this.$http = $http;
	}

	/**
	 * Retrieves a list of doctors.
	 *
	 * @returns {HttpPromise}
	 */
	DoctorService.prototype.getAll = function () {
		return this.$http.get('data/search.json');
	};

})(angular);