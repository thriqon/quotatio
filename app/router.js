import Ember from 'ember';

var Router = Ember.Router.extend({
  location: QuotatioENV.locationType
});

Router.map(function() {
	this.route('login');
	this.route('signup');
	this.resource('load.doi', {path: '/bibliotheca/doi/:doi'}, function () {});
	this.resource('publication', {path: '/publication/:id'});
	this.resource('bibliotheca', {}, function () {});

	this.route('projects.new', {path: '/projects/new'});

  this.resource('projects', {path: '/:owner_id'}, function () {});
});

export default Router;
