
class NewProjectController extends Ember.Controller
	newProjectName: 'a',
	actions:
		create: ->
			@store.createRecord('project', name: @newProjectName)
			.save().then => @transitionTo 'bibliotheca'

`export default NewProjectController`
