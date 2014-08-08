
DoiAdder = Ember.Component.extend
  doi: '10.1126/science.169.3946.635'
  actions:
    add: ->
      @sendAction 'action', @doi.replace('/', '_')

`export default DoiAdder`
