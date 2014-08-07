
`/* jshint curly:false *//*jshint -W032*//*jshint unused:false*/`


exportkeymap =
  title: 'TI'

importkeymap = {}
Ember.keys(exportkeymap).forEach((key) -> importkeymap[exportkeymap[key]] = key)

mixin RisConverter
  +computed tags.@each.key, tags.@each.value
  asRis: ->
    self = this
    risTags = Ember.A()
    Ember.assert(@typeOfReference, 'TY not set')

    risTags.pushObject risTag('TY', @typeOfReference)
    risTags.pushObjects Ember.keys(exportkeymap).filter((key) -> self.get(key)).map((key) -> risTag(exportkeymap[key], self.get(key)))
    risTags.pushObject risTag('ER', '')
    risTags.join ''

  setFromRisString: (ris) ->
    self = this
    Ember.assert 'RIS argument is mandatory', ris
    ris = ris.replace /\r\n/g, '\n'

    Ember.beginPropertyChanges()
    ris.split('\n')
    .filter(lengthIsGreaterThanZero)
    .map(splitByRisTerminator)
    .map((parts) -> key: parts[0], value: parts[1])
    .map((o) -> key: importkeymap[o.key], value: o.value)
    .filterBy('key')
    .forEach((o) -> self.set(o.key, o.value))
    Ember.endPropertyChanges()

    this


risTag = (key, value) -> "#{key}  - #{value}\r\n"

lengthIsGreaterThanZero = (line) -> line.length > 0

splitByRisTerminator = (line) -> line.split('  - ')

`export default RisConverter`
