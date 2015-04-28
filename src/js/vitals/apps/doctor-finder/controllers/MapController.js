(function (ng) {
	"use strict";

	/**
	 * @module vitals.apps.doctor-finder
	 */
	ng.module('vitals.apps.doctor-finder').controller('MapController', MapController);

	/**
	 * Defines the services that need to be injected into the controller. Allows a minifier to rename the function
	 * parameters without affecting which services are actually injected into the controller.
	 *
	 * Note: This must be kept in sync with the actual arguments in the constructor declaration.
	 *
	 * @type {string[]}
	 */
	MapController.$inject = ['$scope', '$element', 'DoctorFinderService'];

	/**
	 * @constructor
	 */
	function MapController($scope, $element, doctorFinderService) {
		this.$scope = $scope;
		this.$element = $element;
		this.doctorFinderService = doctorFinderService;

		this.initMap();
		this.initWatchers();
	}

	/**
	 * @type {google.maps.Map}
	 * @private
	 */
	MapController.prototype._map = null;

	/**
	 * @type {google.maps.Marker}
	 * @private
	 */
	MapController.prototype._selectedMarker = null;

	/**
	 * Initialize the map
	 */
	MapController.prototype.initMap = function () {
		this._map = new google.maps.Map(this.$element[0], {zoom: 12});
		this.panTo(new google.maps.LatLng(0, 0));
	};

	/**
	 * Initialize watchers
	 */
	MapController.prototype.initWatchers = function () {
		// Watch for changes to the selected doctor.
		var _this = this;
		this.$scope.$watch(
			function () {
				return _this.doctorFinderService.selectedDoctor;
			},
			function (newValue, oldValue) {
				if (newValue !== oldValue) {
					var doctor = newValue;
					var p = new google.maps.LatLng(
						doctor.locations[0].address.latitude,
						doctor.locations[0].address.longitude
					);

					_this.setMarker(p);
					_this.panTo(p);
				}
			}
		);
	};

	/**
	 * @param {google.maps.LatLng} position
	 */
	MapController.prototype.setMarker = function (position) {
		if (this._selectedMarker) this._selectedMarker.setMap(null);

		this._selectedMarker = new google.maps.Marker({
			position: position,
			map: this._map
		});
	};

	/**
	 * @param {google.maps.LatLng} position
	 */
	MapController.prototype.panTo = function (position) {
		this._map.panTo(position);
	};

}(angular));
