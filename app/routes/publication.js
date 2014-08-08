
var get = Ember.get;

export default Ember.Route.extend({
	model: function (params) {
		return this.get('store').find('publication', params.id);
	},
	serialize: function (model) {
		return {id: get(model, 'id') || get(model, 'DOI').replace('/', '_')};
	}
});
