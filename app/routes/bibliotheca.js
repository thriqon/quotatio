
export default Ember.Route.extend({
	model: function () {
		return Ember.RSVP.hash({
			publications: this.get('store').find('publication')
		});
	}
});
