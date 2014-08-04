
/* global Ember */
export default Ember.View.extend({
	didInsertElement: function () {
		this.$().foundation();
	}
});
