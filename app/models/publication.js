
import RisConverter from '../converters/ris';
import BibtexConverter from '../converters/bibtex';

var PublicationModel = DS.Model.extend(RisConverter, BibtexConverter, {
	typeOfReference : DS.attr('string'), TY: Ember.computed.alias('typeOfReference'),

	authors: DS.attr('stringarray'),
	secondaryAuthors: DS.attr('stringarray'),
	tertiaryAuthors: DS.attr('stringarray'),
	subsidiaryAuthors: DS.attr('stringarray'),
	abstract: DS.attr('string'), AB: Ember.computed.alias('abstract'),
	authorAddress: DS.attr('string'), AD: Ember.computed.alias('authorAddress'),
	accessionNumber: DS.attr('string'),
	custom1: DS.attr('string'), C1: Ember.computed.alias('custom1'),
	custom2: DS.attr('string'), C2: Ember.computed.alias('custom2'),
	custom3: DS.attr('string'), C3: Ember.computed.alias('custom3'),
	custom4: DS.attr('string'), C4: Ember.computed.alias('custom4'),
	custom5: DS.attr('string'), C5: Ember.computed.alias('custom5'),
	custom6: DS.attr('string'), C6: Ember.computed.alias('custom6'),
	custom7: DS.attr('string'), C7: Ember.computed.alias('custom7'),
	custom8: DS.attr('string'), C8: Ember.computed.alias('custom8'),

	caption: DS.attr('string'),
	callNumber: DS.attr('string'),
	placePublished: DS.attr('string'),
	date: DS.attr('string'),
	nameOfDatabase: DS.attr('string'),
	doi: DS.attr('string'),
	databaseProvider: DS.attr('string'),
	endPage: DS.attr('string'),
	edition: DS.attr('string'),
	number: DS.attr('string'),
	alternateTitle: DS.attr('string'),
	keywords: DS.attr('stringarray'),
	//fileAttachments:
	//figure:
	language: DS.attr('string'),
	label: DS.attr('string'),
	//number: DS.attr('string'), (M1)
	typeOfWork: DS.attr('string'),
	notes: DS.attr('string'),
	numberOfVolumes: DS.attr('string'),

	originalPublication: DS.attr('string'),
	publisher: DS.attr('string'),
	year: DS.attr('string'),
	reviewedItem: DS.attr('string'),
	researchNotes: DS.attr('string'),
	reprintEdition: DS.attr('string'),
	section: DS.attr('string'),
	isbn: DS.attr('string'),
	issn: Ember.computed.alias('isbn'),
	startPage: DS.attr('string'),
	shortTitle: DS.attr('string'),
	primaryTitle: DS.attr('string'),
	secondaryTitle: DS.attr('string'),
	tertiaryTitle: DS.attr('string'),
	translatedAuthor: DS.attr('string'),
	title: DS.attr('string'),
	url: DS.attr('string'),
	volume: DS.attr('string'),
	accessDate: DS.attr('string'),
});

export default PublicationModel;
