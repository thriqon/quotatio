
DoiRoute = Ember.Route.extend
	model: (params) ->
		doi: params.doi
	serialize: (model) ->
		doi: model.doi

`export default DoiRoute`
