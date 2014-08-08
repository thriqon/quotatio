import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

var App = Ember.Application.extend({
  modulePrefix: 'quotatio', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'quotatio');

export default App;
