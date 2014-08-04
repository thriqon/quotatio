/*
function statusCheckingCallback(resolve, reject) {
	return function (data) {
		if (data.status === 'ok') {
			Ember.run(null, resolve, data.data);
		} else {
			Ember.run(null, reject, data.error);
		}
	};
}

export default DS.Adapter.extend({
	_buildActionKey : function (type, action) {
		return type.typeKey.pluralize() + ":" + action;
	},
	_promisfiedIoCall: function promisfiedIoCall (type, action, data) {
		return new Ember.RSVP.Promise(function promiseCallbackFind (resolve, reject) {
			io.emit(this._buildActionKey(type, action), data, statusCheckingCallback(resolve, reject));
		}.bind(this));
	},
	find: function find (store, type, id) {
		return this._promisfiedIoCall(type, "get", {id: id});
	},

	createRecord: function createRecord (store, type, record) {
		return this._promisfiedIoCall(type, "create", this.serialize(record));
	},

	deleteRecord: function deleteRecord (store, type, record) {
		return this._promisfiedIoCall(type, "delete", {id: record.get("id")});
	},

	findQuery: function findQuery (store, type, query) {
		return this._promisfiedIoCall(type, "query", query);
	},

	findAll: function findAll (store, type) {
		return this._promisfiedIoCall(type, "mine", {});
	},
       //TODO fix
	*findAll: function (store, type, since) {
		return new Ember.RSVP.Promise(function (resolve, reject) {
			io.emit('files:mine', {}, function (data) {
				data.files.forEach(function (r) {
					store.serializerFor(type).normalize(type, r);
					store.push(type, r);
				});
				resolve(data);
			});
		});
	}*
});
*/
