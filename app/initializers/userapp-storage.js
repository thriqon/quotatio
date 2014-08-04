
export default {
	name: "userapp-storage",
//	after: ['io'],
	initialize: function () { //container, application) {
		return;
/*		var storedToken = localStorage.getItem('ua-token');
		application.deferReadiness();
		io.emit("set_token", {token: storedToken}, function (answer) {
			if (answer.ok === true) {
				application.advanceReadiness();
			} else {
				alert("Setting Token failed");
			}
		});
		window.UserApp.tokenStorage = {
			get: function () {
				return storedToken;
			},
			set: function (token) {
				if (token != storedToken) {
					io.emit("set_token", {token: storedToken});
					localStorage.setItem('ua-token', token);
					application.reset();
				}
			},
			remove: function () {
				io.emit("set_token", {token: null});
				localStorage.removeItem('ua-token');
				storedToken = null
				application.reset();
			}
		};*/
	}
};
