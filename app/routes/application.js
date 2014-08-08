
export default Ember.Route.extend({
	actions: {
		addDoi: function (doi) {
			this.transitionTo('load.doi', doi);
		}
	}
});
