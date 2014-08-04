
export default DS.JSONSerializer.extend({
	normalize: function (type, hash) {
		hash.id = hash._id;
		delete hash._id;
		return this._super.apply(this, arguments);
	},

	serialize: function () {
		var json = this._super.apply(this, arguments);

		if (json.id) {
			json._id = json.id;
			delete json.id;
		}

		return json;
	}
});
