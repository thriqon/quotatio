
`import ajax from 'ic-ajax'`

class DoiRoute extends Ember.Route
  model: (params) ->
    store = @store
    ajax(
      url: 'http://dx.doi.org/' + params.doi.replace('_', '/')
      accepts:
        json: 'application/vnd.citationstyles.csl+json'
      dataType: 'json').then (data) ->
        publication = store.createRecord('publication', id: params.doi)
        Ember.keys(data).forEach((key) -> publication.get('tags').pushObject(store.createRecord('singletag', key: key, value: data[key])))
        publication
  afterModel: (model) ->
    @transitionTo('publication', model)

`export default DoiRoute`
