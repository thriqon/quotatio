import {test, moduleForModel } from 'ember-qunit';

moduleForModel('publication');

test('RIS Export - should not fail', function () {
	expect(1);
	var model = this.subject();
	Ember.run(model, 'set', 'typeOfReference', 'book');
	notEqual(model.asRIS().length, 0, "Length is zero");
});

test('RIS Export - should fail if TypeOfReference is not set', function () {
	expect(1);
	var model = this.subject();
	Ember.run(model, 'set', 'typeOfReference', '');
	raises(function () {
		model.asRIS();
	}, Error, "did not fail");
});

test('RIS Export - should output valid RIS', function () {
	expect(1);
	var model = this.subject();
	Ember.run(model, 'set', 'typeOfReference', 'book');
	equal(model.asRIS(), 'TY  - book\r\nER  - \r\n', "did not output valid RIS");
});

test('RIS Import - should parse simple RIS correctly', function () {
	expect(1);
	var model = this.subject();
	Ember.run(model, 'setFromRISString', 'TY  - book\nER  - \n');
	equal(model.get('typeOfReference'), 'book', "did not recognize TY");
});
