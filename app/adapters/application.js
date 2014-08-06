
function docId() {
	return Array.prototype.join.call(arguments, '/');
}

function idOfType(type, id) {
	return docId(type.typeKey, id);
}

function generateId() {
	var id = (new Date().getTime()/1e6 * Math.random() * 1e11).toString();
	if (window.btoa) {
		// shorter IDs for everybody except IE users
		return window.btoa(id);
	} else {
		return id;
	}
}

export default DS.Adapter.extend({
	_pouch: new PouchDB("quotatio"),
	_promisedPouch: function (name) {
		return Ember.RSVP.denodeify(this.get('_pouch')[name], this.get('_pouch'));
	},
	find: function (store, type, id) {
		return this._promisedPouch('get')(idOfType(type, id));
	},

	findAll: function (store, type) {
		return this._promisedPouch('allDocs')({startkey: idOfType(type, ''), endkey: idOfType(type, '~'), include_docs: true})
			.then(function (results) {
				return results.rows.mapBy('doc');
			});
	},

	createRecord: function (store, type, record) {
		record = this.serialize(record, {includeId: true});
		if (!record._id) {
			record._id = idOfType(type, generateId());
			return this._promisedPouch('post')(record);
		} else {
			return this._promisedPouch('put')(record, record._id, record._rev);
		}
	}
});
