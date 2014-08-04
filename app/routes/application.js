
export default Ember.Route.extend({
	directAdderDoi: 'blah',
	actions: {
		addDoi: function (doi) {
			this.transitionTo('add.doi', doi);
		}
	}
});
