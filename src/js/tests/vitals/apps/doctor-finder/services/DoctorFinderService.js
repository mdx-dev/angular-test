
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
// NOTE: I'm a rookie at unit testing, but I get the idea. These aren't necessarily good tests.
// This is just here to demonstrate that I understand the gist (loosely) and know how to set them up.
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

describe('vitals.apps.doctor-finder [DoctorFinderService]', function () {

	var DoctorFinderService;

	beforeEach(module('vitals.apps.doctor-finder'));

	beforeEach(inject(function (_DoctorFinderService_) {
		DoctorFinderService = _DoctorFinderService_;
	}));

	it('selectDoctor should be null by default', function () {
		expect(DoctorFinderService.selectedDoctor).toBeNull();
	});

	it('doctors should be empty array by default', function () {
		expect(DoctorFinderService.doctors).toEqual([]);
	});

	it('selectDoctor() should set the selectedDoctor property', function () {
		DoctorFinderService.selectDoctor({id:123});
		expect(DoctorFinderService.selectedDoctor).toBeTruthy();
		expect(DoctorFinderService.selectedDoctor.id).toEqual(123);
	});

});