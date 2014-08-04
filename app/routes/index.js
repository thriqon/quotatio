
export default Ember.Route.extend(/*Ember.UserApp.ProtectedRouteMixin,*/ {
	model: function () {
		return this.get('store').find('file');
	}
});
