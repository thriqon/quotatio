
export default {
	name: 'userapp',
	after: ['userapp-storage'],
	initialize: function(container, application) {
//		Ember.UserApp.setup(application, { appId: FrontendENV.UserApp_AppId});
		container.register('user:current', {
			current: {
				first_name: "Dummy",
				last_name: "User"
			},
			authenticated: true
		}, {instantiate: false, singleton: true});

		application.inject('route', 'user', 'user:current');
		application.inject('controller', 'user', 'user:current');
	}
};
