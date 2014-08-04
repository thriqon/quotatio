
DoiAdder = Ember.Component.extend
	doi: 'blah'
	actions:
		add: ->
			@sendAction 'action', @doi

`export default DoiAdder`
